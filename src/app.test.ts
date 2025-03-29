import { describe, expect, test } from "vitest";
import {
  getDataInCsvFormat,
  getDataInJsonFormat,
  getDataInYamlFormat,
} from "./conversion.js";
import { CREDIT_CARDS } from "./data/data.js";
import { isBefore, differenceInYears } from "date-fns";

describe("Export", () => {
  test("JSON", () => {
    const result = getDataInJsonFormat();
    expect(result.length).toBeGreaterThan(0);
  });
  test("CSV", () => {
    const result = getDataInCsvFormat();
    expect(result).toContain("issuer"); // Checking header row exists
    expect(result).not.toContain("[object Object]");
  });
  test("YAML", () => {
    const result = getDataInYamlFormat();
    expect(result.length).toBeGreaterThan(0);
  });
});

describe("Data Validity Checks", () => {
  const inputs = CREDIT_CARDS.map((card) => ({ card, name: card.name }));
  describe("Expiration", () => {
    describe("Current Offers", () => {
      // Verify current offers have not expired
      test.each(inputs)("$name", ({ card }) => {
        for (const offer of card.offers) {
          if (offer.expiration) {
            expect(
              isBefore(new Date(), new Date(offer.expiration)),
            ).toBeTruthy();
          }
        }
      });
    });
    describe("Historical Offers", () => {
      // Verify historical offer expiration dates are always present and always within ~2yr; any older, they kind of fail the "recent" part of "recent best"
      test.each(inputs)("$name", ({ card }) => {
        for (const offer of card.historicalOffers) {
          if (offer.expiration) {
            // cannot mandate expiration b/c it's possible (and not uncommon) for a card to actively be at its all-time high
            expect(
              differenceInYears(new Date(), new Date(offer.expiration)),
            ).toBeLessThanOrEqual(2);
          }
        }
      });
    });
  });
  describe("Trimmed Strings", () => {
    test.each(inputs)("$name", ({ card }) => {
      expect(card.name).toBe(card.name.trim());
    });
  });

  /**
   * Enforce unique "constraint" on the `id` field, which is basically a database primary key
   * I'm basically inadvertently using the name as the primary key rather than the id, which is brittle
   */
  describe("ID Constraints", () => {
    test.each(inputs)("$name", ({ card }) => {
      expect(CREDIT_CARDS.filter((c) => c.id === card.id).length).toBe(1); // unique
      expect(card.id.length).toEqual("c9a3de7e82160912a9d8b487be075de8".length); // however many characters this is, dunno
      expect(card.id).toBe(card.id.trim()); // trimmed
    });
  });
});
