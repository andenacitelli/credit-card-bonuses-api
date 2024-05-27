import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";

export const FNBO_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "Amtrak Guest Rewards Preferred",
    issuer: schemas.IssuersEnum.enum.FNBO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMTRAK,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.amtrak.com/Apply",
    imageUrl: "/images/fnbo/amtrak-guest-rewards-preferred.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Amtrak Guest Rewards",
    issuer: schemas.IssuersEnum.enum.FNBO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMTRAK,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.amtrak.com/Apply",
    imageUrl: "/images/fnbo/amtrak-guest-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 12_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Best Western Rewards",
    issuer: schemas.IssuersEnum.enum.FNBO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.BEST_WESTERN,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.card.fnbo.com/landing/bestwestern/bestwesternlto",
    imageUrl: "/images/fnbo/best-western-rewards.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 20_000 }],
        spend: 5000,
        days: 365,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Best Western Rewards Premium",
    issuer: schemas.IssuersEnum.enum.FNBO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.BEST_WESTERN,
    isBusiness: false,
    annualFee: 89,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.card.fnbo.com/landing/bestwestern/bestwesternlto",
    imageUrl: "/images/fnbo/best-western-rewards-premium.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 40_000 }],
        spend: 5000,
        days: 365,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
];
