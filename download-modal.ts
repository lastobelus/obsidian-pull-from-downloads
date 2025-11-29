import { App, SuggestModal } from "obsidian";
import * as path from "path";
import { DownloadItem, PullSettings } from "./pull-types";

export class DownloadSelectModal extends SuggestModal<DownloadItem> {
  private infoEl: HTMLElement | null = null;

  constructor(
    app: App,
    private items: DownloadItem[],
    private settings: PullSettings,
    private onSelect: (item: DownloadItem) => void
  ) {
    super(app);
    this.setPlaceholder("Select a file to pull…");
  }

  onOpen() {
    super.onOpen();
    const parent = this.inputEl.parentElement;
    if (parent && !this.infoEl) {
      const legend = parent.createDiv({ cls: "pull-dl-legend" });
      this.inputEl.insertAdjacentElement("afterend", legend);
      this.infoEl = legend;
    }
    this.updateInfo();
  }

  getSuggestions(query: string): DownloadItem[] {
    const lowered = query.toLowerCase();
    return this.items.filter((item) => item.name.toLowerCase().includes(lowered));
  }

  renderSuggestion(item: DownloadItem, el: HTMLElement) {
    const row = el.createDiv({ cls: "pull-dl-row" });
    const nameEl = row.createDiv({ cls: "pull-dl-name" });
    nameEl.setText(item.name);

    const ext = path.extname(item.name).replace(/^\./, "").toUpperCase();
    if (ext) {
      const badge = row.createDiv({ cls: "pull-dl-badge" });
      badge.setText(ext);
    }

    const meta = el.createDiv({ cls: "pull-dl-meta" });
    meta.setText(
      `${formatRelative(item.mtime)} • ${item.mtime.toLocaleString()} • ${formatBytes(item.size)}`
    );
  }

  onChooseSuggestion(item: DownloadItem) {
    this.onSelect(item);
  }

  private updateInfo() {
    if (!this.infoEl) return;
    const moveCopy = this.settings.behavior === "copy" ? "Copy" : "Move";
    const zipMode = this.settings.expandZips ? "Extract zips" : "Keep zips intact";
    this.infoEl.setText(`${moveCopy} • ${zipMode}`);
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

function formatRelative(date: Date): string {
  const diffMs = Date.now() - date.getTime();
  const sec = Math.floor(diffMs / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);

  if (sec < 60) return "just now";
  if (min < 60) return `${min} min ago`;
  if (hr < 24) return `${hr} hr${hr === 1 ? "" : "s"} ago`;
  if (day < 7) return `${day} day${day === 1 ? "" : "s"} ago`;

  return date.toLocaleDateString();
}

export type { DownloadItem };
