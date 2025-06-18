import { schemas } from "@/generated/api.client.js";
import { CreditCardInput } from "../types.js";
export const SYNCHRONY_CARDS: Array<CreditCardInput> = [
  {
    cardId: "0d2caa1705cde187692a28873930c605",
    name: "Cathay Pacific",
    issuer: schemas.IssuersEnum.enum.SYNCHRONY,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CATHAY_PACIFIC,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://pay.cathaypacific.com/en_US/offers/uscreditcard.html",
    imageUrl: "/images/synchrony/cathay-pacific.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 38_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 38_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "06b77b791c904e42695dd12747e89cd8",
    name: "Virgin Red Rewards",
    issuer: schemas.IssuersEnum.enum.SYNCHRONY,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.VIRGIN,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.virgin.com/en-us/virgin-red/rewards-credit-card",
    imageUrl: "/images/synchrony/virgin-red-rewards.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 3000,
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
        expiration: "2025-03-31",
      },
    ],
  },
];
