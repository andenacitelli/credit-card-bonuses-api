import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";

export const BREX_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    id: "5e419b61b68eb0551e5afce2f45d3910",
    name: "Brex",
    issuer: schemas.IssuersEnum.enum.BREX,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.BREX,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.brex.com/product/credit-card/",
    imageUrl: "/images/brex/brex.png",
    credits: [],
    offers: [
      // Can't find any bonuses
    ],
    historicalOffers: [
      {
        amount: [{ amount: 10_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 110_000 }],
        spend: 11_000,
        days: 90,
        credits: [],
      },
    ],
  },
];
