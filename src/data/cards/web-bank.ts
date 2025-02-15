import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";

export const WEB_BANK_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "Gemini",
    issuer: schemas.IssuersEnum.enum.WEB_BANK,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.gemini.com/credit-card",
    imageUrl: "/images/web-bank/gemini.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
];
