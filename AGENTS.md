# Agent Operating Notes

- If the user's prompt clearly contains a question (ends with `?` or is explicitly phrased as a question), **answer it first and wait for an explicit “go ahead” (or similar) before running commands or making repo changes.** Imperative statements like “tell me …” without a question mark are not treated as questions. After approval, proceed with implementation.
- Before committing, ensure `npm run lint` passes (run a lint dry-run first if required by automation).
- Exception for unattended / non-interactive runs (e.g., one-shot `--full-auto`): answer the questions, then proceed automatically without waiting.
- Use `npm run install:local` with `OBSIDIAN_VAULT` set when installing into a vault.
- Keep commits conventional; push to `origin/development`.
