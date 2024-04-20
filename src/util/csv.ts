import type { z } from "zod";

import { schemas } from "../generated/api.client";

export const CSV_COLUMN_ORDER = [
  "name",
  "issuer",
  "network",
  "currency",
  "offerAmount",
  "offerSpend",
  "offerDays",
  "offerUrl",
  "countsTowards524",
  "details",
  "isBusiness",
  "annualFee",
  "isAnnualFeeWaived",
  "universalCashbackPercent",
  "url",
  "imageUrl",
  "credits",
];

export const cardToDumpableObjects = (
  card: z.input<typeof schemas.CreditCard>
): object[] => {
  return card.offers.map((offer) => {
    if (!offer.amount[0]) {
      throw new Error(
        `Unable to parse card ${card.issuer} ${card.name} into csv due to no amounts!`
      );
    }
    return {
      ...card,
      offers: undefined,
      historicalOffers: undefined,
      offerAmount: offer.amount.length > 0 ? offer.amount[0].amount : 0,
      offerSpend: offer.spend,
      offerUrl: offer.url,
      offerDays: offer.days,
      countsTowards524:
        card.countsTowards524 ??
        (!card.isBusiness ||
          (card.issuer === schemas.IssuersEnum.enum.CAPITAL_ONE &&
            card.isBusiness)),
      imageUrl: `https://offeroptimist.com${card.imageUrl}`,
      credits: card.credits
        .map((credit) => `${credit.value} ${credit.description}`)
        .join("; "),
    };
  });
};
