import { z } from "zod";

import { schemas } from "../../generated/api.client";

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
        amount: [{ amount: 400 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://www.pnc.com/en/small-business/borrowing/business-credit-cards/pnc-cash-rewards-visa-signature-business-credit-card.html",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 400 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
];
