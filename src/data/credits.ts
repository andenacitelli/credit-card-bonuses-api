import { WEIGHTS } from "./weights.js";
import type { schemas } from "@/generated/api.client.js";
import { z } from "zod";
/**
 * Credits generally consistent across cards.
 * Sourcing from one place to promote code reuse and consistency.
 */
export const CREDITS = {
  CHECKED_BAG: {
    description: "Free Checked Bag",
    value: 60, // reasonable average across airlines
    weight: WEIGHTS.CHECKED_BAG,
  },
  CHECKED_BAG_MULTIPLE: {
    description: "Multiple Checked Bags",
    value: 120, // reasonable average across airlines
    weight: WEIGHTS.CHECKED_BAG,
  },

  HILTON_FREE_NIGHT: {
    description: "1x FNC",
    value: 300, // can be used at any hotel, but I tend to value these conservatively b/c you don't usually stay only one night and would need to be on the hook for points for the rest
    weight: WEIGHTS.FREE_NIGHT_CREDIT,
  },
} satisfies Record<string, z.input<typeof schemas.Credit>>;
