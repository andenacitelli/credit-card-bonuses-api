import { Credit, CreditCardInput } from "@/data/types";
import { REFERRALS } from "@/data/referral-links";

import { schemas } from "@/generated/api.client";
import { WEIGHTS } from "@/data/weights";
import { CREDITS } from "@/data/credits";

const CREDITS_FOR_ALL_SOUTHWEST_CARDS: Array<Credit> = [
  {
    description: "Free Checked Bag",
    value: 100,
    weight: WEIGHTS.CHECKED_BAG,
  },
];

export const SOUTHWEST_CARDS: Array<CreditCardInput> = [
  {
    cardId: "682a4f0c425d15b5ca34214378cfc3de",
    name: "Southwest Performance Business",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.SOUTHWEST,
    isBusiness: true,
    annualFee: 299,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/business-credit-cards/southwest/performance-business",
    imageUrl: "/images/chase/southwest-rapid-rewards-performance-business.png",
    credits: [
      ...CREDITS_FOR_ALL_SOUTHWEST_CARDS,
      CREDITS.PRECHECK_OR_SIMILAR,
      {
        description: "Anniversary Points",
        value: 9000,
        currency: "SOUTHWEST",
        weight: 1.0,
      },
    ],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 5000,
        credits: [],
        days: 90,
      },
    ],
  },
  {
    cardId: "32a0c8c7eda25330e2c176589e386d7f",
    name: "Southwest Plus",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.SOUTHWEST,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/southwest/plus",
    imageUrl: "/images/chase/southwest-rapid-rewards-plus.png",
    credits: [
      ...CREDITS_FOR_ALL_SOUTHWEST_CARDS,
      {
        description: "Anniversary Points",
        value: 3000,
        currency: "SOUTHWEST",
        weight: 1.0,
      },
    ],
    offers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 150,
        credits: [],
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 150,
        credits: [],
        expiration: "2025-09-17",
      },
    ],
  },
  {
    cardId: "76e73a4afe8dfc1f8f1be1e345d7eca8",
    name: "Southwest Premier",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.SOUTHWEST,
    isBusiness: false,
    annualFee: 149,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/southwest/premier",
    imageUrl: "/images/chase/southwest-rapid-rewards-premier.png",
    credits: [
      ...CREDITS_FOR_ALL_SOUTHWEST_CARDS,
      {
        description: "Anniversary Points",
        value: 6000,
        currency: "SOUTHWEST",
        weight: 1.0,
      },
    ],
    offers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 150,
        credits: [],
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 150,
        credits: [],
        expiration: "2025-09-17",
      },
    ],
  },
  {
    cardId: "f86d26bad5af78feff0335845003c47e",
    name: "Southwest Premier Business",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.SOUTHWEST,
    isBusiness: true,
    annualFee: 149,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/business-credit-cards/southwest/premier-business",
    imageUrl: "/images/chase/southwest-rapid-rewards-premier-business.png",
    credits: [
      ...CREDITS_FOR_ALL_SOUTHWEST_CARDS,
      {
        description: "Anniversary Points",
        value: 6000,
        currency: "SOUTHWEST",
        weight: 1.0,
      },
    ],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        credits: [],
        days: 90,
      },
      {
        amount: [{ amount: 120_000 }],
        spend: 18000,
        days: 270,
        credits: [],
      },
    ],
  },
  {
    cardId: "169256a9988f3161381ee6a9ebe6667e",
    name: "Southwest Priority",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.SOUTHWEST,
    isBusiness: false,
    annualFee: 229,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/southwest/priority",
    imageUrl: "/images/chase/southwest-rapid-rewards-priority.png",
    credits: [
      ...CREDITS_FOR_ALL_SOUTHWEST_CARDS,
      {
        description: "Anniversary Points",
        value: 7500,
        currency: "SOUTHWEST",
        weight: 1.0,
      },
    ],
    offers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 150,
        credits: [],
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 150,
        credits: [],
        expiration: "2025-09-17",
      },
    ],
  },
];
