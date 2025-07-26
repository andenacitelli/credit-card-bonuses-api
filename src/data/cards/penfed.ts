import { schemas } from "@/generated/api.client";
import { CreditCardInput } from "../types";
export const PENFED_CARDS: Array<CreditCardInput> = [
  {
    cardId: "879d4dccd8e59ba55a3a688adeb2c773",
    name: "Power Cash Rewards",
    issuer: schemas.IssuersEnum.enum.PENFED,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.penfed.org/credit-cards/power-cash-rewards-visa",
    imageUrl: "/images/penfed/power-cash-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 100 }],
        spend: 1500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100 }],
        spend: 1500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "2743ba5aabdadc15aa6bd046f1b71a5c",
    name: "Platinum Rewards",
    issuer: schemas.IssuersEnum.enum.PENFED,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.PENFED,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.penfed.org/credit-cards/platinum-rewards-visa",
    imageUrl: "/images/penfed/platinum-rewards.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 15_000 }],
        spend: 1500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 15_000 }],
        spend: 1500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "9afcb83bfffcdc108fc3ac90a8b384da",
    name: "Pathfinder",
    issuer: schemas.IssuersEnum.enum.PENFED,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.PENFED,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.penfed.org/credit-cards/pathfinder-rewards",
    imageUrl: "/images/penfed/pathfinder.webp",
    details:
      "AF waived via military service or by setting up a checking account.",
    credits: [
      {
        description: "Incidental travel credit (yearly)",
        value: 100,
        weight: 0.6,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 1500,
        days: 90,
        credits: [],
      },
    ],
  },
];
