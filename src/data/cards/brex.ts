import { schemas } from "@/generated/api.client.js";
import { CreditCardInput } from "../types.js";
export const BREX_CARDS: Array<CreditCardInput> = [
  {
    id: "be49d60cb01b9d5c3e919e6c570e9a48",
    name: "Brex",
    issuer: schemas.IssuersEnum.enum.BREX,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.BREX,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.brex.com/product/credit-card/",
    imageUrl: "/images/brex/brex.png",
    credits: [],
    offers: [
      // Can't find any bonuses
    ],
    historicalOffers: [
      {
        amount: [{ amount: 10_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 110_000 }],
        spend: 11_000,
        days: 90,
        credits: [],
      },
    ],
  },
];
