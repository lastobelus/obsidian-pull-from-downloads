import {
  App,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  SuggestModal,
  TAbstractFile,
  TFile,
  TFolder
} from "obsidian";
import * as path from "path";
import * as fs from "fs";
import { promises as fsp } from "fs";
import * as os from "os";
import AdmZip from "adm-zip";

interface PullSettings {
  downloadsDir: string;
  listLimit: number;
  behavior: "move" | "copy";
  whitelist: string[];
  blacklist: string[];
  zipCollision: "version" | "overwrite";
}

const DEFAULT_SETTINGS: PullSettings = {
  downloadsDir: "~/Downloads",
  listLimit: 10,
  behavior: "move",
  whitelist: [],
  blacklist: [],
  zipCollision: "version"
};

interface DownloadItem {
  name: string;
  absolutePath: string;
  mtime: Date;
  size: number;
}

export default class PullFromDownloadsPlugin extends Plugin {
  settings: PullSettings = { ...DEFAULT_SETTINGS };

  async onload() {
    await this.loadSettings();

    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        const targetFolder = this.getTargetFolder(file);
        if (!targetFolder) return;

        menu.addItem((item) => {
          item
            .setTitle("Pull from Downloads…")
            .setIcon("download")
            .onClick(() => this.handlePull(targetFolder));
        });
      })
    );

    this.addSettingTab(new PullSettingsTab(this.app, this));
  }

  async handlePull(targetFolder: TFolder) {
    const downloadsPath = expandHome(this.settings.downloadsDir);

    let candidates: DownloadItem[] = [];
    try {
      candidates = await getRecentFiles(downloadsPath, this.settings);
    } catch (error) {
      console.error(error);
      new Notice("Unable to read downloads directory. Check settings.");
      return;
    }

    if (candidates.length === 0) {
      new Notice("No matching files found in Downloads.");
      return;
    }

    const modal = new DownloadSelectModal(this.app, candidates, async (item) => {
      await this.processSelection(item, targetFolder);
    });

    modal.open();
  }

  private async processSelection(item: DownloadItem, targetFolder: TFolder) {
    const baseAdapter = this.app.vault.adapter;
    if (!(baseAdapter as any).getBasePath) {
      new Notice("File system adapter not available on this platform.");
      return;
    }

    const vaultBase = (baseAdapter as any).getBasePath() as string;
    const targetDir = path.join(vaultBase, normalizePath(targetFolder.path));

    try {
      await ensureDir(targetDir);
      const isZip = path.extname(item.name).toLowerCase() === ".zip";

      if (isZip) {
        await extractZip(item.absolutePath, targetDir, this.settings.zipCollision);
      } else {
        await moveOrCopyFile(item.absolutePath, targetDir, this.settings.behavior);
      }

      new Notice(`Pulled ${item.name} into ${targetFolder.path}`);
    } catch (error) {
      console.error(error);
      new Notice(`Pull failed: ${(error as Error).message}`);
    }
  }

  getTargetFolder(file: TAbstractFile | null): TFolder | null {
    if (!file) return null;
    if (file instanceof TFolder) return file;
    if (file instanceof TFile) return file.parent;
    return null;
  }

  async loadSettings() {
    const data = await this.loadData();
    this.settings = normalizeSettings({ ...DEFAULT_SETTINGS, ...(data ?? {}) });
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class DownloadSelectModal extends SuggestModal<DownloadItem> {
  constructor(
    app: App,
    private items: DownloadItem[],
    private onSelect: (item: DownloadItem) => void
  ) {
    super(app);
    this.setPlaceholder("Select a file to pull…");
  }

  getSuggestions(query: string): DownloadItem[] {
    const lowered = query.toLowerCase();
    return this.items.filter((item) => item.name.toLowerCase().includes(lowered));
  }

  renderSuggestion(item: DownloadItem, el: HTMLElement) {
    const title = el.createEl("div", { cls: "suggestion-title" });
    title.setText(item.name);

    const subtitle = el.createEl("div", { cls: "suggestion-note" });
    subtitle.setText(
      `${item.mtime.toLocaleString()} • ${formatBytes(item.size)}`
    );
  }

  onChooseSuggestion(item: DownloadItem) {
    this.onSelect(item);
  }
}

class PullSettingsTab extends PluginSettingTab {
  plugin: PullFromDownloadsPlugin;

  constructor(app: App, plugin: PullFromDownloadsPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    containerEl.createEl("h2", { text: "Pull from Downloads" });

    new Setting(containerEl)
      .setName("Downloads directory")
      .setDesc("Path to scan; ~ is expanded.")
      .addText((text) =>
        text
          .setPlaceholder("~/Downloads")
          .setValue(this.plugin.settings.downloadsDir)
          .onChange(async (value) => {
            this.plugin.settings.downloadsDir = value || DEFAULT_SETTINGS.downloadsDir;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Number of files")
      .setDesc("How many recent files to show (1-100)")
      .addText((text) =>
        text
          .setPlaceholder("10")
          .setValue(String(this.plugin.settings.listLimit))
          .onChange(async (value) => {
            const num = clampNumber(parseInt(value, 10), 1, 100, DEFAULT_SETTINGS.listLimit);
            this.plugin.settings.listLimit = num;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Behavior")
      .setDesc("Move (default) removes from Downloads; Copy leaves it there.")
      .addDropdown((dropdown) =>
        dropdown
          .addOption("move", "Move")
          .addOption("copy", "Copy")
          .setValue(this.plugin.settings.behavior)
          .onChange(async (value: "move" | "copy") => {
            this.plugin.settings.behavior = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Whitelist extensions")
      .setDesc(
        "Comma/space separated. If set, only these extensions are shown and blacklist is ignored."
      )
      .addText((text) =>
        text
          .setPlaceholder("zip, pdf, png")
          .setValue(formatExtList(this.plugin.settings.whitelist))
          .onChange(async (value) => {
            this.plugin.settings.whitelist = parseExtList(value);
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Blacklist extensions")
      .setDesc(
        "Comma/space separated. Ignored when whitelist is non-empty. Leave whitelist empty to use blacklist."
      )
      .addText((text) =>
        text
          .setPlaceholder("tmp, crdownload")
          .setValue(formatExtList(this.plugin.settings.blacklist))
          .onChange(async (value) => {
            this.plugin.settings.blacklist = parseExtList(value);
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Zip collision handling")
      .setDesc("Choose how to handle existing files when extracting zips.")
      .addDropdown((dropdown) =>
        dropdown
          .addOption("version", "Version existing files")
          .addOption("overwrite", "Overwrite existing files")
          .setValue(this.plugin.settings.zipCollision)
          .onChange(async (value: "version" | "overwrite") => {
            this.plugin.settings.zipCollision = value;
            await this.plugin.saveSettings();
          })
      );
  }
}

// Helpers

function normalizePath(p: string): string {
  return p.replace(/\\/g, "/");
}

function expandHome(input: string): string {
  if (input.startsWith("~")) {
    return path.join(os.homedir(), input.slice(1));
  }
  return input;
}

function parseExtList(input: string): string[] {
  return input
    .split(/[\s,]+/)
    .map((s) => s.trim().replace(/^\./, "").toLowerCase())
    .filter(Boolean);
}

function formatExtList(list: string[]): string {
  return list.join(", ");
}

function clampNumber(value: number, min: number, max: number, fallback: number): number {
  if (Number.isNaN(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

function normalizeSettings(settings: PullSettings): PullSettings {
  return {
    downloadsDir: settings.downloadsDir?.trim() || DEFAULT_SETTINGS.downloadsDir,
    listLimit: clampNumber(settings.listLimit, 1, 100, DEFAULT_SETTINGS.listLimit),
    behavior: settings.behavior === "copy" ? "copy" : "move",
    whitelist: parseExtList(formatExtList(settings.whitelist || [])),
    blacklist: parseExtList(formatExtList(settings.blacklist || [])),
    zipCollision: settings.zipCollision === "overwrite" ? "overwrite" : "version"
  };
}

async function getRecentFiles(dir: string, settings: PullSettings): Promise<DownloadItem[]> {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile());

  const stats = await Promise.all(
    files.map(async (entry) => {
      const absolutePath = path.join(dir, entry.name);
      const stat = await fsp.stat(absolutePath);
      return { entry, stat, absolutePath };
    })
  );

  const whitelist = settings.whitelist;
  const blacklist = settings.blacklist;

  const filtered = stats
    .filter(({ entry }) => shouldInclude(entry.name, whitelist, blacklist))
    .sort((a, b) => b.stat.mtimeMs - a.stat.mtimeMs)
    .slice(0, settings.listLimit)
    .map(({ entry, stat, absolutePath }) => ({
      name: entry.name,
      absolutePath,
      mtime: stat.mtime,
      size: stat.size
    }));

  return filtered;
}

function shouldInclude(name: string, whitelist: string[], blacklist: string[]): boolean {
  const ext = path.extname(name).replace(/^\./, "").toLowerCase();
  if (whitelist.length > 0) {
    return whitelist.includes(ext);
  }
  if (blacklist.length > 0) {
    return !blacklist.includes(ext);
  }
  return true;
}

async function ensureDir(dir: string) {
  await fsp.mkdir(dir, { recursive: true });
}

async function moveOrCopyFile(source: string, targetDir: string, behavior: "move" | "copy") {
  const targetPath = await uniquePath(path.join(targetDir, path.basename(source)));

  if (behavior === "copy") {
    await fsp.copyFile(source, targetPath);
    return;
  }

  try {
    await fsp.rename(source, targetPath);
  } catch (error: any) {
    if (error.code === "EXDEV") {
      await fsp.copyFile(source, targetPath);
      await fsp.unlink(source);
    } else {
      throw error;
    }
  }
}

async function extractZip(
  zipPath: string,
  targetDir: string,
  strategy: "version" | "overwrite"
) {
  const zip = new AdmZip(zipPath);
  const entries = zip.getEntries();

  for (const entry of entries) {
    const entryName = normalizePath(entry.entryName);
    const destPath = path.join(targetDir, entryName);

    if (entry.isDirectory) {
      await ensureDir(destPath);
      continue;
    }

    const finalPath =
      strategy === "overwrite" ? destPath : await uniquePath(destPath);
    await ensureDir(path.dirname(finalPath));
    const data = entry.getData();
    await fsp.writeFile(finalPath, data);
  }
}

async function uniquePath(targetPath: string): Promise<string> {
  if (!(await exists(targetPath))) return targetPath;

  const dir = path.dirname(targetPath);
  const ext = path.extname(targetPath);
  const base = path.basename(targetPath, ext);

  let counter = 1;
  while (true) {
    const candidate = path.join(dir, `${base}-${counter}${ext}`);
    if (!(await exists(candidate))) return candidate;
    counter += 1;
  }
}

async function exists(p: string): Promise<boolean> {
  try {
    await fsp.access(p, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);
  return `${value.toFixed(value >= 10 || i === 0 ? 0 : 1)} ${sizes[i]}`;
}
