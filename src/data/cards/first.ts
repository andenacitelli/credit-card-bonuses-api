import { z } from "zod";

import { schemas } from "../../generated/api.client";

export const FIRST_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "LATAM Airlines",
    issuer: schemas.IssuersEnum.enum.FIRST,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.LATAM,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://latampass.latam.com/en_us/earn-miles/latam-airlines-credit-cards",
    imageUrl: "/images/first/latam-airlines.svg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 15_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://latampass.latam.com/en_us/earn-miles/latam-airlines-credit-cards",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 15_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "LATAM Airlines World Elite",
    issuer: schemas.IssuersEnum.enum.FIRST,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.LATAM,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://latampass.latam.com/en_us/earn-miles/latam-airlines-credit-cards",
    imageUrl: "/images/first/latam-airlines-world-elite.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 2500,
        days: 90,
        credits: [],
        url: "https://latampass.latam.com/en_us/earn-miles/latam-airlines-credit-cards",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 2500,
        days: 90,
        credits: [],
      },
    ],
  },
];
