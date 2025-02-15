import type { z } from "zod";

import type { schemas } from "../generated/api.client.js";
import { AMERICAN_EXPRESS_CARDS } from "@/data/cards/amex.js";
import { BANK_OF_AMERICA_CARDS } from "@/data/cards/bankofamerica.js";
import { BARCLAYS_CARDS } from "@/data/cards/barclays.js";
import { BREX_CARDS } from "@/data/cards/brex.js";
import { CAPITAL_ONE_CARDS } from "@/data/cards/capitalone.js";
import { CHASE_CARDS } from "@/data/cards/chase.js";
import { CITI_CARDS } from "@/data/cards/citi.js";
import { FIRST_CARDS } from "@/data/cards/first.js";
import { FNBO_CARDS } from "@/data/cards/fnbo.js";
import { PENFED_CARDS } from "@/data/cards/penfed.js";
import { PNC_CARDS } from "@/data/cards/pnc.js";
import { SYNCHRONY_CARDS } from "@/data/cards/synchrony.js";
import { US_BANK_CARDS } from "@/data/cards/usbank.js";
import { WELLS_FARGO_CARDS } from "@/data/cards/wellsfargo.js";
import { DISCOVER_CARDS } from "./cards/discover.js";
import { WEB_BANK_CARDS } from "./cards/web-bank.js";

export const CREDIT_CARDS: z.input<typeof schemas.CreditCard>[] = [
  ...AMERICAN_EXPRESS_CARDS,
  ...BANK_OF_AMERICA_CARDS,
  ...BARCLAYS_CARDS,
  ...BREX_CARDS,
  ...CHASE_CARDS,
  ...CAPITAL_ONE_CARDS,
  ...CITI_CARDS,
  ...DISCOVER_CARDS,
  ...FIRST_CARDS,
  ...FNBO_CARDS,
  ...PENFED_CARDS,
  ...PNC_CARDS,
  ...SYNCHRONY_CARDS,
  ...US_BANK_CARDS,
  ...WELLS_FARGO_CARDS,
  ...WEB_BANK_CARDS,
];
