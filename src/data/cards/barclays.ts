import { schemas } from "@/generated/api.client.js";
import { WEIGHTS } from "../weights.js";
import { CreditCardInput } from "../types.js";
export const BARCLAYS_CARDS: Array<CreditCardInput> = [
  {
    cardId: "bb54057b74adc9514885254a82fd8634",
    name: "AAdvantage Aviator Red World Elite",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMERICAN,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/aadvantage-aviator-red-world-elite-mastercard/",
    imageUrl: "/images/barclays/aadvantage-aviator-red-world-elite.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 99 + 0.01,
        days: 90,
        credits: [],
        details: "ANY purchase + AF.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 99 + 0.01,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "4b3dee677718c19aace2e927e6e26704",
    name: "AAdvantage Aviator World Elite Business",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMERICAN,
    isBusiness: true,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.aa.com/barclay-credit-card-aviator-business-american-airlines-aadvantage/",
    imageUrl: "/images/barclays/aadvantage-aviator-world-elite-business.png",
    credits: [
      {
        value: 50,
        description: "First checked bag free",
        weight: 0.5,
      },
    ],
    offers: [],
    historicalOffers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 2000,
        days: 90,
        credits: [
          {
            value: 95,
            description: "$95 Statement Credit",
            weight: 1,
          },
        ],
      },
    ],
  },
  {
    cardId: "f2fcdd7db964fb3c55f6df704f5678c8",
    name: "AARP Essential Rewards",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/aarp-essential-rewards-mastercard/",
    imageUrl: "/images/barclays/aarp-essential-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "fc80c887a321dde1faa7e9282c813683",
    name: "AARP Travel Rewards",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/aarp-travel-rewards-mastercard/",
    imageUrl: "/images/barclays/aarp-travel-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "eddb365c3098a64170b9e4fb322b2a05",
    name: "Carnival World Mastercard",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.CARNIVAL,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/carnival-world-mastercard/",
    imageUrl: "/images/barclays/carnival-world-mastercard.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        details: "Requires ANY purchase.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 0.01,
        days: 365,
        credits: [],
      },
      {
        amount: [{ amount: 25_000 }],
        spend: 500,
        days: 90,
        credits: [],
        details: "Requires ANY purchase.",
      },
    ],
  },
  {
    cardId: "990a75f557890d22402183b20a8fe09d",
    name: "Emirates Skywards Premium World Elite",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.EMIRATES,
    isBusiness: false,
    annualFee: 499,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/emirates-skywards-premium-world-elite-mastercard/",
    imageUrl: "/images/barclays/emirates-skywards-premium-world-elite.png",
    credits: [],
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
        amount: [{ amount: 70_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "e33253806e1da76436e527e3c7b6179d",
    name: "Emirates Skywards Rewards World Elite",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.EMIRATES,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/emirates-skywards-rewards-world-elite-mastercard/",
    imageUrl: "/images/barclays/emirates-skywards-rewards-world-elite.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "e33d8701c8e81d5befe82ec5ed5cda23",
    name: "Frontier Airlines World",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.FRONTIER,
    isBusiness: false,
    annualFee: 89,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/frontier-airlines-world-mastercard/",
    imageUrl: "/images/barclays/frontier-airlines-world.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 500,
        days: 90,
        credits: [],
        details: "Requires paying AF.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 2000,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    cardId: "44effaf95f470d31302d6f366207a543",
    name: "Hawaiian Airlines World Elite",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.HAWAIIAN,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-mastercard/",
    imageUrl: "/images/barclays/hawaiian-airlines-world-elite.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "d760441e47fada8604f084285fbaeb39",
    name: "JetBlue",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.JETBLUE,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/jetblue-card/",
    imageUrl: "/images/barclays/jetblue.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 10_000 }],
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
    cardId: "499685453910108ad817d64f9728eb46",
    name: "JetBlue Business",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.JETBLUE,
    isBusiness: true,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/jetblue-business-card/",
    imageUrl: "/images/barclays/jetblue-business.png",
    credits: [
      {
        value: 50,
        description: "Free checked bag",
        weight: 0.5,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 2000,
        days: 90,
        credits: [],
        expiration: "2023-05-01",
      },
    ],
  },
  {
    cardId: "fafac50a80daae929873eca389fafd15",
    name: "JetBlue Plus",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.JETBLUE,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/jetblue-plus-card/",
    imageUrl: "/images/barclays/jetblue-plus.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        expiration: "2022-12-01",
      },
    ],
  },
  {
    cardId: "c7698b8b99a60ae3ccdd4d880ff5fe68",
    name: "JetBlue Premier",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.JETBLUE,
    isBusiness: false,
    annualFee: 499,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/jetblue-premier-card/",
    imageUrl: "/images/barclays/jetblue-premier.png",
    credits: [
      {
        value: 120,
        description: "$120 credit for Global Entry or TSA PreCheck",
        weight: WEIGHTS.TSA_PRECHECK_OR_SIMILAR,
      },
      {
        value: 300,
        description: "$300 credit for Paisly, JetBlue's portal.",
        weight: 0.7,
      },
      {
        value: 5_000,
        currency: schemas.CurrenciesEnum.enum.JETBLUE,
        description: "5k yearly anniversary credit",
        weight: 1.0,
      },
    ],
    offers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "fdd9a5b1485ab0f88d0abd28c32e3b89",
    name: "Lufthansa Miles & More",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.LUFTHANSA,
    isBusiness: false,
    annualFee: 89,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/lufthansa-miles-more-world-elite-mastercard",
    imageUrl: "/images/barclays/lufthansa-miles-and-more.png",
    credits: [],
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
        amount: [{ amount: 80_000 }],
        spend: 3000,
        credits: [],
        days: 90,
      },
    ],
  },
  {
    cardId: "d0fa846548af110fa31bc7bfa25828df",
    name: "Upromise",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/upromise-world-mastercard/",
    imageUrl: "/images/barclays/upromise.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
        url: "https://cards.barclaycardus.com/banking/cards/upromise-world-mastercard/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "6496ff471ffd822105f59ea276547110",
    name: "Wyndham Rewards Earner",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.WYNDHAM,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.wyndhamrewardscreditcard.com/#earner",
    imageUrl: "/images/barclays/wyndham-rewards-earner.svg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 2000,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    cardId: "ba9027fba78b5ca88e4d9471aa9e31bd",
    name: "Wyndham Rewards Earner Business",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.WYNDHAM,
    isBusiness: true,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.wyndhamrewardscreditcard.com/#earnerbusiness",
    imageUrl: "/images/barclays/wyndham-rewards-earner-business.png",
    credits: [
      {
        value: 15_000,
        description: "Anniversary bonus points",
        currency: "WYNDHAM",
        weight: 1,
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
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "b910f422064772c65840288c632cf900",
    name: "Wyndham Rewards Earner Plus",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.WYNDHAM,
    isBusiness: false,
    annualFee: 75,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.wyndhamrewardscreditcard.com/#earnerplus",
    imageUrl: "/images/barclays/wyndham-rewards-earner-plus.png",
    credits: [
      {
        value: 7_500,
        description: "Anniversary bonus points",
        currency: "WYNDHAM",
        weight: 1,
      },
    ],
    offers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 2000,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    cardId: "9cbc127f6a0a485b64a7ddb5ed52d931",
    name: "Hawaiian Airlines World Elite Business",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.HAWAIIAN,
    isBusiness: true,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-business-mastercard/",
    imageUrl: "/images/barclays/hawaiian-airlines-world-elite-business.png",
    credits: [
      {
        value: 99,
        description: "Hawaiian statement credit",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 0.01,
        days: 90,
        credits: [],
        details: "Requires one purchase of ANY amount.",
      },
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 90,
        credits: [],
        url: "https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-business-mastercard/",
      },
      {
        amount: [{ amount: 90_000 }],
        spend: 10_000,
        days: 365,
        credits: [],
        url: "https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-business-mastercard/",
      },
      {
        amount: [{ amount: 45_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "b52f6b684aec5d5b2465c27e6ccd1adc",
    name: "Breeze",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.BREEZE,
    isBusiness: false,
    annualFee: 89,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/credit-card/breeze-airways/visa-visa-signature-preferred/partner-banner/d4de94d1-c1da-4237-9eff-df975fb4bb87/?referrerid=PTRBAHPE50XX0324",
    imageUrl: "/images/barclays/breeze.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    cardId: "274b5ad3d42b14ff81fb588dd8938aa6",
    name: "Xbox",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.BARCLAYS,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/xbox-mastercard/",
    imageUrl: "/images/barclays/xbox.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 5_000 }],
        spend: 0.01,
        days: 180,
        credits: [],
        details: "Requires ANY purchase.",
      },
      {
        amount: [{ amount: 7_000 }],
        spend: 7000,
        days: 365,
        credits: [
          {
            description: "2x 3-month Game Pass Ultimate",
            currency: "USD",
            value: 17 * 6,
            weight: 0.5,
          },
        ],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 5_000 }],
        spend: 0.01,
        days: 180,
        credits: [],
        details: "Requires ANY purchase.",
      },
    ],
  },
];
