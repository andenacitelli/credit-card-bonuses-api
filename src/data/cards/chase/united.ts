import { CREDITS } from "@/data/credits";
import { REFERRALS } from "@/data/referral-links";
import { CreditCardInput } from "@/data/types";
import { WEIGHTS } from "@/data/weights";
import { schemas } from "@/generated/api.client";

export const UNITED_CARDS: Array<CreditCardInput> = [
  {
    cardId: "8101f7827e3a1e797b09653f117b72d9",
    name: "United Business",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: true,
    annualFee: 150,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.theexplorercard.com/business-rewards-cards/business-card",
    imageUrl: "/images/chase/united-business.png",
    credits: [
      {
        value: 100,
        description: "Free Checked Bag",
        weight: 0.8,
      },
      {
        value: 100,
        description: "2x Lounge Pass",
        weight: WEIGHTS.LOUNGES_LIMITED_USE,
      },
      {
        value: 125,
        description: "United Credit",
        weight: 0.8,
      },
      {
        value: 100,
        description: "United Hotels",
        weight: 0.8,
      },
      {
        value: 100,
        description: "Rideshare",
        weight: 0.5,
      },
      {
        value: 120,
        description: "Instacard",
        weight: 0.5,
      },
      {
        value: 50,
        description: "Avis/Budget",
        weight: 0.5,
      },
    ],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 125_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2025-05-08",
      },
    ],
  },
  {
    cardId: "d2517ce6b72999e14f50c399347100ed",
    name: "United Club Infinite",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: false,
    annualFee: 695,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.theexplorercard.com/rewards-cards/club-card",
    imageUrl: "/images/chase/united-club-infinite.png",
    credits: [
      CREDITS.PRECHECK_OR_SIMILAR,
      {
        value: 150,
        description: "2x Checked Bags",
        weight: 0.75,
      },
      {
        value: 750,
        description: "United Lounge",
        weight: WEIGHTS.LOUNGES,
      },
      {
        value: 200,
        description: "United Hotels",
        weight: 0.75,
      },
      {
        value: 150,
        description: "Rideshare",
        weight: 0.5,
      },
      {
        value: 240,
        description: "Instacart",
        weight: 0.5,
      },
      {
        value: 100,
        description: "Avis/Budget",
        weight: 0.5,
      },
    ],
    offers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 95_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2025-05-08",
      },
    ],
  },
  {
    cardId: "80c6aca49a0e1442d51635c316f4a5ff",
    name: "United Club Business",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: true,
    annualFee: 695,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.theexplorercard.com/business-rewards-cards/club-card",
    imageUrl: "/images/chase/united-club-business.png",
    credits: [
      {
        value: 150,
        description: "2x Checked Bags",
        weight: 0.8,
      },
      {
        value: 125,
        description: "United Credit",
        weight: 0.8,
      },
      {
        value: 200,
        description: "United Hotels",
        weight: 0.8,
      },
      {
        value: 150,
        description: "Rideshare",
        weight: 0.5,
      },
      {
        value: 240,
        description: "Instacart",
        weight: 0.5,
      },
      {
        value: 100,
        description: "Avis/Budget",
        weight: 0.5,
      },
      {
        value: 750,
        description: "United Lounge",
        weight: WEIGHTS.LOUNGES,
      },
    ],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 125_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2025-05-08",
      },
    ],
  },
  {
    cardId: "85cd2b7d172e494eefad5b2ab012f21c",
    name: "United Explorer",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: false,
    annualFee: 150,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://www.theexplorercard.com/rewards-cards/explorer-card",
    imageUrl: "/images/chase/united-explorer.png",
    credits: [
      CREDITS.PRECHECK_OR_SIMILAR,
      {
        value: 100,
        description: "Free Checked Bag",
        weight: 0.8,
      },
      {
        value: 100,
        description: "2x Lounge Pass",
        weight: WEIGHTS.LOUNGES_LIMITED_USE,
      },
      {
        value: 60,
        description: "Rideshare Credits",
        weight: 0.5,
      },
      {
        value: 10_000,
        currency: schemas.CurrenciesEnum.enum.UNITED,
        description: "10k award flight discount",
        weight: 0.75,
      },
      {
        value: 100,
        currency: schemas.CurrenciesEnum.enum.USD,
        description: "United Travel",
        weight: 0.8,
      },
      {
        value: 100,
        currency: schemas.CurrenciesEnum.enum.USD,
        description: "United Hotels",
        weight: 0.5,
      },
      {
        value: 50,
        currency: schemas.CurrenciesEnum.enum.USD,
        description: "Avis/Budget",
        weight: 0.5,
      },
      {
        value: 120,
        currency: schemas.CurrenciesEnum.enum.USD,
        description: "Instacart+",
        weight: 0.4,
      },
    ],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "4071699fe4b21cafb02cf8b2c9c57c86",
    name: "United Gateway",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.theexplorercard.com/rewards-cards/gateway-card",
    imageUrl: "/images/chase/united-gateway.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        expiration: "2024-07-01",
      },
    ],
  },
  {
    cardId: "34ab99720941eaa2a1671e5b3a996b19",
    name: "United Quest",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: false,
    annualFee: 350,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.theexplorercard.com/rewards-cards/quest-card",
    imageUrl: "/images/chase/united-quest.png",
    credits: [
      {
        value: 200,
        description: "United Credit",
        weight: 0.8,
      },
      {
        value: 150,
        description: "United Hotels",
        weight: 0.5,
      },
      {
        value: 100,
        description: "Rideshare",
        weight: 0.5,
      },
      {
        value: 180,
        description: "Instacart+",
        weight: 0.5,
      },
      {
        value: 80,
        description: "Avis/Budget",
        weight: 0.5,
      },
      {
        value: 10_000,
        currency: "UNITED",
        description: "10k award flight discount",
        weight: 0.8,
      },
      {
        value: 150,
        description: "2x Checked Bags",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 4000,
        credits: [],
        days: 90,
        expiration: "2025-05-08",
      },
    ],
  },
];
