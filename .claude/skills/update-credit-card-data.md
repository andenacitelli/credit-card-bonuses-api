---
name: update-credit-card-data
description: Audit and update all credit card sign-up bonus data in src/data/cards/ using blog sources, spreadsheets, and web search fallbacks.
disable-model-invocation: true
---

# Update Credit Card Data

You are auditing and updating the credit card sign-up bonus offers stored in `src/data/cards/`. Your job is to check each card's current `offers` array against real-world data and update any that are stale or incorrect.

## Data Structure

Each card in the TypeScript files has this structure (relevant fields):

- `name` / `issuer`: identifies the card
- `offers`: array of current public offers. Each offer has `amount` (array of `{amount, currency?}`), `spend`, `days`, `credits`, and optional `details`, `url`, `referralUrl`, `expiration`
- `historicalOffers`: past offers for reference

When updating a card's offer:

1. If the current offer in the file matches what you find, leave it alone
2. If the offer has changed, move the old offer(s) to `historicalOffers` (add an `expiration` field with today's date or the known expiration) and replace `offers` with the new one(s)
3. Preserve any `referralUrl` or `url` fields on offers if they still apply
4. Preserve any `credits` within offers unless you have specific info that they changed
5. Do NOT modify any card-level fields (annualFee, credits, etc.) unless you have very high confidence they changed
6. If you cannot verify a card's current offer from any source, leave it unchanged and note it in your summary

## Sources (in priority order)

### Primary Sources - Check these first for ALL cards

1. **Doctor of Credit Spreadsheet**: Fetch `https://docs.google.com/spreadsheets/d/1UEWoLQ3JqVIwHPRuXYuGw13pI5bzQ1C6f37q6RU1idE/export?format=csv` — this is a comprehensive spreadsheet of current sign-up bonuses. Parse the CSV to extract current offers.

2. **Doctor of Credit Best Bonuses Page**: Fetch `https://www.doctorofcredit.com/best-current-credit-card-sign-bonuses/` — an evergreen index page with current bonus amounts.

3. **Doctor of Credit Cash Bonuses Page**: Fetch `https://www.doctorofcredit.com/best-cash-credit-card-sign-up-bonuses/` — specifically for cash-back card bonuses.

4. **USCreditCardGuide**: Fetch `https://www.uscreditcardguide.com/en/` — blog with posts for new/updated offers.

5. **Doctor of Credit Credit Cards Category**: Fetch `https://www.doctorofcredit.com/category/credit-cards/` — blog posts about individual card offer changes.

### Fallback Sources - Use only for cards not found or not recently updated in primary sources

6. **WebSearch tool**: Search for `"[card name] [issuer] sign up bonus 2026"` or similar queries.

7. **Exa MCP** (`mcp__exa__web_search_exa`): Use as a last resort due to rate limits. Good for finding recent blog posts about specific card offers.

## Important Guidelines

- **Do NOT visit issuer websites directly** (chase.com, americanexpress.com, etc.). They have scraping prevention that will block the user's IP.
- **Ignore non-public offers**: Skip targeted offers, incognito-only offers, or offers that aren't consistently available to the general public.
- **Multiple offers are OK**: Some cards legitimately have multiple concurrent public offers (e.g., a direct offer and a higher referral offer). Keep both if they're distinct.
- **Currency matters**: Pay attention to whether amounts are in points/miles or USD. The `currency` field on the amount object controls this — if omitted, it defaults to the card's `currency` field.
- **Be conservative**: If you're unsure whether an offer changed, leave it. False positives (incorrect updates) are worse than missing an update.

## Process

1. Start by fetching the Doctor of Credit spreadsheet (CSV export) and parsing it. This gives you the broadest coverage in one request.
2. Fetch the Doctor of Credit best bonuses pages to cross-reference and fill gaps.
3. Fetch USCreditCardGuide for any recent changes.
4. Read through ALL card files in `src/data/cards/` and compare each card's offers against what you found.
5. For any cards where you couldn't find data from the above sources, use WebSearch as a fallback.
6. Use Exa only as a last resort for remaining gaps.
7. Make all necessary edits to the card files.
8. After all updates, print a summary table showing:
   - Cards updated (old offer -> new offer)
   - Cards verified as current (no change needed)
   - Cards where you couldn't verify the offer (left unchanged)

## Output Format

After completing all updates, provide a summary like:

```
## Credit Card Data Update Summary

### Updated
- [Issuer] [Card Name]: [old amount] -> [new amount] ([source])

### Verified Current
- [Issuer] [Card Name]: [amount] confirmed via [source]

### Unable to Verify
- [Issuer] [Card Name]: left unchanged, could not find recent data
```
