import { CREDITS } from "@/data/credits";
import { REFERRALS } from "@/data/referral-links";
import { CreditCardInput } from "@/data/types";
import { WEIGHTS } from "@/data/weights";
import { schemas } from "@/generated/api.client";

export const SAPPHIRE_CARDS: Array<CreditCardInput> = [
  {
    cardId: "57f8a819c3bb4c6aa494016703281f35",
    name: "Sapphire Preferred",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CHASE,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred",
    imageUrl: "/images/chase/sapphire-preferred.png",
    credits: [
      {
        value: 50,
        description: "Hotel Credit",
        weight: WEIGHTS.TRAVEL_CREDIT_FUNGIBLE,
      },
    ],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.SAPPHIRE,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2025-05-15",
      },
    ],
  },
  {
    cardId: "77e3ef2fc9c35498ba1a3f46a63235cb",
    name: "Sapphire Reserve",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CHASE,
    isBusiness: false,
    annualFee: 795,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve",
    imageUrl: "/images/chase/sapphire-reserve.png",
    credits: [
      CREDITS.PRECHECK_OR_SIMILAR,
      {
        value: 300,
        description: "Travel Credit",
        weight: 1.0,
      },
      {
        value: 500,
        description: "Travel Credit (The Edit)",
        weight: 0.8,
      },
      {
        value: 469,
        description: "Lounge Access",
        weight: 0.2,
      },
      {
        value: 300,
        description: "Dining Credit",
        weight: 0.75,
      },
      {
        value: 250,
        description: "Apple TV / Apple Music",
        weight: 0.4,
      },
      {
        value: 120,
        description: "Dashpass",
        weight: 0.4,
      },
    ],
    offers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 5000,
        days: 90,
        credits: [
          {
            value: 500,
            description: "Chase Travel Credit",
            weight: 0.8,
          },
        ],
        referralUrl: REFERRALS.CHASE.SAPPHIRE,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 5000,
        days: 90,
        credits: [
          {
            value: 500,
            description: "Chase Travel Credit",
            weight: 0.8,
          },
        ],
        referralUrl: REFERRALS.CHASE.SAPPHIRE,
      },
    ],
  },
  {
    cardId: "5d8c589d1e7c1294d04fa6e4a2685624",
    name: "Sapphire Reserve Business",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CHASE,
    isBusiness: true,
    annualFee: 795,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/business-credit-cards/sapphire/reserve",
    imageUrl: "/images/chase/sapphire-reserve-business.jpg",
    credits: [
      CREDITS.PRECHECK_OR_SIMILAR,
      {
        value: 300,
        description: "Travel Credit",
        weight: 1.0,
      },
      {
        value: 500,
        description: "Travel Credit (The Edit)",
        weight: 0.8,
      },
      {
        value: 469,
        description: "Lounge Access",
        weight: 0.2,
      },
      {
        value: 250,
        description: "Apple TV / Apple Music",
        weight: 0.4,
      },
      {
        value: 120,
        description: "Dashpass",
        weight: 0.3,
      },
      {
        value: 300,
        description: "$25/mo DoorDash Promos",
        weight: 0.3,
      },
      {
        value: 200,
        description: "Google Workspace Credit",
        weight: 0.5,
      },
      {
        value: 400,
        description: "ZipRecruiter Credit",
        weight: 0.25,
      },
      {
        value: 120,
        description: "$10/mo Lyft Credit",
        weight: 0.25,
      },
      {
        value: 100,
        description: "Gift Card Credit",
        weight: 0.5,
      },
    ],
    offers: [
      {
        amount: [{ amount: 200_000 }],
        spend: 30_000,
        days: 180,
        credits: [],
        referralUrl: REFERRALS.CHASE.INKS,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200_000 }],
        spend: 30_000,
        days: 180,
        credits: [],
        referralUrl: REFERRALS.CHASE.INKS,
      },
    ],
  },
];
