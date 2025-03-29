import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";
import { WEIGHTS } from "../weights.js";

export const WELLS_FARGO_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    id: "fe30fc9556bf1027ac5924abb801d90f",
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
    id: "fe30fc9556bf1027ac5924abb801d90f",
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
    id: "fe30fc9556bf1027ac5924abb801d90f",
    name: "Autograph",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.WELLS_FARGO,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://creditcards.wellsfargo.com/autograph-visa-credit-card/?sub_channel=SEO&vendor_code=G",
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
    id: "fe30fc9556bf1027ac5924abb801d90f",
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
    id: "fe30fc9556bf1027ac5924abb801d90f",
    name: "Choice Privileges",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CHOICE,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.choicehotels.com/choice-privileges/earn-points/mastercard-credit-card",
    imageUrl: "/images/wellsfargo/choice-privileges.png", // Card is technically issued by wells fargo now, but keeping the image in the old place isn't a big deal
    credits: [],
    offers: [
      {
        amount: [{ amount: 40_000 }],
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
    id: "fe30fc9556bf1027ac5924abb801d90f",
    name: "Choice Privileges Select",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CHOICE,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.choicehotels.com/choice-privileges/earn-points/mastercard-credit-card",
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
    id: "fe30fc9556bf1027ac5924abb801d90f",
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
    id: "fe30fc9556bf1027ac5924abb801d90f",
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
          { amount: 300, currency: schemas.CurrenciesEnum.enum.EXPEDIA },
        ],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 300 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    id: "fe30fc9556bf1027ac5924abb801d90f",
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
      {
        value: 100,
        description: "$100 anniversary bonus",
        weight: WEIGHTS.TRAVEL_CREDIT_FUNGIBLE,
      },
      {
        value: 120,
        description: "$120 PreCheck / Global Entry Credit",
        weight: WEIGHTS.TSA_PRECHECK_OR_SIMILAR,
      },
    ],
    offers: [
      {
        amount: [
          { amount: 400, currency: schemas.CurrenciesEnum.enum.EXPEDIA },
        ],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 300 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
];
