---
allowed-tools: Bash, Read, Edit, Write, Glob, Grep
disable-model-invocation: true
---

Merge the remote `master` branch into the current branch, resolve any conflicts, validate, and push.

## Steps

1. Run `git fetch origin master` to get the latest remote master.

2. Run `git merge origin/master` to merge master into the current branch.

3. If the merge succeeds with no conflicts, skip to step 5.

4. If there are merge conflicts:

   - Read each conflicted file and resolve conflicts, preferring the current branch's intent. The current branch's changes represent the work we want to keep — use master's changes only where they don't contradict the current branch's goals.
   - Stage each resolved file with `git add`.
   - Complete the merge with `git commit --no-edit`.

5. Run validation from the repository root:

   - `pnpm run lint:oxlint` (oxlint)
   - `pnpm run lint:typecheck` (TypeScript)
     If there are errors, fix them and commit the fixes as a separate commit.

6. Push the result to the remote with `git push`.
