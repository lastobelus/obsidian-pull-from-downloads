import * as path from "path";
import * as os from "os";
import { PullSettings } from "./pull-types";

export const DEFAULT_SETTINGS: PullSettings = {
  downloadsDir: "~/Downloads",
  listLimit: 10,
  behavior: "move",
  whitelist: [],
  blacklist: [],
  zipCollision: "version",
  expandZips: true
};

export function normalizeSettings(settings: PullSettings): PullSettings {
  return {
    downloadsDir: settings.downloadsDir?.trim() || DEFAULT_SETTINGS.downloadsDir,
    listLimit: clampNumber(settings.listLimit, 1, 100, DEFAULT_SETTINGS.listLimit),
    behavior: settings.behavior === "copy" ? "copy" : "move",
    whitelist: parseExtList(formatExtList(settings.whitelist || [])),
    blacklist: parseExtList(formatExtList(settings.blacklist || [])),
    zipCollision: settings.zipCollision === "overwrite" ? "overwrite" : "version",
    expandZips: settings.expandZips !== false
  };
}

export function parseExtList(input: string): string[] {
  return input
    .split(/[\s,]+/)
    .map((s) => s.trim().replace(/^\./, "").toLowerCase())
    .filter(Boolean);
}

export function formatExtList(list: string[]): string {
  return list.join(", ");
}

export function clampNumber(value: number, min: number, max: number, fallback: number): number {
  if (Number.isNaN(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

export function expandHome(input: string): string {
  if (input.startsWith("~")) {
    return path.join(os.homedir(), input.slice(1));
  }
  return input;
}
