import express, { Response } from "express";
import { z } from "zod";
import Papa from "papaparse";
import { CREDIT_CARDS } from "@/data/data";

import { schemas } from "../generated/api.client";
import { cardToDumpableObjects } from "../util/csv";

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
    .header("Content-Type", "text/csv")
    .send(
      Papa.unparse(
        CREDIT_CARDS.reduce((accumulator, card) => {
          for (const offer of cardToDumpableObjects(card)) {
            accumulator.push(offer);
          }
          return accumulator;
        }, [] as object[])
      )
    );
});

router.get("/last-updated", (_, response: Response<string>) => {
  if (!process.env.DEPLOY_TIMESTAMP) {
    return response.status(500).end();
  }
  return response
    .status(200)
    .header("Content-Type", "text/plain")
    .send(process.env.DEPLOY_TIMESTAMP);
});

export { router };
