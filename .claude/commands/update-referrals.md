---
disable-model-invocation: true
---

# Update Referral Links

Update `src/data/referral-links.ts` with user-supplied referral links. Do not modify any card data.

## Mapping

Read `src/data/referral-links.ts`, then map each user-supplied URL to the correct `REFERRALS` key by URL pattern:

| Key               | URL pattern                                                                       |
| ----------------- | --------------------------------------------------------------------------------- |
| `CHASE.SAPPHIRE`  | `referyourchasecard.com/19*` — Sapphire Preferred + Reserve                       |
| `CHASE.INKS`      | `referyourchasecard.com/21*` — Ink Business cards + Sapphire Reserve for Business |
| `CHASE.FREEDOM`   | `referyourchasecard.com/18*` — Freedom Unlimited + Flex                           |
| `CHASE.UNITED`    | `referyourchasecard.com/215*` — all United MileagePlus cards                      |
| `CHASE.SOUTHWEST` | `referyourchasecard.com/226*` — all Southwest cards                               |
| `CHASE.MARRIOTT`  | `referyourchasecard.com/252*` — all Marriott Bonvoy cards                         |

For non-Chase issuers, match by issuer name and card family in the description.

## Rules

- **Replace** the full URL array for each matched key — user-supplied links are the new complete set, not additive
- Multiple URLs for one key → include all in `getRandom([...])`
- Keys not mentioned in the user's input → leave unchanged
- Preserve `getRandom([...])` wrapper and file structure

## After Updating

1. Run `mise exec -- pnpm run lint:oxlint` and `mise exec -- pnpm run lint:typecheck`
2. Commit, push, create PR if not on default branch
3. Print a short summary: old URLs → new URLs for each changed key
