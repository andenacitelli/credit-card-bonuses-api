import { REFERRALS } from "@/data/referral-links";
import { CreditCardInput } from "@/data/types";
import { schemas } from "@/generated/api.client";

export const INK_CARDS: Array<CreditCardInput> = [
  {
    cardId: "8ec7f405d03afa62eaeea7e197a29e8a",
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
        days: 180,
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
    cardId: "c80cdb77c3eda940e2a36abb4f943c69",
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
        amount: [{ amount: 90_000 }],
        spend: 8_000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.INKS,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 120_000 }],
        spend: 8_000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "4a1c1e46f145b76fcc72ebd391fc5766",
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
        amount: [{ amount: 90_000 }],
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
        expiration: "2025-09-20",
      },
    ],
  },
  {
    cardId: "94c9b624738adce05fbe0e5bfc5d620e",
    name: "Ink Business Premier",
    details: "Points are nontransferable. Only cashback redemption.",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 195,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://creditcards.chase.com/business-credit-cards/ink/premier",
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
];
