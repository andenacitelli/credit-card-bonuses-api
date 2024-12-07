import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";
import { WEIGHTS } from "@/data/weights.js";

export const CAPITAL_ONE_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
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
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 500,
        credits: [],
        days: 90,
      },
    ],
  },
  {
    name: "Savor",
    issuer: schemas.IssuersEnum.enum.CAPITAL_ONE,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.capitalone.com/credit-cards/savorone-dining-rewards/",
    imageUrl: "/images/capitalone/savor.webp",
    details: "Previously SavorOne. Original Savor was discontinued.",
    credits: [],
    offers: [
      {
        amount: [{ amount: 250 }],
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
        spend: 6000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 750 }],
        spend: 6000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
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
    offers: [],
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
      {
        value: 100,
        description: "2x Capital One Lounge Visits",
        weight: WEIGHTS.LOUNGES * 0.25,
      },
      {
        value: 100,
        description: "Global Entry / TSA PreCheck Credit",
        weight: WEIGHTS.PRECHECK,
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
        credits: [],
        days: 90,
      },
    ],
  },
  {
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
      {
        value: 300,
        description: "Travel Credit",
        weight: 0.9,
      },
      {
        value: 100,
        description: "Global Entry / TSA PreCheck Credit",
        weight: WEIGHTS.PRECHECK,
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
      },
      {
        amount: [{ amount: 75_000 }],
        credits: [],
        spend: 4000,
        days: 90,
      },
      {
        amount: [{ amount: 100_000 }],
        credits: [],
        spend: 10_000,
        days: 90,
        expiration: "2022-03-01",
      },
    ],
  },
  {
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
      {
        value: 300,
        description: "Travel Credit",
        weight: 0.9,
      },
      {
        value: 100,
        description: "Global Entry / TSA PreCheck Credit",
        weight: WEIGHTS.PRECHECK,
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
