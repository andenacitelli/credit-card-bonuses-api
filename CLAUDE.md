# CLAUDE.md

## Git Hooks

- Avoid `--no-verify` flag on `git commit`; pre-commit hooks are mandatory and enforce formatting
- Pre-commit runs `lint-staged` (prettier + oxlint) and regenerates exports
