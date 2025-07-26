import { CREDITS } from "@/data/credits";
import { CreditCardInput } from "@/data/types";
import { WEIGHTS } from "@/data/weights";
import { schemas } from "@/generated/api.client";

export const DELTA_CARDS: Array<CreditCardInput> = [
  {
    cardId: "90436ebe63417596fbc6cb5b7e5a2e8c",
    name: "Delta SkyMiles Blue",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-blue-american-express-card/",
    imageUrl: "/images/amex/delta-skymiles-blue.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 10_000 }],
        spend: 1000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 10_000 }],
        spend: 1000,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    cardId: "99d4ec3c5bcd51b70b83b4b792af3ef6",
    name: "Delta SkyMiles Gold",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: false,
    annualFee: 150,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-gold-american-express-card/",
    imageUrl: "/images/amex/delta-skymiles-gold.jpg",
    credits: [
      {
        value: 50,
        description: "First checked bag free",
        weight: 0.5,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 3000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 3000,
        days: 180,
        credits: [],
        expiration: "2025-04-02",
      },
    ],
  },
  {
    cardId: "509a09cbd31edd8df85928d044ef7802",
    name: "Delta SkyMiles Gold Business",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: true,
    annualFee: 150,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-gold/",
    imageUrl: "/images/amex/delta-skymiles-gold-business.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 4000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 6000,
        days: 180,
        credits: [],
        expiration: "2025-04-02",
      },
    ],
  },
  {
    cardId: "bdf4ae17ff6808592f785fff3ae81a2a",
    name: "Delta SkyMiles Platinum",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: false,
    annualFee: 350,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/",
    imageUrl: "/images/amex/delta-skymiles-platinum.webp",
    credits: [
      {
        value: 500,
        description: "Companion Pass",
        weight: 0.7,
      },
    ],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 4000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 4000,
        days: 180,
        credits: [],
        expiration: "2025-04-02",
      },
    ],
  },
  {
    cardId: "1e9c3dae029612a7a40adf6144bf43d4",
    name: "Delta SkyMiles Platinum Business",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: true,
    annualFee: 350,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-platinum/",
    imageUrl: "/images/amex/delta-skymiles-platinum-business.webp",
    credits: [
      CREDITS.PRECHECK_OR_SIMILAR,
      {
        value: 500,
        description: "Companion Pass",
        weight: 0.7,
      },
      {
        value: 50,
        description: "First checked bag free",
        weight: 0.5,
      },
    ],
    offers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 8000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 8000,
        days: 180,
        credits: [],
        expiration: "2025-04-02",
      },
    ],
  },
  {
    cardId: "2a3949c2232cf6646a59531728264a5c",
    name: "Delta SkyMiles Reserve",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: false,
    annualFee: 650,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/",
    imageUrl: "/images/amex/delta-skymiles-reserve.webp",
    credits: [
      {
        value: 240,
        description: "Resy Credit",
        weight: WEIGHTS.DINING_CREDIT,
      },
    ],
    offers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 5000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2025-04-02",
      },
    ],
  },
  {
    cardId: "a8032dfcc9bc6af82eb1a0a487e710b5",
    name: "Delta SkyMiles Reserve Business",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: true,
    annualFee: 550,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-reserve/",
    imageUrl: "/images/amex/delta-skymiles-reserve-business.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 10_000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 110_000 }],
        spend: 12_000,
        days: 180,
        credits: [],
        expiration: "2025-04-02",
      },
    ],
  },
];
