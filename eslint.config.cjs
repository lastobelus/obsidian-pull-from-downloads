const tsParser = require("@typescript-eslint/parser");
const obsidian = require("eslint-plugin-obsidianmd").default;

const recommendedRules = obsidian.configs?.recommended?.rules || {};

module.exports = [
  {
    ignores: ["node_modules", "dist", "main.js", "main.js.map"]
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module"
    },
    plugins: {
      obsidianmd: obsidian
    },
    rules: {
      ...recommendedRules,
      "obsidianmd/ui/sentence-case": "warn"
    }
  }
];
