import { schemas } from "@/generated/api.client";
import { CreditCardInput } from "../types";
export const COMENITY_CARDS: Array<CreditCardInput> = [
  {
    cardId: "eb573cdc20d07fc2d60e8528f73cafb0",
    name: "AAA Daily Advantage",
    issuer: schemas.IssuersEnum.enum.COMENITY,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.ace.aaa.com/financial/aaa-credit-card.html",
    imageUrl: "/images/comenity/aaa-daily-advantage.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 100, currency: "USD" }],
        spend: 1000,
        days: 90,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100, currency: "USD" }],
        spend: 1000,
        days: 90,
      },
    ],
  },
  {
    cardId: "6862ac82f65ac34d31032dbe0cf1e87b",
    name: "AAA Travel Advantage",
    issuer: schemas.IssuersEnum.enum.COMENITY,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.ace.aaa.com/financial/aaa-credit-card.html",
    imageUrl: "/images/comenity/aaa-travel-advantage.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 100, currency: "USD" }],
        spend: 1000,
        days: 90,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100, currency: "USD" }],
        spend: 1000,
        days: 90,
      },
    ],
  },
];
