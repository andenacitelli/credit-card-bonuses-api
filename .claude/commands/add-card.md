---
disable-model-invocation: true
---

# Add New Credit Card

Add a new credit card to `src/data/cards/` based on the card name/issuer provided by the user. Research the card from public sources and fully populate all fields.

## Step 1: Parse the request

Identify:

- **Issuer** (e.g., "Citi", "Chase", "American Express")
- **Card name** without the issuer prefix (e.g., "Strata Premier", not "Citi Strata Premier")

Check the existing card files in `src/data/cards/` to confirm the card doesn't already exist.

## Step 2: Research the card

Use these sources (priority order) to gather comprehensive details:

1. **DoC Spreadsheet** — `https://docs.google.com/spreadsheets/d/1UEWoLQ3JqVIwHPRuXYuGw13pI5bzQ1C6f37q6RU1idE/export?format=csv` (current sign-up offers, broadest coverage)
2. **DoC Best Bonuses** — `https://www.doctorofcredit.com/best-current-credit-card-sign-bonuses/`
3. **DoC Cash Bonuses** — `https://www.doctorofcredit.com/best-cash-credit-card-sign-up-bonuses/`
4. **USCreditCardGuide** — `https://www.uscreditcardguide.com/en/`
5. **WebSearch** — `"[card name] [issuer] annual fee benefits credits 2026"` for card-level details
6. **WebSearch** — `"[card name] [issuer] sign up bonus 2026"` for current offer

**Never visit issuer websites directly** (chase.com, americanexpress.com, etc.) — scraping prevention will block them.

## Step 3: Determine card-level fields

From research, populate:

- **`name`**: Card name without issuer prefix
- **`issuer`**: Map to `schemas.IssuersEnum.enum.*` — valid values: `AMERICAN_EXPRESS`, `BANK_OF_AMERICA`, `BARCLAYS`, `BREX`, `CHASE`, `CAPITAL_ONE`, `CITI`, `COMENITY`, `DISCOVER`, `FIRST`, `FNBO`, `PENFED`, `PNC`, `SYNCHRONY`, `US_BANK`, `WEB_BANK`, `WELLS_FARGO`
- **`network`**: `schemas.NetworksEnum.enum.*` — `VISA`, `MASTERCARD`, `AMERICAN_EXPRESS`, `DISCOVER`
- **`currency`**: `schemas.CurrenciesEnum.enum.*` — pick the most appropriate:
  - Flexible points: `CHASE`, `AMERICAN_EXPRESS`, `CITI`, `CAPITAL_ONE`, `BANK_OF_AMERICA`, `BARCLAYS`, `BILT`, `BREX`, `US_BANK`, `WELLS_FARGO`
  - Co-branded airlines: `DELTA`, `UNITED`, `SOUTHWEST`, `JETBLUE`, `ALASKA`, `AMERICAN`, `AEROPLAN`, `AVIOS`, `ANA`, `AVIANCA`, `CATHAY_PACIFIC`, `EMIRATES`, `FRONTIER`, `FLYING_BLUE`, `HAWAIIAN`, `KOREAN`, `LATAM`, `LUFTHANSA`, `SPIRIT`, `VIRGIN`
  - Co-branded hotels: `MARRIOTT`, `HILTON`, `HYATT`, `IHG`, `BEST_WESTERN`, `RADISSON`, `WYNDHAM`, `CHOICE`
  - Cash back: `USD`
  - Other: `CARNIVAL`, `AMTRAK`, `PENFED`, `EXPEDIA`, `DISCOVER`, `BREEZE`
- **`isBusiness`**: `true` for business cards
- **`annualFee`**: Annual fee in USD (number, 0 if none)
- **`isAnnualFeeWaived`**: `true` if first year fee is waived
- **`universalCashbackPercent`**: Base earn rate on all purchases (e.g., `1` = 1x, `1.5` = 1.5%, `2` = 2x)
- **`url`**: Official card page — prefer non-issuer-domain pages (e.g., `creditcards.chase.com`) over issuer root domains
- **`imageUrl`**: `/images/[issuer-kebab]/[card-slug].png` — this is a placeholder; the file doesn't need to exist. Default to `.png`; only use a different extension if the actual image is known to be a different format.
- **`countsTowards524`**: Only include for Chase cards; set `true` if it counts toward the 5/24 rule, `false` if not (business cards generally don't)

## Step 4: Map annual credits

Card-level credits are ongoing annual benefits (not sign-up bonuses). Use `WEIGHTS` from `@/data/weights` and `CREDITS` from `@/data/credits` where applicable.

| Benefit type                                | Reference                                               |
| ------------------------------------------- | ------------------------------------------------------- |
| Broad travel credit (hotel, flight, portal) | `WEIGHTS.TRAVEL_CREDIT_FUNGIBLE` (0.9)                  |
| Loyalty-program-specific travel credit      | `WEIGHTS.TRAVEL_CREDIT_LOYALTY_PROGRAM_SPECIFIC` (0.75) |
| Free night certificate                      | `WEIGHTS.FREE_NIGHT_CREDIT` (0.7)                       |
| TSA PreCheck / Global Entry credit          | `CREDITS.PRECHECK_OR_SIMILAR`                           |
| Dining credit                               | `WEIGHTS.DINING_CREDIT` (0.8)                           |
| Rideshare (Lyft/Uber) credit                | `WEIGHTS.RIDESHARE_CREDIT` (0.5)                        |
| Streaming / entertainment credit            | `WEIGHTS.ENTERTAINMENT_CREDIT` (0.25)                   |
| Airline fee credit                          | `WEIGHTS.AIRLINE_FEE_CREDIT` (0.25)                     |
| Unlimited lounge access                     | `WEIGHTS.LOUNGES` (0.25)                                |
| Limited lounge passes                       | `WEIGHTS.LOUNGES_LIMITED_USE` (0.4)                     |
| Free checked bag                            | `CREDITS.CHECKED_BAG`                                   |
| Multiple free checked bags                  | `CREDITS.CHECKED_BAG_MULTIPLE`                          |

When uncertain about a weight, err lower. Omit credits with negligible face value (< $30/year) unless they're a defining card benefit.

## Step 5: Determine the sign-up offer

**Only record guaranteed public offers.** Reject any offer framed as "as high as", "up to", "you may be eligible for", or other variable/personalized language. This is a hard minimum users can count on.

Each offer requires:

- `amount`: Array of `{ amount: number }` objects (omit `currency` if it matches the card's `currency`)
- `spend`: Minimum spend in USD
- `days`: Days to meet spend requirement
- `credits`: Credits earned as part of the welcome offer (e.g., statement credits); use `[]` if none

Optional:

- `expiration`: `"YYYY-MM-DD"` if the offer has a known end date
- `url`: Direct application link (if available and non-issuer-domain)
- `details`: Short note for multi-step or tiered bonuses

Copy the current offer verbatim into `historicalOffers` as the baseline history. If no guaranteed public offer exists, use `offers: []`.

## Step 6: Generate a cardId

Run this to get a unique ID:

```sh
openssl rand -hex 16
```

## Step 7: Find or create the right file

- If `src/data/cards/[issuer].ts` exists → append to its export array
- If issuer has a subdirectory (e.g., `chase/`) → add to the most relevant sub-file (or create a new sub-file and import it in the aggregator)
- If no file exists for this issuer → create `src/data/cards/[issuer-kebab].ts` and import+spread it in `src/data/data.ts`

Standard file template for a new issuer:

```typescript
import { schemas } from "@/generated/api.client";
import { WEIGHTS } from "@/data/weights";
import { CREDITS } from "@/data/credits";
import { CreditCardInput } from "@/data/types";

export const [ISSUER_SCREAMING_SNAKE]_CARDS: Array<CreditCardInput> = [
  // card objects here
];
```

Only import `WEIGHTS`, `CREDITS`, or `REFERRALS` if actually used.

## Step 8: Write the card object

Follow the exact style of existing cards in the same file. Field order convention:

```typescript
{
  cardId: "...",
  name: "...",
  issuer: schemas.IssuersEnum.enum.ISSUER,
  network: schemas.NetworksEnum.enum.NETWORK,
  currency: schemas.CurrenciesEnum.enum.CURRENCY,
  isBusiness: false,
  annualFee: 0,
  isAnnualFeeWaived: false,
  universalCashbackPercent: 1,
  url: "https://...",
  imageUrl: "/images/issuer/card-name.png",
  credits: [...],
  offers: [...],
  historicalOffers: [...],
}
```

## Step 9: Validate

```sh
mise exec -- pnpm run lint:oxlint
mise exec -- pnpm run lint:typecheck
```

Fix any errors before proceeding.

## Step 10: Commit and push

Commit message: `Add [Issuer] [Card Name] card`

Auto-create an open PR if not on the default branch.

## Output

Print a brief summary:

```
## Added: [Issuer] [Card Name]

- **Offer**: [amount] after $[spend] spend in [days] days
- **Annual fee**: $[fee][, waived first year]
- **Credits**: [list or "none"]
- **File**: src/data/cards/[file]
- **Sources**: [which sources confirmed the offer]
```
