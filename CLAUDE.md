# Credit Card Bonuses API

## Mise

- All CLI deps are versioned via mise (`mise.toml`); run tools with `mise exec --`
- Cross-reference `mise.toml` for version-sensitive flags

## Git

- Never use `--no-verify` on commits; pre-commit hooks (prettier + oxlint + export regen) are mandatory
- Always commit and push before returning control; never ask the user if they want you to
- Auto-create an open PR (not draft) when not on the default branch

## Data Rules

- `historicalOffers` must never be empty for cards that have current offers — at minimum, copy the current offer(s) into `historicalOffers`. Cards with no current offers (discontinued, no active bonus) are exempt.

## Validation

Always run before returning control:

```sh
mise exec -- pnpm run lint:oxlint
mise exec -- pnpm run lint:typecheck
```
