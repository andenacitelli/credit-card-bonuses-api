import { schemas } from "@/generated/api.client";
import { CreditCardInput } from "../types";
export const PNC_CARDS: Array<CreditCardInput> = [
  {
    cardId: "dfaa58e5c67e69cb711960cfd4567f9c",
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
      // technically has an elevated cashback rate for the first year, but nothing that's an actual offer
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
