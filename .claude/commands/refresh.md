---
allowed-tools: Bash, Read, Edit, Write, Glob, Grep
disable-model-invocation: true
---

Merge remote `master` into the current branch, validate, and push.

1. `git fetch origin master && git merge origin/master`
2. If conflicts: resolve favoring current branch intent, `git add` resolved files, `git commit --no-edit`
3. Fix any validation errors as a separate commit:
   - `mise exec -- pnpm run lint:oxlint`
   - `mise exec -- pnpm run lint:typecheck`
4. `git push`
5. If the branch has an open PR, audit title/description against `git diff master...HEAD` — update with `gh pr edit` if they've diverged
