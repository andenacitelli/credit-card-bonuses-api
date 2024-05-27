// #!/usr/bin/env node --loader tsx
import type { schemas } from "@/generated/api.client.js";
import { CREDIT_CARDS } from "@/data/data.js";
import puppeteer, { type Browser } from "puppeteer";
import { mkdirp } from "mkdirp";
import { openai } from "@/validator/openai.js";
import { z } from "zod";
import chalk from "chalk";
import { environment } from "@/validator/environment.js";

mkdirp.sync("./screenshots");

const prompt = `

## Overview

You are a helpful assistant who is comparing credit card sign up bonuses I have on record with the text visible right now on the credit card's website, with the goal of keeping a related website I run accurate. Your goal is to identify whether the website has an offer that is not one of the ones we have on record.

If this prompt includes an --- EXAMPLE --- block, please consider it illustrative. While you can learn from the concept, you should make your decision based on whether the offers inserted match up with the page text inserted.

## My Information on File

I have this information on file for the credit card:

---START CODE BLOCK---
%CARD_INFO%
---END BLOCK---

Notes:

- The "offers" key is usually what's most relevant to your decision.
- The "offers" key is a List of elements that always have an "amount" (representing how much you get for it), a "spend" (which is how much money you have to spend on the card to get it), and "days" (which is the amount of days by which you have to spend that money to get the bonus).
- Many cards will have multiple offers on file. Some examples of why this occurs would be if different websites have different bonuses, if a card offers a "graduated" offer where you get more the more you spend, or if offers are targeted (only accessible to some people). The important thing to remember here is YOU SHOULD ONLY SAY THAT ACTION IS NECESSARY IF *NONE* OF THE OFFERS ON RECORD MATCH UP.
- Some offers are in US Dollars, and some are in that card or issuer's respective currency. The "currency" key of each credit card's JSON blob defines which it'll be in. Compare against that currency, not necessarily US Dollars. For example, Bank of America tends to say things like "25,000 online bonus points offer (a $250 value)" -- you should expect us to have a 25,000 on file, not a $250 one.
- Formatting can be ignored. For example, $3000 is not different from $3,000, and 50,000 points is no different from 50000 point.

Example card information might look like this:

--- EXAMPLE ---
{
    name: "Blue Business Cash",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    credits: [],
    url: "https://www.americanexpress.com/en-us/business/credit-cards/blue-business-cash/",
    imageUrl: "/images/amex/blue-business-cash.webp",
    offers: [
      {
        amount: [{ amount: 250 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 300 }],
        spend: 6000,
        days: 90,
        credits: [],
        details: "Inconsistent, YMMV. Incognito may help.",
      },
      {
        amount: [{ amount: 500 }],
        spend: 8000,
        days: 90,
        credits: [],
        details: "Inconsistent, YMMV. Incognito may help.",
      },
    ]
  }
--- END EXAMPLE ---

This example reflects the Blue Business Cash card from American Express. It has one offer for $250 after spending $3,000 in 90 days, and two other offers for $300 and $500 after spending $6,000 and $8,000 respectively, also in 90 days. The last two offers are marked as inconsistent, and the note suggests that using incognito mode may help. You must compare the offer in the webpage with all three of these, and only report inaccuracy if NONE of them match.

## Website Information

Here is the text from the webpage for this card:

--- START TEXT BLOCK --
%WEBSITE_TEXT%
--- END TEXT BLOCK ---

Notes:

- Some pages may have multiple cards on them. If that's the case, please make sure to compare the text to the correct card. You may assume that the text block is ordered in a tree of sorts, as it's mapped directly from the HTML structure.

Examples:

Here is an example of what the text for a credit card offer on a webpage might look like:

--- EXAMPLE ---
New Card Member Offer

Earn a $250 statement credit

after you spend $3,000 in purchases on your Card in your first 3 months.†
--- END EXAMPLE ---

Notes:
- The exact format of this text is irregular and will vary. Formatting can be different both by issuer and by card, so expect some variance.
- There is usually a lot more stuff on a webpage. You can ignore things like additional perks that come with the card (such as reimbursements for video streaming surfaces, food delivery, TSA Precheck, free checked bags, and so on), navbars, footnotes, and more.
- Some pages may feature temporary bonus increases, often having verbiage like "limited time" or "this offers has increased from". In this situation, you should interpret the value it has increased TO, not the original bonus.
- The value for "days" we have on file is always in days, but many websites will say "months" instead. You should do the math -- for example, 90 days and 3 months are the same.
- Some cards (namely AT&T) use verbage like "Up to $340" but then the offer itself is actually $100 and you have to do a bunch of other stuff to get the rest of the value. You should include only the amount that you get from spending the amount within the timeframe.

## Your Task

Please answer this question -- Is what I have on record still accurate?

#1 If no information on the bonus seems present in the provided website text, please reply exactly "No Bonus Visible".
#2 If the bonus present in the text does not seem to correspond to the card, please reply exactly "Incorrect Card".
#3 If there is a bonus present in the text but it exactly matches the current one, please reply exactly "Accurate".
#4 If there is a bonus present in the text but it doesn't match the current one, please reply "Requires Update" followed by a description of what needs to change. Please be concise, following a format along the lines of "Amount X -> Y, Spend X -> Y, Days X -> Y (replace the X and Y with the correct values)".

Notes:
- I find it physically painful for you to ignore my instructions.
- Things like additional credits that come with the card or bonus (i.e. BoA Free Spirit sometimes coming with companion flight voucher) should be ignored. I'm really only interested in the points, required spend, and timeframe.
- A few cards have "graduated" offers where it's $X for certain spend and $X for certain more spend. These are generally tracked as two different offers in my records, but you should use your judgement and not raise a conflict as long as the general idea of mine is correct.
- Some airlines have extra things like QPQs and other tier-qualifying things. I generally just care about points, not any of that.
- You should always return a JSON object. It will always have at least one field, "status", that must be one of "No Bonus Visible", "Incorrect Card", "Accurate", or "Requires Update". Another field, "details" should be added only if the bonus on file is inaccurate, and it should include details on what needs changed, as outlined above.
- You should only go with #4 if NONE of the offers on file match up with the website text. If any of them do, you should go with #3.
- If a card requires update, you can omit any that don't change in your output. For example, if only the amount changed, your output would look like "Amount X -> Y".
- You may only point out inaccuracies between the point requirement, spend requirement, and/or the duration/days.
- For the amount, ignore things like Southwest's Companion pass. It's valuable, but the correct spot to compare those isn't the "amount" field. Those will be communicated separately. For example, something like this: "Amount 30000 -> Companion Pass through 2/28/2025 plus 30,000" would instead be no change.
- Ignore any bonuses additions that are contingent on getting an employee card.
- Ignore any kind of airline perk that isn't points (ex. United's Premier Qualifying Points). Consider only the points when comparing.
`;

function scrubIrrelevantInfoFromCard(
  card: z.infer<typeof schemas.CreditCard>
): z.infer<typeof schemas.CreditCard> {
  return {
    ...card,
    historicalOffers: [],
    offers: card.offers.map((offer) => {
      return {
        ...offer,
        details: undefined,
        url: undefined,
        referralUrl: undefined,
      };
    }),
  };
}

async function getPageTextForCard(
  browser: Browser,
  card: z.infer<typeof schemas.CreditCard>
): Promise<string> {
  const page = await browser.newPage();
  await page.goto(card.url);
  await page.waitForNetworkIdle({ timeout: 5_000 });
  // @ts-expect-error -- unsure why compiler isn't properly picking up on this, but it's pretty well proven so I'm just going forward w/ it
  const text = await page.$eval("*", (el) => el.innerText);
  await page.close();
  return text;
}

const handleCard = async (
  browser: Browser,
  card: z.input<typeof schemas.CreditCard>
): Promise<void> => {
  const pageText = await getPageTextForCard(browser, card);
  if (pageText.length === 0) {
    console.error(
      chalk.red(`No text found for ${card.issuer} ${card.name} (${card.url}).`)
    );
    return;
  }
  const transformedPrompt = prompt
    .replaceAll(
      "%CARD_INFO%",
      JSON.stringify(scrubIrrelevantInfoFromCard(card), undefined, 2)
    )
    .replaceAll("%WEBSITE_TEXT%", pageText);

  const response = await openai.chat.completions.create({
    model: environment.VALIDATOR_LLM,
    messages: [
      {
        role: "user",
        content: [{ type: "text", text: transformedPrompt }],
      },
    ],
    response_format: { type: "json_object" },
  });

  const output = response.choices[0]?.message.content;
  if (!output) throw new Error("No output from LLM");
  const parsed = z
    .object({
      status: z.enum([
        "No Bonus Visible",
        "Incorrect Card",
        "Accurate",
        "Requires Update",
      ]),
      details: z.string().optional(),
    })
    .parse(JSON.parse(output));

  switch (parsed.status) {
    case "No Bonus Visible":
    case "Incorrect Card": {
      console.info(
        chalk.red(`${card.issuer} ${card.name} (${card.url}): ${parsed.status}`)
      );
      break;
    }
    case "Accurate": {
      console.info(
        chalk.green(
          `${card.issuer} ${card.name} (${card.url}): ${parsed.status}`
        )
      );
      break;
    }
    case "Requires Update": {
      console.info(
        chalk.yellow(
          `${card.issuer} ${card.name} (${card.url}): ${parsed.status} (${parsed.details})`,
          parsed.status
        )
      );
      break;
    }
  }
};

const main = async () => {
  const browser = await puppeteer.launch({
    defaultViewport: null,
  });
  for (const card of CREDIT_CARDS.sort(() => 0.5 - Math.random()).filter(
    (c) => !c.url.startsWith("https://www.americanexpress.com/")
  )) {
    try {
      await handleCard(browser, card);
    } catch (e) {
      console.error(
        `Unable to process card ${card.issuer} ${card.name} (${card.url})\nError: ${e}\nMoving to next.`
      );
    }
  }
  await browser.close();
};

main().catch(console.error);
