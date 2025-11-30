#!/usr/bin/env node
/**
 * Release helper: builds, updates versions.json, and creates a GitHub release with assets.
 * Usage: npm run release -- <version>
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function run(cmd) {
  execSync(cmd, { stdio: "inherit" });
}

function main() {
  const version = process.argv[2];
  if (!version) {
    console.error("Usage: npm run release -- <version>");
    process.exit(1);
  }

  const manifestPath = path.join(process.cwd(), "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  if (manifest.version !== version) {
    console.error(`Version mismatch: manifest.json has ${manifest.version}, requested ${version}`);
    process.exit(1);
  }

  // Build bundle
  run("npm run build");

  // Update versions.json
  const versionsPath = path.join(process.cwd(), "versions.json");
  let versions = {};
  if (fs.existsSync(versionsPath)) {
    versions = JSON.parse(fs.readFileSync(versionsPath, "utf8"));
  }
  versions[version] = manifest.minAppVersion || manifest.minAppVersion; // keep mapping
  fs.writeFileSync(versionsPath, JSON.stringify(versions, null, 2));

  // Create GitHub release with assets
  const assets = ["main.js", "manifest.json", "styles.css"]
    .map((f) => path.join(process.cwd(), f))
    .filter((p) => fs.existsSync(p));

  if (assets.length === 0) {
    console.error("No assets found to upload (main.js/manifest.json/styles.css)");
    process.exit(1);
  }

  const tag = version; // use plain version (no leading v) as required by Obsidian directory
  const title = version;
  const notes = `Release ${version}`;

  run(`gh release create ${tag} ${assets.join(" ")} -t "${title}" -n "${notes}"`);

  console.log("Release complete.");
}

main();
