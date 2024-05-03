import type { z } from "zod";

import { REFERRALS } from "@/data/referral-links";

import { schemas } from "../../generated/api.client";
import { WEIGHTS } from "../weights";

export const CHASE_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "Marriott Bonvoy Bountiful",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.MARRIOTT,
    isBusiness: false,
    annualFee: 250,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/bountiful?iCELL=61GD",
    imageUrl: "/images/chase/marriott-bonvoy-bountiful.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 85_000 }],
        spend: 4000,
        days: 90,
        credits: [],
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
        url: "https://creditcards.chase.com/travel-credit-cards/avios/aer-lingus",
      },
      {
        amount: [{ amount: 125_000 }],
        spend: 20_000,
        days: 365,
        credits: [],
        url: "https://www.doctorofcredit.com/chase-british-airways-125000-point-bonus-after-20000-in-spend/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        credits: [],
        spend: 5000,
        days: 90,
        expiration: "2022-08-01",
      },
    ],
  },
  {
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
        amount: [{ amount: 70_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        details: "Extra 30k for (extremely high) 20k spend.",
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
        amount: [{ amount: 75_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        url: "https://creditcards.chase.com/travel-credit-cards/avios/british-airways",
      },
      {
        amount: [{ amount: 125_000 }],
        spend: 20_000,
        days: 365,
        credits: [],
        url: "https://www.doctorofcredit.com/chase-british-airways-125000-point-bonus-after-20000-in-spend/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        credits: [],
        spend: 5000,
        days: 90,
        expiration: "2022-08-01",
      },
    ],
  },
  {
    name: "Disney Premier",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 49,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://disneyrewards.com/compare-cards/?cell=608S11",
    imageUrl: "/images/chase/disney.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 400 }],
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
    name: "Disney",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://disneyrewards.com/",
    imageUrl: "/images/chase/disney.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 250 }],
        spend: 500,
        days: 90,
        credits: [],
        url: "https://disneyrewards.com/compare-cards/?cell=608S11",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 150 }],
        spend: 500,
        days: 90,
        credits: [],
        url: "https://disneyrewards.com/compare-cards/?cell=608S11",
      },
    ],
  },
  {
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
        referralUrl: REFERRALS.CHASE.FREEDOM,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 25_000 }],
        credits: [],
        spend: 500,
        days: 90,
        expiration: "2022-02-01",
      },
    ],
  },
  {
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
        amount: [{ amount: 20_000 }],
        spend: 500,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.FREEDOM,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 20_000 }],
        credits: [],
        spend: 500,
        days: 90,
        expiration: "2022-02-01",
      },
    ],
  },
  {
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
        url: "https://creditcards.chase.com/travel-credit-cards/avios/iberia",
      },
      {
        amount: [{ amount: 125_000 }],
        spend: 20_000,
        days: 365,
        credits: [],
        url: "https://www.doctorofcredit.com/chase-british-airways-125000-point-bonus-after-20000-in-spend/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        credits: [],
        spend: 5000,
        days: 90,
        expiration: "2022-08-01",
      },
    ],
  },
  {
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
        amount: [{ amount: 175_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://creditcards.chase.com/a1/ihg/BIZQ224NAEP",
      },
      {
        amount: [{ amount: 140_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 175_000 }],
        spend: 3000,
        days: 90,
        credits: [
          {
            value: 400,
            description: "Free night credit worth up to 40k points.",
            weight: 0.8,
          },
        ],
        url: "https://www.ihg.com/onerewards/content/us/en/creditcard",
      },
    ],
  },
  {
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
        spend: 3000,
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
        amount: [{ amount: 100_000 }],
        spend: 2000,
        days: 90,
        credits: [],
        url: "https://www.ihg.com/onerewards/content/us/en/creditcard",
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
        days: 90,
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
        amount: [{ amount: 100_000 }],
        spend: 8_000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.INKS,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 15_000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 80_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2020-03-01",
      },
    ],
  },
  {
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
        expiration: "2023-03-19",
      },
    ],
  },
  {
    name: "Ink Business Premier",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 195,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://creditcards.chase.com/business-credit-cards/ink/premier?CELL=6G3K",
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
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 1000,
        credits: [],
        days: 90,
        expiration: "2023-07-01",
      },
    ],
  },
  {
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
        spend: 5000,
        days: 90,
        credits: [
          {
            description: "5x Free Night Credits",
            value: 250_000,
            weight: 0.8,
            currency: schemas.CurrenciesEnum.enum.MARRIOTT,
          },
        ],
        details: "3x FNC up to 50k per",
      },
    ],
    historicalOffers: [
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
        weight: 0.75,
      },
    ],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        expiration: "2022-02-01",
      },
    ],
  },
  {
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
        amount: [{ amount: 75_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        expiration: "2022-12-01",
      },
    ],
  },
  {
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
        weight: WEIGHTS.PRECHECK,
      },
    ],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        url: "https://www.southwest.com/html/rapidrewards/partners/credit-cards/southwest-airlines-rapid-rewards-business-cards/index.html",
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
      },
      {
        amount: [{ amount: 30_000 }],
        spend: 4000,
        days: 90,
        credits: [
          {
            description: "Companion Pass",
            value: 500,
            weight: 1,
          },
        ],
        url: "https://creditcards.chase.com/a1/southwest/NAEP30kCPPlus223?",
        details: "Comes with companion pass, valued ~$500.",
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
        amount: [{ amount: 30_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        url: "https://creditcards.chase.com/a1/southwest/AEP75kPlus1023#",
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
        details: "Comes with Companion Pass.",
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
        amount: [{ amount: 30_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
        details: "Comes with companion pass, which can be quite valuable.",
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
        url: "https://creditcards.chase.com/business-credit-cards/southwest/premier-business",
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
        url: "https://creditcards.chase.com/business-credit-cards/southwest/premier-business",
      },
    ],
  },
  {
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
        amount: [{ amount: 30_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        url: "https://creditcards.chase.com/a1/southwest/AEP75kPlus1023#",
        referralUrl: REFERRALS.CHASE.SOUTHWEST,
        details: "Comes with companion pass, which can be quite valuable.",
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
    name: " United Business",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: true,
    annualFee: 99,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/business-credit-cards/united/united-business-card",
    imageUrl: "/images/chase/united-business.png",
    credits: [
      {
        value: 100,
        description: "United Credit",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        url: "https://www.theexplorercard.com/business-rewards-cards/business-card?",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 5000,
        credits: [],
        days: 90,
      },
      {
        amount: [{ amount: 150_000 }],
        spend: 20_000,
        credits: [],
        days: 90,
        expiration: "2022-11-01",
      },
    ],
  },
  {
    name: "United Club Infinite",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: false,
    annualFee: 525,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/united/club-infinite",
    imageUrl: "/images/chase/united-club-infinite.png",
    credits: [
      {
        value: 650,
        description: "United Lounges",
        weight: WEIGHTS.LOUNGES,
      },
      {
        value: 100,
        description: "Global Entry, TSA PreCheck, or NEXUS Credit",
        weight: WEIGHTS.PRECHECK,
      },
    ],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
        url: "https://www.theexplorercard.com/rewards-cards",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 120_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2022-04-01",
      },
    ],
  },
  {
    name: "United Club Business",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: true,
    annualFee: 450,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/business-credit-cards/united/united-club-business",
    imageUrl: "/images/chase/united-club-business.png",
    credits: [
      {
        value: 650,
        description: "United Lounge Access",
        weight: WEIGHTS.LOUNGES,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        url: "https://www.theexplorercard.com/business-rewards-cards/club-card",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 100_000 }],
        spend: 10_000,
        credits: [],
        days: 90,
        expiration: "2022-11-01",
      },
    ],
  },
  {
    name: "United Explorer",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/united/united-explorer",
    imageUrl: "/images/chase/united-explorer.png",
    credits: [
      {
        value: 50,
        description: "First checked bag free",
        weight: 0.5,
      },
      {
        value: 100,
        description: "Global Entry, TSA PreCheck, NEXUS Credit",
        weight: WEIGHTS.PRECHECK,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://www.theexplorercard.com/united-rewards-cards",
        referralUrl: REFERRALS.CHASE.UNITED,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 6000,
        days: 90,
        credits: [],
        expiration: "2022-04-01",
      },
    ],
  },
  {
    name: "United Gateway",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/united/united-gateway",
    imageUrl: "/images/chase/united-gateway.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://www.theexplorercard.com/rewards-cards?CELL=XWG&domain=uec",
        referralUrl: REFERRALS.CHASE.UNITED,
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
    name: "United Quest",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.UNITED,
    isBusiness: false,
    annualFee: 250,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/united/united-quest",
    imageUrl: "/images/chase/united-quest.png",
    credits: [
      {
        value: 125,
        description: "United Credit",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.UNITED,
        url: "https://www.theexplorercard.com/rewards-cards",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 5000,
        credits: [],
        days: 90,
        expiration: "2022-04-01",
      },
    ],
  },
  {
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
        description: "Free Night Credit @ Category 1-4 Property",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 3000,
        credits: [],
        days: 90,
        expiration: "2021-03-01",
      },
    ],
  },
  {
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
        url: "https://creditcards.chase.com/worldofhyatt/22/naepb?CELL=69T0",
      },
      {
        amount: [{ amount: 75_000 }],
        spend: 12000,
        days: 180,
        credits: [],
        url: "https://creditcards.chase.com/worldofhyatt/22/naepb?CELL=69T0",
      },
    ],
  },
  {
    name: "Amazon Prime",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.amazon.com/dp/BT00LN946S?bypass=1",
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
        amount: [{ amount: 150 }],
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
