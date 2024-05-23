import { describe, expect, test } from "vitest";
import { getDataInCsvFormat, getDataInJsonFormat } from "./conversion.js";
import { CREDIT_CARDS } from "./data/data.js";

describe("Export JSON", () => {
  test("Returns array of nonzero length", async () => {
    const result = getDataInJsonFormat();
    expect(result.length).toBeGreaterThan(0);
  });
});
describe("Export CSV", () => {
  test("Returns string of nonzero length", () => {
    const result = getDataInCsvFormat();
    expect(result).toContain("issuer"); // Checking header row exists
    expect(result).not.toContain("[object Object]");
  });
});

describe("Data Validity Checks", () => {
  const inputs = CREDIT_CARDS.map((card) => ({ card, name: card.name }));
  describe("Expiration", () => {
    test.each(inputs)("$name", ({ card }) => {
      for (const offer of card.offers) {
        if (offer.expiration) {
          expect(new Date(offer.expiration) > new Date()).toBe(true);
        }
      }
    });
  });
});
