import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";

export const SYNCHRONY_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "Cathay Pacific",
    issuer: schemas.IssuersEnum.enum.SYNCHRONY,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CATHAY_PACIFIC,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://pay.cathaypacific.com/en_US/offers/uscreditcard.html",
    imageUrl: "/images/synchrony/cathay-pacific.jpg",
    credits: [],
    offers: [
      // No current offers
    ],
    historicalOffers: [
      {
        amount: [{ amount: 35_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
];
