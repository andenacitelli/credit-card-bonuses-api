import { z } from "zod";

import { schemas } from "../generated/api.client";
import { AMERICAN_EXPRESS_CARDS } from "@/data/cards/amex/amex";
import { BANK_OF_AMERICA_CARDS } from "@/data/cards/bankofamerica";
import { BARCLAYS_CARDS } from "@/data/cards/barclays";
import { BREX_CARDS } from "@/data/cards/brex";
import { CAPITAL_ONE_CARDS } from "@/data/cards/capitalone";
import { CHASE_CARDS } from "@/data/cards/chase/chase";
import { CITI_CARDS } from "@/data/cards/citi";
import { FIRST_CARDS } from "@/data/cards/first";
import { FNBO_CARDS } from "@/data/cards/fnbo";
import { PENFED_CARDS } from "@/data/cards/penfed";
import { PNC_CARDS } from "@/data/cards/pnc";
import { SYNCHRONY_CARDS } from "@/data/cards/synchrony";
import { US_BANK_CARDS } from "@/data/cards/usbank";
import { WELLS_FARGO_CARDS } from "@/data/cards/wellsfargo";
import { DISCOVER_CARDS } from "./cards/discover";
import { WEB_BANK_CARDS } from "./cards/web-bank";
import { CreditCard } from "./types";

export const CREDIT_CARDS: Array<CreditCard> = z
  .array(schemas.CreditCard)
  .parse([
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
  ]);
