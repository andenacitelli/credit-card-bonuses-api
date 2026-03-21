# Credit Card Bonuses API

## Git Hooks

- Avoid `--no-verify` flag on `git commit`; pre-commit hooks are mandatory and enforce formatting
- Pre-commit runs `lint-staged` (prettier + oxlint) and regenerates exports

## Validation

Always run these checks before handing control back to the user:

```sh
npm run lint:oxlint
npm run lint:typecheck
```
