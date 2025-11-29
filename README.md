# Pull from Downloads

Quickly pull a recent file (or extract a zip) from your Downloads folder into any folder in your Obsidian vault via the file explorer context menu.

## What it does
- Adds `Pull from Downloads…` to the file explorer context menu for both folders and files (files use their parent folder).
- Shows your most recent Downloads (newest first), with optional whitelist/blacklist filters and a configurable list length.
- Moves (default) or copies the chosen file into the target folder. If the file is a `.zip`, it is extracted into that folder; collisions can either be versioned (default) or overwritten.
- Refreshes the file explorer and shows a brief notice once done. Errors are surfaced with notices.

Perfect for AI-generated outputs: have your AI tool save a multi-file project as a zip in `~/Downloads`, then use this plugin to pull and extract it into the right spot in your vault in two clicks.

## Install & build
```bash
npm install
npm run build
# optionally install straight into your vault (requires OBSIDIAN_VAULT env var)
OBSIDIAN_VAULT="/path/to/your/vault" npm run install:local
# `~` is supported: OBSIDIAN_VAULT="~/Library/Mobile Documents/com~apple~CloudDocs/ObsidianNotes"
```

Manual install into a vault:
1. Build as above (produces `main.js`, `manifest.json`, `styles.css`).
2. Copy these files into `<vault>/.obsidian/plugins/pull-from-downloads/`.
3. In Obsidian, enable **Pull from Downloads** in Settings → Community Plugins.

## Usage
1. Right-click any folder (or file) in the file explorer.
2. Choose **Pull from Downloads…**.
3. Pick a recent file. If it’s a zip, it will be extracted into the target folder; otherwise it will be moved (or copied, if you choose that setting).

## Settings
- **Downloads directory**: default `~/Downloads`; `~` is expanded.
- **Number of files**: default 10 (1–100).
- **Behavior**: Move (default) or Copy.
- **Whitelist extensions**: comma/space separated; empty means no whitelist.
- **Blacklist extensions**: comma/space separated; empty means no blacklist. Whitelist wins if both are set.
- **Zip collision handling**: Version existing files (default) or Overwrite existing files.

### Zip collisions
When extracting zips, you can choose:
- **Version existing files** (default): append `-1`, `-2`, … before the extension.
- **Overwrite existing files**: replace files of the same path.

## Develop
- `npm run dev` watches and rebuilds.
- Code lives in `main.ts`; build output is `main.js` at the repo root, matching Obsidian’s expectation.
