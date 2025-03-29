import { schemas } from "@/generated/api.client.js";
import { CreditCardInput } from "../types.js";
export const FNBO_CARDS: Array<CreditCardInput> = [
  {
    cardId: "1f13c36d3b8218b1a22d5ab050d30b09",
    name: "Amtrak Guest Rewards",
    issuer: schemas.IssuersEnum.enum.FNBO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMTRAK,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.amtrak.com/Apply",
    imageUrl: "/images/fnbo/amtrak-guest-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 12_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "4a2f48392c94bc6b0ef9b6d30153bddc",
    name: "Amtrak Guest Rewards Preferred",
    issuer: schemas.IssuersEnum.enum.FNBO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMTRAK,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.amtrak.com/Apply",
    imageUrl: "/images/fnbo/amtrak-guest-rewards-preferred.jpg",
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
        amount: [{ amount: 40_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "1b70fa39672eb066b7a3a5092888e7b2",
    name: "Best Western Rewards",
    issuer: schemas.IssuersEnum.enum.FNBO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.BEST_WESTERN,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.bestwestern.com/en_US/offers/hotel-discounts/best-western-rewards-visa.html",
    imageUrl: "/images/fnbo/best-western-rewards.jpg",
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
        amount: [{ amount: 50_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "cf10cfcfab787460b24ecbf8b76f7bdc",
    name: "Best Western Rewards Premium",
    issuer: schemas.IssuersEnum.enum.FNBO,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.BEST_WESTERN,
    isBusiness: false,
    annualFee: 89,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.bestwestern.com/en_US/offers/hotel-discounts/best-western-rewards-visa.html",
    imageUrl: "/images/fnbo/best-western-rewards-premium.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 80_000 }],
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
