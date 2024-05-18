import { describe, expect, test } from "vitest";
import { getDataInCsvFormat, getDataInJsonFormat } from "./conversion.js";

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
