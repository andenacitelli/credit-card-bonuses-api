import { schemas } from "@/generated/api.client";
import { REFERRALS } from "../referral-links";
import { CreditCardInput } from "../types";
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
        amount: [{ amount: 100 }],
        spend: 0.01,
        days: 90,
        credits: [],
        details: "Referral only. You get $100, referrer gets $100.",
        referralUrl: REFERRALS.DISCOVER,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100 }],
        spend: 0.01,
        days: 90,
        credits: [],
        details: "Referral only.",
      },
    ],
  },
];
