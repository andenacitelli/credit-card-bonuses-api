import type { z } from "zod";

import { schemas } from "../../generated/api.client";

export const BREX_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
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
      {
        amount: [{ amount: 10_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://www.brex.com/product/credit-card/",
      },
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
