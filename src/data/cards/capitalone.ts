import { schemas } from "@/generated/api.client";
import { WEIGHTS } from "@/data/weights";
import { CreditCardInput } from "../types";
import { CREDITS } from "@/data/credits";
export const CAPITAL_ONE_CARDS: Array<CreditCardInput> = [
  {
    cardId: "66f7413248c7f2c61ce1e8008685eac2",
    name: "Quicksilver",
    issuer: schemas.IssuersEnum.enum.CAPITAL_ONE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.capitalone.com/credit-cards/quicksilver/",
    imageUrl: "/images/capitalone/quicksilver.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 500,
        days: 90,
        credits: [
          {
            value: 100,
            description: "Capital One Travel Credit",
            weight: WEIGHTS.TRAVEL_CREDIT_FUNGIBLE,
          },
        ],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 500,
        days: 90,
        credits: [
          {
            value: 100,
            description: "Capital One Travel Credit",
            weight: WEIGHTS.TRAVEL_CREDIT_FUNGIBLE,
          },
        ],
      },
    ],
  },
  {
    cardId: "2d16431e0caee645b420cc3d3255b2ee",
    name: "Savor",
    issuer: schemas.IssuersEnum.enum.CAPITAL_ONE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.capitalone.com/credit-cards/savor/",
    imageUrl: "/images/capitalone/savor.webp",
    details: "Previously SavorOne. Original Savor was discontinued.",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 250 }],
        spend: 500,
        credits: [],
        days: 90,
      },
    ],
  },
  {
    cardId: "d4955a21df61a45ad86c3d60c58b91fc",
    name: "Spark 1.5% Cash Select",
    issuer: schemas.IssuersEnum.enum.CAPITAL_ONE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.capitalone.com/small-business/credit-cards/spark-cash-select",
    imageUrl: "/images/capitalone/spark-cash.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 500 }],
        spend: 4500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 750 }],
        spend: 4500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "c8d364bb32a8d2f6a359cf57a5e58cde",
    name: "Spark 1.5% Miles Select",
    issuer: schemas.IssuersEnum.enum.CAPITAL_ONE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CAPITAL_ONE,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.capitalone.com/small-business/credit-cards/spark-miles-select/",
    imageUrl: "/images/capitalone/spark-miles.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 4500,
        credits: [],
        days: 90,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 4500,
        credits: [],
        days: 90,
      },
    ],
  },
  {
    cardId: "9bd7d14db16dcc106d2eb062b08bf15f",
    name: "Spark 2% Cash Plus",
    issuer: schemas.IssuersEnum.enum.CAPITAL_ONE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 150,
    isAnnualFeeWaived: false,
    countsTowards524: false,
    universalCashbackPercent: 1,
    url: "https://www.capitalone.com/small-business/credit-cards/spark-cash-plus/",
    imageUrl: "/images/capitalone/spark-cash.webp",
    credits: [],
    offers: [
      // NOTE: This card technically has offers, but I tend to avoid tracking anything with prohibitively high spend requirements.
    ],
    historicalOffers: [
      {
        amount: [{ amount: 500 }],
        spend: 5000,
        credits: [],
        days: 90,
      },
      {
        amount: [{ amount: 1200 }],
        spend: 30000,
        days: 90,
        credits: [],
        url: "https://www.capitalone.com/small-business/credit-cards/spark-cash-plus/",
      },
    ],
  },
  {
    cardId: "e48261ce7908f2ed8403245217f44de7",
    name: "Spark 2x Miles Plus",
    issuer: schemas.IssuersEnum.enum.CAPITAL_ONE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CAPITAL_ONE,
    isBusiness: true,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.capitalone.com/small-business/credit-cards/spark-miles/",
    countsTowards524: false,
    imageUrl: "/images/capitalone/spark-miles.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 4500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 4500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "4a7a8036e514f187ca7c41b31925251e",
    name: "Venture Rewards",
    issuer: schemas.IssuersEnum.enum.CAPITAL_ONE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CAPITAL_ONE,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.capitalone.com/credit-cards/venture/",
    imageUrl: "/images/capitalone/venture-rewards.webp",
    credits: [
      CREDITS.PRECHECK_OR_SIMILAR,
      {
        value: 100,
        description: "2x Capital One Lounge Visits",
        weight: WEIGHTS.LOUNGES,
      },
    ],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 4000,
        credits: [
          {
            value: 250,
            description: "Travel Portal Credit",
            currency: "USD",
            weight: WEIGHTS.TRAVEL_CREDIT_FUNGIBLE,
          },
        ],
        days: 90,
      },
    ],
  },
  {
    cardId: "9aa036266b8cc7e7512a630efdecae0b",
    name: "Venture X",
    issuer: schemas.IssuersEnum.enum.CAPITAL_ONE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CAPITAL_ONE,
    isBusiness: false,
    annualFee: 395,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.capitalone.com/credit-cards/venture-x/",
    imageUrl: "/images/capitalone/venture-x.webp",
    credits: [
      CREDITS.PRECHECK_OR_SIMILAR,
      {
        value: 300,
        description: "Travel Credit",
        weight: 0.9,
      },
      {
        value: 300,
        description: "Capital One Lounge Access",
        weight: WEIGHTS.LOUNGES,
      },
    ],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        expiration: "2023-12-01",
      },
      {
        amount: [{ amount: 75_000 }],
        credits: [],
        spend: 4000,
        days: 90,
      },
    ],
  },
  {
    cardId: "1d2ff07648fdd4b06d89ef0309f1c4cb",
    name: "Venture X Business",
    issuer: schemas.IssuersEnum.enum.CAPITAL_ONE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CAPITAL_ONE,
    isBusiness: true,
    annualFee: 395,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.capitalone.com/small-business/credit-cards/venture-x-business/",
    imageUrl: "/images/capitalone/venture-x-business.png",
    credits: [
      CREDITS.PRECHECK_OR_SIMILAR,
      {
        value: 300,
        description: "Travel Credit",
        weight: 0.9,
      },
      {
        value: 300,
        description: "Capital One Lounge Access",
        weight: WEIGHTS.LOUNGES,
      },
    ],
    offers: [
      // Offers a bit too high spend requirement to be worthwhile showing
    ],
    historicalOffers: [
      {
        amount: [{ amount: 150_000 }],
        spend: 30_000,
        days: 90,
        details: "Extremely high spend requirement, be aware.",
        credits: [],
      },
    ],
  },
  {
    cardId: "d0298263cc453d34160558a93fd1bcb2",
    name: "VentureOne",
    issuer: schemas.IssuersEnum.enum.CAPITAL_ONE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.CAPITAL_ONE,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.capitalone.com/credit-cards/ventureone/",
    imageUrl: "/images/capitalone/venture-one.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 40_000 }],
        credits: [],
        spend: 1000,
        days: 90,
      },
    ],
  },
];
