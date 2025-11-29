# Development Notes

This document contains all technical details for contributors and future maintainers.

## Build & Install
```bash
npm install
npm run build
OBSIDIAN_VAULT="/path/to/vault" npm run install:local
```

Manual install:
1. Build.
2. Copy output (`main.js`, `manifest.json`, `styles.css`) into:
```
<vault>/.obsidian/plugins/pull-from-downloads/
```
3. Enable plugin in Obsidian.

## What It Does
- Adds context menu item.
- Lists recent Downloads with filters.
- Moves/copies or extracts into target.
- Handles collisions (version/overwrite).
- Notifies user and refreshes explorer.

## Settings
- Downloads dir
- Number of files
- Move/Copy
- Whitelist/Blacklist
- Extract ZIPs
- Collision handling

## Code Structure
- Source: `main.ts`
- Build output: `main.js` (plugin root)
