import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";

export const SYNCHRONY_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    id: "",
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
      // No current offers; they mention they'll probably re-launch in 2025
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
  {
    id: "",
    name: "Virgin Red Rewards",
    issuer: schemas.IssuersEnum.enum.SYNCHRONY,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.VIRGIN,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.virgin.com/en-us/virgin-red/rewards-credit-card",
    imageUrl: "/images/synchrony/virgin-red-rewards.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        expiration: "2025-03-31",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        expiration: "2025-03-31",
      },
    ],
  },
];
