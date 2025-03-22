import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";
import { WEIGHTS } from "../weights.js";

export const CITI_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "AAdvantage Executive",
    issuer: schemas.IssuersEnum.enum.CITI,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMERICAN,
    isBusiness: false,
    annualFee: 595,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.aa.com/citi-executive-card-american-airlines-direct/",
    imageUrl: "/images/citi/aadvantage-executive.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 7000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 7000,
        days: 90,
        credits: [],
        expiration: "2023-10-01",
      },
    ],
  },
  {
    name: "AAdvantage MileUp",
    issuer: schemas.IssuersEnum.enum.CITI,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMERICAN,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.aa.com/citi-mileup-card-american-airlines-direct/",
    imageUrl: "/images/citi/aadvantage-mileup.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 15_000 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 15_000 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "AAdvantage Platinum Select",
    issuer: schemas.IssuersEnum.enum.CITI,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMERICAN,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://creditcards.aa.com/",
    imageUrl: "/images/citi/aadvantage-platinum-select.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 3500,
        days: 120,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 3500,
        days: 120,
        credits: [],
      },
      {
        amount: [{ amount: 125_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2024-03-01",
      },
    ],
  },
  {
    name: "AAdvantage Platinum Select Business",
    issuer: schemas.IssuersEnum.enum.CITI,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMERICAN,
    isBusiness: true,
    annualFee: 99,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://creditcards.aa.com/cards/citi-business-card-american-airlines-direct/",
    imageUrl: "/images/citi/aadvantage-platinum-select-business.webp",
    credits: [
      {
        value: 50,
        description: "First checked bag free",
        weight: 0.5,
      },
    ],
    offers: [
      {
        amount: [{ amount: 65_000 }],
        spend: 4000,
        days: 120,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 65_000 }],
        spend: 4000,
        days: 120,
        credits: [],
      },
    ],
  },
  {
    name: "Double Cash",
    issuer: schemas.IssuersEnum.enum.CITI,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.citi.com/credit-cards/citi-double-cash-credit-card",
    imageUrl: "/images/citi/double-cash.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 1500,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 1500,
        days: 180,
        credits: [],
      },
      {
        amount: [{ amount: 300 }],
        spend: 750,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    name: "Custom Cash",
    issuer: schemas.IssuersEnum.enum.CITI,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.citi.com/credit-cards/citi-custom-cash-credit-card",
    imageUrl: "/images/citi/custom-cash.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 1500,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 1500,
        days: 180,
        credits: [],
      },
      {
        amount: [{ amount: 300 }],
        spend: 750,
        credits: [],
        days: 180,
      },
    ],
  },
  {
    name: "Strata Premier",
    issuer: schemas.IssuersEnum.enum.CITI,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.CITI,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.citi.com/credit-cards/citi-strata-premier-credit-card",
    imageUrl: "/images/citi/strata-premier.png",
    credits: [
      {
        value: 100,
        description: "Hotel Credit ($500 min purchase)",
        weight: WEIGHTS.TRAVEL_CREDIT_FUNGIBLE,
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
        amount: [{ amount: 80_000 }],
        spend: 4000,
        credits: [],
        days: 90,
        expiration: "2023-01-17",
      },
    ],
  },
  {
    name: "Rewards+",
    issuer: schemas.IssuersEnum.enum.CITI,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.CITI,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.citi.com/credit-cards/citi-rewards-plus-credit-card",
    imageUrl: "/images/citi/rewards-plus.png",
    credits: [],
    offers: [
      // no offer and probably being discontinued (ref: https://www.doctorofcredit.com/rumor-citi-rewards-card-to-be-discontinued/)
    ],
    historicalOffers: [
      {
        amount: [{ amount: 25_000 }],
        spend: 1500,
        credits: [],
        days: 90,
      },
    ],
  },
  {
    name: "AT&T Points Plus",
    issuer: schemas.IssuersEnum.enum.CITI,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.att.com/deals/att-points-plus-citi/",
    imageUrl: "/images/citi/att-points-plus.jpg",
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
        amount: [{ amount: 100 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
];
