import { z } from "zod";
import { schemas } from "../generated/api.client.js";

export type CreditCardInput = z.input<typeof schemas.CreditCard>;
export type CreditCard = z.output<typeof schemas.CreditCard>;
