import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";

export const PNC_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "Cash Rewards Visa Signature Business",
    issuer: schemas.IssuersEnum.enum.PNC,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.pnc.com/en/small-business/borrowing/business-credit-cards/pnc-cash-rewards-visa-signature-business-credit-card.html",
    imageUrl: "/images/pnc/cash-rewards-visa-signature-business.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 600 }],
        spend: 6000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 600 }],
        spend: 6000,
        days: 90,
        credits: [],
      },
    ],
  },
];
