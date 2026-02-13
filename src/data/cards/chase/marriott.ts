import { REFERRALS } from "@/data/referral-links";
import { CreditCardInput } from "@/data/types";
import { WEIGHTS } from "@/data/weights";
import { schemas } from "@/generated/api.client";

export const CHASE_MARRIOTT_CARDS: Array<CreditCardInput> = [
  {
    cardId: "fb5e3887059d5d8600b2a5eaed7ddaf7",
    name: "Marriott Bonvoy Bountiful",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.MARRIOTT,
    isBusiness: false,
    annualFee: 250,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/bountiful",
    imageUrl: "/images/chase/marriott-bonvoy-bountiful.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 85_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.MARRIOTT,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 85_000 }],
        credits: [],
        spend: 5000,
        days: 90,
        expiration: "2023-12-01",
      },
    ],
  },
  {
    cardId: "918c978a06c7c36f9a321b2efa0ff974",
    name: "Marriott Bonvoy Bold",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.MARRIOTT,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/bold",
    imageUrl: "/images/chase/marriott-bonvoy-bold.jpeg",
    credits: [],
    offers: [
      {
        amount: [
          {
            amount: 100_000,
            weight: WEIGHTS.FREE_NIGHT_CREDIT,
            details: "2x FNC",
          },
        ],
        spend: 1000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.MARRIOTT,
      },
    ],
    historicalOffers: [
      {
        amount: [
          {
            amount: 100_000,
            weight: WEIGHTS.FREE_NIGHT_CREDIT,
            details: "2x FNC",
          },
        ],
        spend: 1000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.MARRIOTT,
      },
    ],
  },
  {
    cardId: "6a4a30b866d4d37216b9d586a15ad1cc",
    name: "Marriott Bonvoy Boundless",
    issuer: schemas.IssuersEnum.enum.CHASE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.MARRIOTT,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/boundless",
    imageUrl: "/images/chase/marriott-bonvoy-boundless.jpeg",
    credits: [],
    offers: [
      {
        amount: [
          {
            amount: 5 * 50_000,
            currency: "MARRIOTT",
            weight: WEIGHTS.FREE_NIGHT_CREDIT,
          },
        ],
        details: "5x FNC, <= 50k per",
        spend: 3000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.MARRIOTT,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 * 5, currency: "MARRIOTT" }],
        details: "5x FNC, <= 50k per",
        spend: 3000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.CHASE.MARRIOTT,
      },
    ],
  },
];
