<p align="center">
  <img src="assets/logo.png" width="120" alt="Pull from Downloads logo" />
</p>

<h1 align="center">Pull from Downloads — Simple ZIP & File Import for Obsidian</h1>

<h2 align="center">Right‑click any folder → import the most recent item from your Downloads.</h2>

<h2 align="center">Zips extract automatically. Files move or copy.</h2>

---

## Overview
Lets you right-click any folder in your Obsidian vault and quickly pull in one of your most recent downloads. ZIP files are extracted automatically (with folder structure preserved), and regular files are moved or copied depending on your settings.

Perfect if you often get multi-file ZIPs from AI chat agents, code generators, or other tools and want them to land exactly where they belong in your vault with almost no friction.

## Features
- Adds **Pull from Downloads…** to the file explorer’s right-click menu  
- Shows your most recent downloads (configurable list length)  
- Automatically extracts ZIP files into the target folder (configurable) 
- Moves or copies regular files (your choice)  
- Optional whitelist/blacklist of file extensions  
- Configurable source directory (default: `~/Downloads`)  
- Handles filename collisions (version or overwrite)

---

### Usage
1. Right-click a folder (or a file — the plugin uses its parent folder).  
2. Choose **Pull from Downloads…**  
3. Select a recent file from your Downloads directory.  
   - ZIPs extract into the folder  
   - Regular files move or copy based on your settings  

That’s it. Ideal for AI-generated artifacts: ask your agent to emit a ZIP into Downloads, then pull it into place in two clicks.

---

### Install
To install manually:

1. Build the plugin (see below), or download the release assets.  
2. Copy these three files into your vault at: `<vault>/.obsidian/plugins/pull-from-downloads/`  
3. Reload Obsidian and enable **Pull from Downloads** in Settings → Community Plugins.

### Settings
- Downloads directory: default `~/Downloads`; `~` is expanded.
- Number of files: default 10 (1–100).
- Behavior: Move (default) or Copy.
- Selection mode: List (filter as you type) or Fuzzy (quick-switcher style).
- Whitelist extensions: comma/space separated; if set, only these show and blacklist is ignored.
- Blacklist extensions: comma/space separated; ignored when whitelist is set. Leave whitelist empty to rely on blacklist.
- Extract zip files: on by default; if off, zips are moved/copied as-is.
- Zip collision handling: Version existing files (default) or Overwrite existing files.

### Build

```bash
npm install
npm run build
```

Optional: install directly into a vault (after build):

```bash
OBSIDIAN_VAULT="/absolute/path/to/your/vault" npm run install:local
```

### Release
- Bump version in `manifest.json` (and `package.json` if desired).
- Run `npm run release -- <version>` to build, update `versions.json`, and publish a GitHub release with assets.
