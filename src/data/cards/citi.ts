import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";
import { WEIGHTS } from "../weights.js";
import { DISCONTINUED_OFFERS } from "../placeholder-offers.js";

export const CITI_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    id: "3543149f6555df6f7e4974923c55d853",
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
    id: "196b33e005dd1bc8e1c505f2bf98a1d1",
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
    id: "a497d6ba509538db9e3e4a3e5e313fe9",
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
    id: "f6ff3383cc6c52a81eb4715eb8d5de03",
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
    id: "06b9a384d710e73db7f0ded7613c9c4b",
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
    id: "49fe6c73c0e823a89346979f50d5b981",
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
    id: "d7e2e5b5e595ca6510c101349c914513",
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
    id: "cbc737da5cbd44575dec6325bbbd8688",
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
    id: "d4bbd57e45d6a6ddb445ddec4e781d7c",
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
  {
    // discontinued; retained only so users that entered it don't break
    id: "c908014aae7680e73d084b37698386b7",
    name: "Premier",
    issuer: schemas.IssuersEnum.enum.CITI,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "",
    imageUrl: "",
    credits: [],

    discontinued: true,
    offers: DISCONTINUED_OFFERS,
    historicalOffers: DISCONTINUED_OFFERS,
  },
];
