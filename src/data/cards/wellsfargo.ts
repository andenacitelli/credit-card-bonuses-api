import { schemas } from "@/generated/api.client";
import { WEIGHTS } from "../weights";
import { CreditCardInput } from "../types";
import { CREDITS } from "@/data/credits";
export const WELLS_FARGO_CARDS: Array<CreditCardInput> = [
  {
    cardId: "429640c66f9a2e3bd077978aa5a1f0aa",
    name: "Signify Business Cash",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://creditcards.wellsfargo.com/business-credit-cards/signify-business-cash-credit-card",
    imageUrl: "/images/wellsfargo/signify-business-cash.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 500 }],
        spend: 5_000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 500 }],
        spend: 5_000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "df2960b75b50536daa6e05a33479b198",
    name: "Active Cash",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://creditcards.wellsfargo.com/active-cash-credit-card/",
    imageUrl: "/images/wellsfargo/active-cash.png",
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
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "ce08e0bddd774433cb77be87f5d6af76",
    name: "Autograph",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.WELLS_FARGO,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://creditcards.wellsfargo.com/autograph-visa-credit-card",
    imageUrl: "/images/wellsfargo/autograph.png",
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
        amount: [{ amount: 30_000 }],
        spend: 1500,
        days: 90,
        credits: [],
        expiration: "2023-01-01",
      },
    ],
  },
  {
    cardId: "d1fcd95962c94d1b56d691fda30acead",
    name: "Autograph Journey",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.WELLS_FARGO,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.wellsfargo.com/autograph-journey-visa-credit-card",
    imageUrl: "/images/wellsfargo/autograph.png",
    credits: [
      {
        value: 50,
        description: "$50 Credit for $50+ Airline Purchase",
        currency: "USD",
        weight: 0.7,
      },
    ],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "2745fd62ecf1bba1056f7933b1ab285e",
    name: "Choice Privileges",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CHOICE,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.wellsfargo.com/wells-fargo-choice-privileges-credit-cards",
    imageUrl: "/images/wellsfargo/choice-privileges.png", // Card is technically issued by wells fargo now, but keeping the image in the old place isn't a big deal
    credits: [],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "c68bed03d88b439b70c905e490757271",
    name: "Choice Privileges Select",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CHOICE,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.wellsfargo.com/wells-fargo-choice-privileges-credit-cards",
    imageUrl: "/images/wellsfargo/choice-privileges-select.png",
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
        amount: [{ amount: 100_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "c077a47639c7b47d1895200c72588ee3",
    name: "Bilt",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.WELLS_FARGO,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.biltrewards.com/card",
    imageUrl: "/images/wellsfargo/bilt.png",
    credits: [],
    offers: [
      // No current offer, but need to leave so it doesn't users that previously entered it
    ],
    historicalOffers: [],
  },
  {
    cardId: "546dccf995e97f42d656d069c95efacf",
    name: "Expedia One Key",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.EXPEDIA,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.expedia.com/one-key-cards",
    imageUrl: "/images/wellsfargo/one-key.png",
    credits: [],
    offers: [
      {
        amount: [
          { amount: 400, currency: schemas.CurrenciesEnum.enum.EXPEDIA },
        ],
        spend: 1000,
        days: 90,
        credits: [],
        expiration: "2025-12-01",
      },
    ],
    historicalOffers: [
      {
        amount: [
          { amount: 400, currency: schemas.CurrenciesEnum.enum.EXPEDIA },
        ],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "dfdf46ff6cbfcea7b738c7092e00af78",
    name: "Expedia One Key+",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.EXPEDIA,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.expedia.com/one-key-cards",
    imageUrl: "/images/wellsfargo/one-key.png",
    credits: [
      CREDITS.PRECHECK_OR_SIMILAR,
      {
        value: 100,
        description: "$100 anniversary bonus",
        weight: WEIGHTS.TRAVEL_CREDIT_FUNGIBLE,
      },
    ],
    offers: [
      {
        amount: [
          { amount: 600, currency: schemas.CurrenciesEnum.enum.EXPEDIA },
        ],
        spend: 3000,
        days: 90,
        credits: [],
        expiration: "2025-12-01",
      },
    ],
    historicalOffers: [
      {
        amount: [
          { amount: 600, currency: schemas.CurrenciesEnum.enum.EXPEDIA },
        ],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
];
