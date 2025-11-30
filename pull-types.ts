export interface PullSettings {
  downloadsDir: string;
  listLimit: number;
  behavior: "move" | "copy";
  whitelist: string[];
  blacklist: string[];
  zipCollision: "version" | "overwrite";
  expandZips: boolean;
  selectionMode: "list" | "fuzzy";
}

export interface DownloadItem {
  name: string;
  absolutePath: string;
  mtime: Date;
  size: number;
}
