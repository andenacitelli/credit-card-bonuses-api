import type { schemas } from "@/generated/api.client.js";
import type { z } from "zod";

/**
 * I can't clean up discontinued cards properly yet, so this placeholder offer will have to do
 */
export const DISCONTINUED_OFFERS: Array<z.output<typeof schemas.Offer>> = [
  {
    amount: [{ amount: 0 }],
    spend: 3000,
    days: 90,
    credits: [],
  },
];
