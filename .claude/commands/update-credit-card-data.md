---
disable-model-invocation: true
---

# Update Credit Card Data

Audit and update sign-up bonus offers in `src/data/cards/`. Compare each card's `offers` array against current real-world data and update anything stale.

> **Branch naming**: Include the full date in `YYYYMMDD` form (e.g. `update-20260418`). This runs multiple times per month.

## Core Rule: Guaranteed Offers Only

**Only record offers that every eligible applicant is guaranteed to receive.** Reject any offer framed as "as high as", "up to", "you may be eligible for", or any other variable/personalized language — these depend on issuer eligibility checks and are not guaranteed. The offers on this site are a hard minimum: users should be confident they can get exactly what's shown.

## Data Structure

Each card has `offers` (current public offers) and `historicalOffers` (past offers). Each offer: `amount[]`, `spend`, `days`, `credits[]`, optional `details`/`url`/`referralUrl`/`expiration`.

Update rules:

1. If current offer matches — leave it alone
2. If offer changed — move old offer(s) to `historicalOffers` (add `expiration` = today or known end date), replace `offers` with new
3. Preserve `referralUrl`/`url` and `credits` unless you have specific info they changed
4. Don't modify card-level fields without high confidence
5. If you can't verify a card — leave it unchanged, note it in summary
6. **Keep both elevated + normal offers**: When a card has a temporary elevated offer (with `expiration`) alongside a normal ongoing offer, list both — elevated first, normal second (no expiration). This lets the site auto-filter the elevated offer when it expires without a code change.

## Sources (priority order)

1. **DoC Spreadsheet** — `https://docs.google.com/spreadsheets/d/1UEWoLQ3JqVIwHPRuXYuGw13pI5bzQ1C6f37q6RU1idE/export?format=csv`
2. **DoC Best Bonuses** — `https://www.doctorofcredit.com/best-current-credit-card-sign-bonuses/`
3. **DoC Cash Bonuses** — `https://www.doctorofcredit.com/best-cash-credit-card-sign-up-bonuses/`
4. **USCreditCardGuide** — `https://www.uscreditcardguide.com/en/`
5. **DoC Credit Cards category** — `https://www.doctorofcredit.com/category/credit-cards/`
6. **WebSearch** — `"[card name] [issuer] sign up bonus 2026"` (fallback for gaps)
7. **Exa MCP** — last resort only (rate limits)

**Never visit issuer websites directly** (chase.com, americanexpress.com, etc.) — scraping prevention will block the IP.

## Additional Guidelines

- Skip targeted, incognito-only, or non-public offers
- Multiple concurrent public offers are OK — keep both if distinct
- Watch `currency` on amounts — omitting it defaults to the card's `currency` field
- Add `expiration: "YYYY-MM-DD"` when a source mentions an end date

## Process

1. Fetch DoC spreadsheet (CSV) and parse — broadest coverage in one request
2. Fetch DoC best bonuses pages to cross-reference
3. Fetch USCreditCardGuide for recent changes
4. Read all card files in `src/data/cards/` and compare against findings
5. Use WebSearch for any cards not found in primary sources
6. Use Exa only for remaining gaps
7. Edit card files
8. Run `pnpm run test` — failures may signal additional needed updates
9. Print summary (see Output Format)

## Output Format

```
## Credit Card Data Update Summary

### Updated
- [Issuer] [Card]: [old] → [new] ([source])

### Verified Current
- [Issuer] [Card]: [amount] confirmed via [source]

### Unable to Verify / Left Unchanged
- [Issuer] [Card]: [reason]
```
