import { CreditCardInput } from "@/data/types";
import { WEIGHTS } from "@/data/weights";
import { schemas } from "@/generated/api.client";

export const IHG_CARDS: Array<CreditCardInput> = [
  {
    cardId: "40192e08e31f059d91a108ff09ec5dd5",
    name: "IHG Premier",
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
        amount: [{ amount: 140_000 }],
        spend: 3000,
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
    name: "IHG Premier Business",
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
        amount: [{ amount: 200_000 }],
        spend: 9000,
        days: 90,
        credits: [],
        details: "140k @ $4k, +60k @ $9k.",
      },
      {
        amount: [{ amount: 140_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        details: "140k @ $4k, +60k @ $9k.",
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
    name: "IHG Traveler",
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
        details: "40k + 2x FNC (<= 50k per).",
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
];
