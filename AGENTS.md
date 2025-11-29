# Agent Operating Notes

- If the user's prompt contains questions, **answer them first and wait for an explicit “go ahead” (or similar) before running commands or making repo changes.** After approval, proceed with implementation.
- Exception for unattended / non-interactive runs (e.g., one-shot `--full-auto`): answer the questions, then proceed automatically without waiting.
- Use `npm run install:local` with `OBSIDIAN_VAULT` set when installing into a vault.
- Keep commits conventional; push to `origin/development`.
