import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";

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
  {
    name: "Cardless Qatar Signature",
    issuer: schemas.IssuersEnum.enum.FIRST,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.AVIOS,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://qatarairways.cardless.com/compare",
    imageUrl: "/images/first/cardless-qatar-signature.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        details: "20k after any purchase, 20k after spend requirement.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        details: "20k after any purchase, 20k after spend requirement.",
      },
    ],
  },
  {
    name: "Cardless Qatar Infinite",
    issuer: schemas.IssuersEnum.enum.FIRST,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.AVIOS,
    isBusiness: false,
    annualFee: 499,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://qatarairways.cardless.com/compare",
    imageUrl: "/images/first/cardless-qatar-infinite.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        details: "25k after any purchase, 25k after spend requirement.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        details: "25k after any purchase, 25k after spend requirement.",
      },
    ],
  },
];
