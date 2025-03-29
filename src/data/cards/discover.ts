import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";
import { REFERRALS } from "../referral-links.js";

export const DISCOVER_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    id: "35853e78f11658dca90bc64ad1645727",
    name: "Discover It",
    issuer: schemas.IssuersEnum.enum.DISCOVER,
    network: schemas.NetworksEnum.enum.DISCOVER,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.discover.com/credit-cards/",
    imageUrl: "/images/discover/it.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 0 }],
        spend: 0.01,
        days: 90,
        credits: [],
        details: "No offer currently available.",
        referralUrl: REFERRALS.DISCOVER,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 0 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
];
