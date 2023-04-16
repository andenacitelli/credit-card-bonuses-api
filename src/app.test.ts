import supertest from "supertest";

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
    });
  });
});
