import { REFERRALS } from "@/data/referral-links.js";

import { schemas } from "@/generated/api.client.js";
import { WEIGHTS } from "@/data/weights.js";
import { CreditCardInput } from "../types.js";
export const CHASE_CARDS: Array<CreditCardInput> = [
  {
    cardId: "fb5e3887059d5d8600b2a5eaed7ddaf7",
    name: "Marriott Bonvoy Bountiful",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.MARRIOTT,
    isBusiness: false,
    annualFee: 250,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/bountiful",
    imageUrl: "/images/chase/marriott-bonvoy-bountiful.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 85_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.MARRIOTT,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 85_000 }],
        credits: [],
        spend: 5000,
        days: 90,
        expiration: "2023-12-01",
      },
    ],
  },
  {
    cardId: "dcafcac45d86331a7f6b9cfdb980b81e",
    name: "Aer Lingus Signature",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.AVIOS,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/avios/aer-lingus",
    imageUrl: "/images/chase/aer-lingus-signature.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 7500,
        days: 180,
        credits: [],
        expiration: "2024-12-31",
      },
    ],
  },
  {
    cardId: "7662e34a89a906b869b93bb12a2e1b3b",
    name: "Aeroplan",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AEROPLAN,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/aircanada/aeroplan",
    imageUrl: "/images/chase/aeroplan.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 80_000 }],
        credits: [],
        spend: 3000,
        days: 90,
        expiration: "2022-05-01",
      },
      {
        amount: [{ amount: 100_000 }],
        spend: 20_000,
        days: 365,
        credits: [],
      },
    ],
  },
  {
    cardId: "7b06f0b6a307509b71862ffa5933ef0b",
    name: "British Airways Signature",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.AVIOS,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/avios/british-airways",
    imageUrl: "/images/chase/british-airways.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 85_000 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 7500,
        days: 180,
        credits: [],
        expiration: "2024-12-31",
      },
    ],
  },
  {
    cardId: "cd81837eb0aedd4752197e044e77381a",
    name: "Disney Premier",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 49,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/rewards-credit-cards/disney/premier",
    imageUrl: "/images/chase/disney.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 400 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 300 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 400 }],
        credits: [],
        spend: 1000,
        days: 90,
      },
    ],
  },
  {
    cardId: "12a1578aeb5bfcdd3bc794154ad1f6cc",
    name: "Disney",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/rewards-credit-cards/disney/rewards",
    imageUrl: "/images/chase/disney.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "6ba7f561f6a4f7f2934bec25bd9a3130",
    name: "Freedom Flex",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.CHASE,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/cash-back-credit-cards/freedom/flex",
    imageUrl: "/images/chase/freedom-flex.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 500,
        days: 90,
        credits: [],
        url: REFERRALS.CHASE.FREEDOM,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 20_000 }],
        credits: [],
        spend: 500,
        days: 90,
      },
    ],
  },
  {
    cardId: "3a9ea798ce73485fc8456280fd4b1816",
    name: "Freedom Unlimited",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CHASE,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited",
    imageUrl: "/images/chase/freedom-unlimited.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 25_000 }],
        spend: 500,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.FREEDOM,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 25_000 }],
        credits: [],
        spend: 500,
        days: 90,
      },
    ],
  },
  {
    cardId: "60c2e7b4bc2e526bf38dac5be5f4433c",
    name: "Iberia Signature",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.AVIOS,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/avios/iberia",
    imageUrl: "/images/chase/iberia-signature.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 7500,
        days: 180,
        credits: [],
        expiration: "2024-12-31",
      },
    ],
  },
  {
    cardId: "40192e08e31f059d91a108ff09ec5dd5",
    name: "IHG Rewards Premier",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.IHG,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/ihg-rewards-club/premier",
    imageUrl: "/images/chase/ihg-rewards-premier.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 0 }],
        spend: 4000,
        days: 90,
        credits: [
          {
            value: 200_000,
            weight: WEIGHTS.FREE_NIGHT_CREDIT,
            currency: schemas.CurrenciesEnum.enum.IHG,
            description: "5x FNC, <= 40k per",
          },
        ],
        url: "https://creditcards.chase.com/a1/ihg/PremierOnPropertyAEP",
      },
      {
        amount: [{ amount: 140_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 175_000 }],
        spend: 4000,
        days: 90,
        credits: [
          {
            value: 400,
            description: "FNC worth up to 40k points.",
            currency: schemas.CurrenciesEnum.enum.IHG,
            weight: WEIGHTS.FREE_NIGHT_CREDIT,
          },
        ],
        url: "https://www.ihg.com/onerewards/content/us/en/creditcard",
      },
      {
        amount: [{ amount: 175_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "bc82fb7022c639f90b9378410127b9e6",
    name: "IHG Rewards Premier Business",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.IHG,
    isBusiness: true,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/business-credit-cards/IHG/business-premier",
    imageUrl: "/images/chase/ihg-rewards-premier-business.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 140_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 175_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "2c6c7e215b4a1e791250d1fb48997e02",
    name: "IHG Rewards Traveler",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.IHG,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/ihg-rewards-club/traveler",
    imageUrl: "/images/chase/ihg-rewards-traveler.jpeg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 120_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "8ec7f405d03afa62eaeea7e197a29e8a",
    name: "Ink Business Cash",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CHASE,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/business-credit-cards/ink/cash",
    imageUrl: "/images/chase/ink-business-cash.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 6000,
        days: 180,
        credits: [],
        referralUrl: REFERRALS.CHASE.INKS,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 6000,
        credits: [],
        days: 90,
        expiration: "2023-03-19",
      },
    ],
  },
  {
    cardId: "c80cdb77c3eda940e2a36abb4f943c69",
    name: "Ink Business Preferred",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CHASE,
    isBusiness: true,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/business-credit-cards/ink/business-preferred",
    imageUrl: "/images/chase/ink-business-preferred.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 8_000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.INKS,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 120_000 }],
        spend: 8_000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "4a1c1e46f145b76fcc72ebd391fc5766",
    name: "Ink Business Unlimited",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CHASE,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/business-credit-cards/ink/unlimited",
    imageUrl: "/images/chase/ink-business-unlimited.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 6000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.INKS,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 6000,
        days: 90,
        credits: [],
        url: "https://creditcards.chase.com/business-credit-cards/ink/unlimited",
        expiration: "2024-11-01",
      },
    ],
  },
  {
    cardId: "94c9b624738adce05fbe0e5bfc5d620e",
    name: "Ink Business Premier",
    details: "Points are nontransferable. Only cashback redemption.",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 195,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://creditcards.chase.com/business-credit-cards/ink/premier",
    imageUrl: "/images/chase/ink-business-premier.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 1000, currency: schemas.CurrenciesEnum.enum.USD }],
        spend: 10_000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.INKS,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 1000, currency: schemas.CurrenciesEnum.enum.USD }],
        spend: 10_000,
        credits: [],
        days: 90,
      },
    ],
  },
  {
    cardId: "918c978a06c7c36f9a321b2efa0ff974",
    name: "Marriott Bonvoy Bold",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.MARRIOTT,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/bold",
    imageUrl: "/images/chase/marriott-bonvoy-bold.jpeg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.MARRIOTT,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "6a4a30b866d4d37216b9d586a15ad1cc",
    name: "Marriott Bonvoy Boundless",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.MARRIOTT,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/boundless",
    imageUrl: "/images/chase/marriott-bonvoy-boundless.jpeg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 0 }],
        spend: 3000,
        days: 90,
        credits: [
          {
            description: "3x FNC up to 50k each",
            value: 50_000,
            currency: "MARRIOTT",
            weight: WEIGHTS.FREE_NIGHT_CREDIT,
          },
        ],
        referralUrl: REFERRALS.CHASE.MARRIOTT,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 0 }],
        spend: 3000,
        days: 90,
        credits: [
          {
            description: "3x FNC up to 50k each",
            value: 50_000,
            weight: WEIGHTS.FREE_NIGHT_CREDIT,
          },
        ],
        referralUrl: REFERRALS.CHASE.MARRIOTT,
      },
      {
        amount: [{ amount: 125_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        expiration: "2023-07-01",
      },
    ],
  },
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
        amount: [{ amount: 100_000 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 60_000 }],
        spend: 4000,
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
        expiration: "2025-06-01",
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
    annualFee: 550,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve",
    imageUrl: "/images/chase/sapphire-reserve.png",
    credits: [
      {
        value: 600,
        description: "Double-Dippable $300 Travel Credit",
        weight: 0.95,
      },
    ],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.SAPPHIRE,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2024-06-08",
      },
    ],
  },
  {
    cardId: "682a4f0c425d15b5ca34214378cfc3de",
    name: "Southwest Rapid Rewards Performance Business",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.SOUTHWEST,
    isBusiness: true,
    annualFee: 199,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/business-credit-cards/southwest/performance-business",
    imageUrl: "/images/chase/southwest-rapid-rewards-performance-business.png",
    credits: [
      {
        description: "4x Upgraded Boardings",
        value: 100,
        weight: 0.5,
      },
      {
        description: "Global Entry / TSA PreCheck / NEXUS Credit",
        value: 100,
        weight: WEIGHTS.TSA_PRECHECK_OR_SIMILAR,
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
    name: "Southwest Rapid Rewards Plus",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.SOUTHWEST,
    isBusiness: false,
    annualFee: 69,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/southwest/plus",
    imageUrl: "/images/chase/southwest-rapid-rewards-plus.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        expiration: "2023-02-01",
      },
    ],
  },
  {
    cardId: "76e73a4afe8dfc1f8f1be1e345d7eca8",
    name: "Southwest Rapid Rewards Premier",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.SOUTHWEST,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/southwest/premier",
    imageUrl: "/images/chase/southwest-rapid-rewards-premier.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        expiration: "2023-02-01",
      },
    ],
  },
  {
    cardId: "f86d26bad5af78feff0335845003c47e",
    name: "Southwest Rapid Rewards Premier Business",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.SOUTHWEST,
    isBusiness: true,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/business-credit-cards/southwest/premier-business",
    imageUrl: "/images/chase/southwest-rapid-rewards-premier-business.png",
    credits: [],
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
    name: "Southwest Rapid Rewards Priority",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.SOUTHWEST,
    isBusiness: false,
    annualFee: 149,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/southwest/priority",
    imageUrl: "/images/chase/southwest-rapid-rewards-priority.png",
    credits: [
      {
        value: 75,
        description: "Southwest Credit",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        expiration: "2023-02-01",
      },
    ],
  },
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
        amount: [{ amount: 125_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2025-05-07",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 125_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2025-05-07",
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
      {
        value: 100,
        description: "Global Entry, TSA PreCheck, or NEXUS Credit",
        weight: WEIGHTS.TSA_PRECHECK_OR_SIMILAR,
      },
    ],
    offers: [
      {
        amount: [{ amount: 95_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
        expiration: "2025-05-07",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 95_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2025-05-07",
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
        amount: [{ amount: 125_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2025-05-07",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 125_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2025-05-07",
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
        value: 100,
        description: "Global Entry, TSA PreCheck, NEXUS Credit",
        weight: WEIGHTS.TSA_PRECHECK_OR_SIMILAR,
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
      {
        value: 100,
        description: "Global Entry, TSA PreCheck, NEXUS Credit",
        weight: WEIGHTS.TSA_PRECHECK_OR_SIMILAR,
      },
    ],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
        expiration: "2025-05-07",
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
        amount: [{ amount: 30_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
        expiration: "2025-07-16",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        expiration: "2024-03-01",
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
        amount: [{ amount: 90_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
        expiration: "2025-05-07",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 4000,
        credits: [],
        days: 90,
        expiration: "2025-05-07",
      },
    ],
  },
  {
    cardId: "d378a38b56d4c9bd5e1ad184a6ce84f0",
    name: "World of Hyatt",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.HYATT,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://world.hyatt.com/content/gp/en/rewards/hyatt-credit-card.html",
    imageUrl: "/images/chase/world-of-hyatt.png",
    credits: [
      {
        value: 225,
        description: "FNC @ Category 1-4 Property",
        currency: schemas.CurrenciesEnum.enum.HYATT,
        weight: WEIGHTS.FREE_NIGHT_CREDIT,
      },
    ],
    offers: [
      {
        amount: [{ amount: 35_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        details: "Also 2x (30k points total) on next $15k in spend.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 90_000, weight: 0.8 }],
        spend: 3000,
        days: 90,
        credits: [
          {
            value: 90_000,
            description: "3x FNC, <= 30k per.",
            weight: WEIGHTS.FREE_NIGHT_CREDIT,
            currency: schemas.CurrenciesEnum.enum.HYATT,
          },
        ],
        expiration: "2024-10-31",
      },
    ],
  },
  {
    cardId: "0d9d833e7298ab0f1892a4035686fa06",
    name: "World of Hyatt Business",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.HYATT,
    isBusiness: false,
    annualFee: 199,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://world.hyatt.com/content/gp/en/rewards/hyatt-credit-card.html",
    imageUrl: "/images/chase/world-of-hyatt.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://creditcards.chase.com/worldofhyatt/22/naepb",
      },
      {
        amount: [{ amount: 75_000 }],
        spend: 12000,
        days: 180,
        credits: [],
        url: "https://creditcards.chase.com/worldofhyatt/22/naepb",
      },
    ],
  },
  {
    cardId: "f4d8c429f58f9f74944a9108bcae4a22",
    name: "Amazon Prime",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.amazon.com/dp/BT00LN946S",
    imageUrl: "/images/chase/amazon-prime.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 100 }],
        spend: 0.01,
        days: 365,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 0.01,
        days: 365,
        credits: [],
      },
      {
        amount: [{ amount: 275 }],
        spend: 2500,
        days: 90,
        credits: [],
      },
    ],
  },
];
