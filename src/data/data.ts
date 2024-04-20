import type { z } from "zod";

import type { schemas } from "../generated/api.client";
import { AMERICAN_EXPRESS_CARDS } from "./cards/amex";
import { BANK_OF_AMERICA_CARDS } from "./cards/bankofamerica";
import { BARCLAYS_CARDS } from "./cards/barclays";
import { BREX_CARDS } from "./cards/brex";
import { CAPITAL_ONE_CARDS } from "./cards/capitalone";
import { CHASE_CARDS } from "./cards/chase";
import { CITI_CARDS } from "./cards/citi";
import { FIRST_CARDS } from "./cards/first";
import { FNBO_CARDS } from "./cards/fnbo";
import { PENFED_CARDS } from "./cards/penfed";
import { PNC_CARDS } from "./cards/pnc";
import { SYNCHRONY_CARDS } from "./cards/synchrony";
import { US_BANK_CARDS } from "./cards/usbank";
import { WELLS_FARGO_CARDS } from "./cards/wellsfargo";

export const CREDIT_CARDS: z.input<typeof schemas.CreditCard>[] = [
  ...AMERICAN_EXPRESS_CARDS,
  ...BANK_OF_AMERICA_CARDS,
  ...BARCLAYS_CARDS,
  ...BREX_CARDS,
  ...CHASE_CARDS,
  ...CAPITAL_ONE_CARDS,
  ...CITI_CARDS,
  ...FIRST_CARDS,
  ...FNBO_CARDS,
  ...PENFED_CARDS,
  ...PNC_CARDS,
  ...SYNCHRONY_CARDS,
  ...US_BANK_CARDS,
  ...WELLS_FARGO_CARDS,
];
