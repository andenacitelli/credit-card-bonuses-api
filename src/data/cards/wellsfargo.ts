import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";

export const WELLS_FARGO_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "Business Platinum",
    issuer: schemas.IssuersEnum.enum.WELLS_FARGO,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.wellsfargo.com/biz/business-credit/credit-cards/platinum-card/",
    imageUrl: "/images/wellsfargo/business-platinum.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 300 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 300 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
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
        amount: [{ amount: 90_000 }],
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
];
