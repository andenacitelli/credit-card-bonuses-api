import { schemas } from "@/generated/api.client.js";
import { REFERRALS } from "../referral-links.js";
import { CreditCardInput } from "../types.js";
export const DISCOVER_CARDS: Array<CreditCardInput> = [
  {
    cardId: "dae75a5609dea8f39f750f4b225d2c5c",
    name: "Discover It",
    issuer: schemas.IssuersEnum.enum.DISCOVER,
    network: schemas.NetworksEnum.enum.DISCOVER,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.discover.com/credit-cards/",
    imageUrl: "/images/discover/it.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 0 }],
        spend: 0.01,
        days: 90,
        credits: [],
        details: "No offer currently available.",
        referralUrl: REFERRALS.DISCOVER,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 0 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
];
