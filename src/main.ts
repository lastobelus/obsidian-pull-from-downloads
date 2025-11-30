import {
  App,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  TAbstractFile,
  TFile,
  TFolder
} from "obsidian";
import * as path from "path";
import * as fs from "fs";
import { promises as fsp } from "fs";
import AdmZip from "adm-zip";
import { DownloadItem, PullSettings } from "./pull-types";
import { FuzzyDownloadModal } from "./download-modal";
import {
  DEFAULT_SETTINGS,
  normalizeSettings,
  parseExtList,
  formatExtList,
  clampNumber,
  expandHome
} from "./settings";

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
            .setTitle("Pull from downloads…")
            .setIcon("download")
            .onClick(() => void this.handlePull(targetFolder));
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
      new Notice("No matching files found in downloads.");
      return;
    }

    const modal = new FuzzyDownloadModal(
      this.app,
      candidates,
      this.settings,
      async (item) => {
        await this.processSelection(item, targetFolder);
      }
    );

    modal.open();
  }

  private async processSelection(item: DownloadItem, targetFolder: TFolder) {
    const baseAdapter = this.app.vault.adapter as unknown;
    if (!(baseAdapter as { getBasePath?: () => string })?.getBasePath) {
      new Notice("File system adapter not available on this platform.");
      return;
    }

    const vaultBase = (baseAdapter as { getBasePath: () => string }).getBasePath();
    const targetDir = path.join(vaultBase, normalizePath(targetFolder.path));

    try {
      await ensureDir(targetDir);
      const isZip = path.extname(item.name).toLowerCase() === ".zip";

      let action = "Pulled";
      if (isZip && this.settings.expandZips) {
        await extractZip(item.absolutePath, targetDir, this.settings.zipCollision);
        action = "Expanded";
      } else {
        await moveOrCopyFile(item.absolutePath, targetDir, this.settings.behavior);
      }

      new Notice(`${action} ${item.name} into ${targetFolder.path}`);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(error);
      new Notice(`Pull failed: ${message}`);
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

class PullSettingsTab extends PluginSettingTab {
  plugin: PullFromDownloadsPlugin;

  constructor(app: App, plugin: PullFromDownloadsPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName('Pull from downloads')
      .setHeading();

    containerEl.createEl('a', { text: 'Created by lastobelus', href: 'https://github.com/lastobelus/' })

    new Setting(containerEl)
      .setName('Settings')
      .setHeading();
    new Setting(containerEl)
      .setName("Downloads directory")
      .setDesc("Path to scan; ~ is expanded.")
      .addText((text) =>
        text
      .setPlaceholder("~/downloads")
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
      .setDesc("Move (default) removes from downloads; copy leaves it there.")
      .addDropdown((dropdown) =>
        dropdown
          .addOption("move", "Move")
          .addOption("copy", "Copy")
          .setValue(this.plugin.settings.behavior)
          .onChange(async (value) => {
            this.plugin.settings.behavior = value as "move" | "copy";
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
          .setPlaceholder("Zip, PDF, PNG")
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
          .setPlaceholder("Tmp, crdownload")
          .setValue(formatExtList(this.plugin.settings.blacklist))
          .onChange(async (value) => {
            this.plugin.settings.blacklist = parseExtList(value);
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl).setName("Zip files").setHeading();

    new Setting(containerEl)
      .setName("Extract zip files")
      .setDesc("If off, zips are moved/copied without extracting.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.expandZips)
          .onChange(async (value) => {
            this.plugin.settings.expandZips = value;
            await this.plugin.saveSettings();
            this.display();
          })
      );

    const collisionSetting = new Setting(containerEl)
      .setName("Zip collision handling")
      .setDesc(
        this.plugin.settings.expandZips
          ? "Choose how to handle existing files when extracting zips."
          : "Enable 'Extract zip files' to configure collision handling."
      );

    collisionSetting
      .addDropdown((dropdown) =>
        dropdown
          .addOption("version", "Version existing files")
          .addOption("overwrite", "Overwrite existing files")
          .setValue(this.plugin.settings.zipCollision)
          .onChange(async (value) => {
            this.plugin.settings.zipCollision = value as "version" | "overwrite";
            await this.plugin.saveSettings();
          })
      )
      .setDisabled(!this.plugin.settings.expandZips);
  }
}

// Helpers

function normalizePath(p: string): string {
  return p.replace(/\\/g, "/");
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
  const ignoredNames = new Set([
    ".DS_Store",
    "Thumbs.db",
    "desktop.ini"
  ]);
  if (ignoredNames.has(name)) return false;

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
  } catch (error: unknown) {
    const err = error as NodeJS.ErrnoException;
    if (err?.code === "EXDEV") {
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
  } catch {
    return false;
  }
}
