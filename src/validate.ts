import chalk from "chalk";
import fs from "fs";
import { mkdirp } from "mkdirp";
import pRetry from "p-retry";
import puppeteer, {Browser} from "puppeteer";
import { z } from "zod";

import { schemas } from "@/generated/api.client";
import {openai} from "@/remote/openai";

import {CREDIT_CARDS} from "./data/data";
const MILLISECONDS_PER_SECOND = 1_000;

mkdirp.sync("./screenshots");

const prompt = `
I have this information on file for the credit card. Note that the 'offers' key is what I'm most interested in, but you may find the rest of the information valuable.

---START CODE BLOCK---
%CARD_INFO%
---END BLOCK---

Here's other relevant information we 

Please note that some cards have multiple offers at different spend levels. I list all of those; please factor that in and try to compare the one you find in the page to the similar-spend ones I have listed.

Is this still accurate? Please reply one of the following cases, depending on circumstance:

(1) If there is no bonus present in the image, please reply "No Bonus Visible".
(2) If the bonus present in the image does not seem to correspond to the card, please reply "Incorrect Card".
(3) If there is a bonus present in the image but it matches the current one, please reply "Accurate".
(3) If there is a bonus present in the iamge but it doesn't match the current one, please reply "Requires Update" followed by the string <Old Value> -> <New Value> (e.g. "Requires Update 50,000 -> 60,000").
`

const handleCard = async (browser: Browser, card: z.input<schemas.CreditCard>): Promise<void> => {
    const page = await browser.newPage()
    await page.goto(card.url);
    await page.waitForTimeout(5 * MILLISECONDS_PER_SECOND);

    await page.screenshot({ path: `./screenshots/${card.issuer}-${card.name}.png`, fullPage: true });
    const imageBase64 = fs.readFileSync(`./screenshots/${card.issuer}-${card.name}.png`, "base64");

    const promptForThisCard = prompt
        .replaceAll("%CARD_INFO%",
            JSON.stringify(card, undefined, 2))

    const response = await pRetry(async () => {
        return openai.chat.completions.create({
            model: "gpt-4-vision-preview",
            messages: [
                {
                    role: "user",
                    content: [
                        { type: "text", text: promptForThisCard },
                        {
                            type: "image_url",
                            image_url: {
                                "url": `data:image/png;base64,${imageBase64}`,
                            },
                        },
                    ],
                },
            ],
        });
    }, { retries: 5 })

    const output = response.choices[0]?.message.content;
    if (!output) throw new Error("No output from GPT-4 Vision")
    if (output.includes("No Bonus Visible") || output.includes("Incorrect Card")) {
        console.info(chalk.red(`${card.issuer} ${card.name} (${card.url}):`, output))
    }

    else if (output.includes("Accurate")) {
        console.info(chalk.green(`${card.issuer} ${card.name} (${card.url}):`, output))
    }

    else if (output.includes("Requires Update")) {
        console.info(chalk.yellow(`${card.issuer} ${card.name} (${card.url}):`, output))
    }

    else {
        throw new Error(`Uninterpretable output from GPT-4 Vision: ${output}`)
    }

    await page.close();
}

const main = async () => {
    const browser = await puppeteer.launch({ defaultViewport: null, headless: "new" })
    for (const card of CREDIT_CARDS) {
        await handleCard(browser, card);
    }
    await browser.close();
}


main().catch(console.error)