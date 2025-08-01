import { schemas } from "@/generated/api.client";
import { WEIGHTS } from "@/data/weights";
import { CreditCardInput } from "../types";
import { CREDITS } from "@/data/credits";
export const BANK_OF_AMERICA_CARDS: Array<CreditCardInput> = [
  {
    cardId: "f2d769efdbe2b9d8734787bc24297be6",
    name: "Air France KLM",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.FLYING_BLUE,
    isBusiness: false,
    annualFee: 89,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://wwws.airfrance.us/information/flyingblue/carte-bancaire-partenaire",
    imageUrl: "/images/bankofamerica/air-france-klm.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 70_000, currency: "FLYING_BLUE" }],
        spend: 3000,
        days: 90,
        credits: [],
      },
      {
        amount: [
          { amount: 60_000, currency: "FLYING_BLUE" },
          { amount: 100, currency: "USD" },
        ],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 70_000 }, { amount: 100, currency: "USD" }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "e0971b7dcda10c271490b0443da30484",
    name: "Alaska Airlines",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.ALASKA,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.bankofamerica.com/credit-cards/products/alaska-airlines-credit-card/",
    imageUrl: "/images/bankofamerica/alaska-airlines.png",
    credits: [
      {
        value: 200,
        description: "Companion Fare",
        weight: 0.8,
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
        amount: [
          { amount: 70_000 },
          { amount: 100, currency: schemas.CurrenciesEnum.enum.USD },
        ],
        spend: 2000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 72_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 80_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "bdb66e9a6c5b5d1ccf5120a6c3e30851",
    name: "Alaska Airlines Business",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.ALASKA,
    isBusiness: true,
    annualFee: 75,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.alaskaair.com/content/credit-card/visa-small-business-card",
    imageUrl: "/images/bankofamerica/alaska-airlines-business.png",
    credits: [
      {
        value: 50,
        description: "Free checked bag",
        weight: 0.5,
      },
      {
        value: 100,
        description: "Companion fee",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
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
      {
        amount: [{ amount: 70_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "f2461735a56702c428c209486e2f9e55",
    name: "Customized Cash Rewards",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.bankofamerica.com/credit-cards/products/cash-back-credit-card/",
    imageUrl: "/images/bankofamerica/customized-cash-rewards.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 300 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "eb8bc1a6f86dc471aa0deeca619fbf59",
    name: "Premium Rewards",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.BANK_OF_AMERICA,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.bankofamerica.com/credit-cards/products/premium-rewards-credit-card/",
    imageUrl: "/images/bankofamerica/premium-rewards.png",
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
        amount: [{ amount: 60_000 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "20594480e9f5656485a12e13389f60c7",
    name: "Premium Rewards Elite",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.BANK_OF_AMERICA,
    isBusiness: false,
    annualFee: 550,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.bankofamerica.com/credit-cards/products/premium-rewards-elite-credit-card/",
    imageUrl: "/images/bankofamerica/premium-rewards-elite.png",
    credits: [
      CREDITS.PRECHECK_OR_SIMILAR,
      {
        value: 300,
        description: "Incidental Airline Statement Credits",
        weight: 0.3,
      },
      {
        value: 150,
        description:
          "Annaul $150 streaming, delivery, fitness, and transit credit",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "fecfaab2c32f3edd5d97eafd8f3f19d6",
    name: "Travel Rewards",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.BANK_OF_AMERICA,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/",
    imageUrl: "/images/bankofamerica/travel-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 25_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 25_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "98db04658d4deee69293bd67bd2fd341",
    name: "Unlimited Cash Rewards",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/credit-cards/products/unlimited-cash-back-credit-card/",
    imageUrl: "/images/bankofamerica/unlimited-cash-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "4f6d71dd4d06ff960cae0990b5efda21",
    name: "Business Advantage Customized Cash",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/cash-rewards-business-credit-card",
    imageUrl: "/images/bankofamerica/business-advantage-customized-cash.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 300 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 300 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "a99aa675065459b90144275ac18d9ab1",
    name: "Business Advantage Unlimited Cash",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/unlimited-cash-rewards-business-credit-card",
    imageUrl: "/images/bankofamerica/business-advantage-unlimited-cash.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 300 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 300 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "1e75cf9ca2ccded9a621d5e8f5630c3c",
    name: "Business Advantage Travel Rewards",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.BANK_OF_AMERICA,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/travel-rewards-business-credit-card",
    imageUrl: "/images/bankofamerica/business-advantage-travel-rewards.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "9dce80bda519a8616ca4eb288d7cc693",
    name: "Platinum Plus",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/smallbusiness/credit-cards/products/platinum-plus-business-credit-card",
    imageUrl: "/images/bankofamerica/platinum-plus.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 300 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 300 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "541d121bd20b148d43a8c896d0de6830",
    name: "Free Spirit",
    issuer: schemas.IssuersEnum.enum.BANK_OF_AMERICA,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.SPIRIT,
    isBusiness: false,
    annualFee: 79,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1.5,
    url: "https://www.bankofamerica.com/credit-cards/products/spirit-airlines-credit-card/",
    imageUrl: "/images/bankofamerica/free-spirit.webp",
    credits: [
      {
        value: 100,
        description: "Companion Flight Voucher",
        weight: 0.6,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 1000,
        days: 90,
        credits: [
          {
            description: "Companion Flight Voucher",
            value: 100,
            weight: 0.6,
          },
        ],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 50_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
];
