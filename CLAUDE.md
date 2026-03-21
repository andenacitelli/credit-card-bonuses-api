# Credit Card Bonuses API

## Mise

- All CLI dependencies are versioned through mise; see `mise.toml` for pinned versions
- Run CLI tools via `mise exec --` to ensure the correct version is used
- Cross-reference `mise.toml` when using potentially version-sensitive behavior (very old or very new flags/options) of any managed tool

## Git

- Avoid `--no-verify` flag on `git commit`; pre-commit hooks are mandatory and enforce formatting
- Pre-commit runs `lint-staged` (prettier + oxlint) and regenerates exports
- Always commit and push before returning control to the user. You can ask the user to clarify things of course, but should never prompt the user along the lines of "would you like me to commit and push this?"
- Always bias towards automatic PR creation (open, not draft) if you are not on the default branch. This is common in worktrees and/or when you are running through the Conductor application.

## Validation

Always run these checks before handing control back to the user:

```sh
npm run lint:oxlint
npm run lint:typecheck
```
