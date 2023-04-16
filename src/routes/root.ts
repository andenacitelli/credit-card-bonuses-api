import express, { Response } from "express";
import { z } from "zod";

import { CREDIT_CARDS } from "@/data/data";

import { schemas } from "../generated/api.client";
import { cardToCSV } from "../util/csv";

const router = express.Router();

router.get(
  "/json",
  (_, response: Response<z.input<typeof schemas.CreditCard>[]>) => {
    return response.status(200).json(CREDIT_CARDS);
  }
);

router.get("/csv", (_, response: Response<string>) => {
  return response
    .status(200)
    .send(CREDIT_CARDS.map((card) => cardToCSV(card)).join("\n"));
});

export { router };
