import request from "supertest";
import { app } from "../app";

describe("readActivities", () => {
  it("should get activities", async () => {
    const response = await request(app).get("/api/v1/activities");
    expect(response.status).toBe(200);
  });
});
