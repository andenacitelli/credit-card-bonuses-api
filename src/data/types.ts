import { z } from "zod";
import { schemas } from "../generated/api.client";

export type CreditCardInput = z.input<typeof schemas.CreditCard>;
export type CreditCard = z.output<typeof schemas.CreditCard>;
export type Credit = z.input<typeof schemas.Credit>;
export type Offer = z.input<typeof schemas.Offer>;
