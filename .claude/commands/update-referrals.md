# Update Referral Links

Update `src/data/referral-links.ts` with user-supplied referral link information. Do NOT modify card offers, bonuses, or any other card data.

## Input

The user will provide referral link text, typically copy-pasted from Chase (or another issuer's) referral page. Each entry includes a description of the cards it covers and a URL.

## Mapping Logic

1. Read the current `src/data/referral-links.ts` file.
2. Parse each user-supplied referral link and determine which `REFERRALS` key it maps to based on the URL pattern and description:
   - **Chase Sapphire** (`REFERRALS.CHASE.SAPPHIRE`): URLs matching `referyourchasecard.com/19*` — covers Sapphire Preferred and Sapphire Reserve
   - **Chase Inks** (`REFERRALS.CHASE.INKS`): URLs matching `referyourchasecard.com/21*` — covers Ink Business cards and Sapphire Reserve for Business
   - **Chase Freedom** (`REFERRALS.CHASE.FREEDOM`): URLs matching `referyourchasecard.com/18*` — covers Freedom Unlimited and Freedom Flex
   - **Chase United** (`REFERRALS.CHASE.UNITED`): URLs matching `referyourchasecard.com/215*` — covers all United MileagePlus cards
   - **Chase Southwest** (`REFERRALS.CHASE.SOUTHWEST`): URLs matching `referyourchasecard.com/226*` — covers all Southwest Rapid Rewards cards
   - **Chase Marriott** (`REFERRALS.CHASE.MARRIOTT`): URLs matching `referyourchasecard.com/252*` — covers all Marriott Bonvoy cards
   - For non-Chase issuers, match by issuer name and card family in the description.
3. If a key receives multiple new URLs, include all of them in the `getRandom([...])` array.
4. If a key is not mentioned in the user's input, leave it unchanged.

## Rules

- Only modify `src/data/referral-links.ts`. Do not touch any card data files.
- Replace the full URL array for each matched key — user-supplied links are the current set, not additive to old links.
- Preserve any referral keys not covered by the user's input.
- Preserve the `getRandom([...])` wrapper and overall file structure.

## After Updating

1. Run `npm run lint:oxlint` and `npm run lint:typecheck` to validate.
2. Commit and push. Create a PR if not on the default branch.
3. Print a short summary of what changed (old URLs vs new URLs for each key).
