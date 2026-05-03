import { schemas } from "@/generated/api.client";
import { CreditCardInput } from "../types";
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
        amount: [{ amount: 60_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        expiration: "2026-04-16",
      },
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "d2dd7fe800c9788452ec41c3fc3a06fa",
    name: "Verizon Visa",
    issuer: schemas.IssuersEnum.enum.SYNCHRONY,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.verizon.com/financial-services/verizon-visa-card/",
    imageUrl: "/images/synchrony/verizon-visa.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 50, currency: schemas.CurrenciesEnum.enum.USD }],
        spend: 0.01,
        days: 90,
        credits: [],
        details: "$50 statement credit after any purchase within 90 days.",
      },
      {
        amount: [{ amount: 100, currency: schemas.CurrenciesEnum.enum.USD }],
        spend: 1500,
        days: 90,
        credits: [],
        details:
          "Additional $100 statement credit after spending $1,500 within 90 days.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50, currency: schemas.CurrenciesEnum.enum.USD }],
        spend: 0.01,
        days: 90,
        credits: [],
        details: "$50 statement credit after any purchase within 90 days.",
      },
      {
        amount: [{ amount: 100, currency: schemas.CurrenciesEnum.enum.USD }],
        spend: 1500,
        days: 90,
        credits: [],
        details:
          "Additional $100 statement credit after spending $1,500 within 90 days.",
      },
    ],
  },
  {
    cardId: "145320d72bf260a11a537333d4425820",
    name: "Walmart OnePay CashRewards",
    issuer: schemas.IssuersEnum.enum.SYNCHRONY,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.walmart.com/cp/onepay-cashrewards-mastercard/9569366376",
    imageUrl: "/images/synchrony/walmart-onepay-cashrewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 35, currency: schemas.CurrenciesEnum.enum.USD }],
        spend: 75,
        days: 30,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 35, currency: schemas.CurrenciesEnum.enum.USD }],
        spend: 75,
        days: 30,
        credits: [],
      },
    ],
  },
  {
    cardId: "25e394e76617c0a660b48d7c5c4449ea",
    name: "Amazon Prime Store Card",
    issuer: schemas.IssuersEnum.enum.SYNCHRONY,
    network: schemas.NetworksEnum.enum.VISA, // card is only for Amazon, this is arbitrary
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 5,
    url: "https://www.amazon.com/Synchrony-Bank-Amazon-com-Store-Card/dp/B008A0GNA8",
    imageUrl: "/images/synchrony/amazon-prime-store-card.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 60, currency: "USD" }],
        spend: 0.01,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60, currency: "USD" }],
        spend: 0.01,
        days: 90,
        credits: [],
      },
    ],
  },
];
