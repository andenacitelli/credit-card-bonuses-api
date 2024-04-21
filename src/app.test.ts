import supertest from "supertest";
import { describe, expect, test } from "vitest";
import { app } from "./app";

describe("Express app", () => {
  describe("/json", () => {
    test("Returns array of nonzero length", async () => {
      const response = await supertest(app).get("/json");
      expect(response.statusCode).toEqual(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
  describe("/csv", () => {
    test("Returns string of nonzero length", async () => {
      const response = await supertest(app).get("/csv");
      expect(response.statusCode).toEqual(200);
      expect(response.text.length).toBeGreaterThan(0);
      expect(response.text).toContain("issuer"); // Checking header row exists
      expect(response.text).not.toContain("[object Object]");
    });
  });
});
