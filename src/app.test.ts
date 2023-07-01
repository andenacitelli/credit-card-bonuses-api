import supertest from "supertest";

import { CREDIT_CARDS } from "@/data/data";

import { app } from "./app";

describe("Express app", () => {
  describe("/json", () => {
    it("Returns array of nonzero length", async () => {
      const response = await supertest(app).get("/json");
      expect(response.statusCode).toEqual(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
  describe("/csv", () => {
    it("Returns string of nonzero length", async () => {
      const response = await supertest(app).get("/csv");
      expect(response.statusCode).toEqual(200);
      expect(response.text.length).toBeGreaterThan(0);
      expect(response.text).toContain("issuer"); // Checking header row exists

      // +1 is due to header row
      const numberOfOffers = CREDIT_CARDS.reduce(
        (count, card) => count + card.offers.length,
        0
      );
      expect(response.text.split("\n").length).toEqual(numberOfOffers + 1);
    });
  });
});
