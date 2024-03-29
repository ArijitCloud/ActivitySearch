import request from "supertest";
import { app } from "../app";

describe("readActivities", () => {
  it("should get activities 200 response", async () => {
    const response = await request(app).get("/api/v1/activities");
    expect(response.statusCode).toBe(200);
  });
  it("should get activity by id 200 response", async () => {
    const response = await request(app).get("/api/v1/activities/1");
    expect(response.statusCode).toBe(200);
  });

  it("should return success message for all activities", async () => {
    const response = await request(app).get("/api/v1/activities");
    expect(response.body.success).toBe(true);
  });
  it("should return success message for filtered activity", async () => {
    const response = await request(app).get("/api/v1/activities?title='German Tour'");
    expect(response.body.success).toBe(true);
  });

  it("should return defined data", async () => {
    const response = await request(app).get("/api/v1/activities");
    expect(response.body.data).toBeDefined();
  });

  it("should return empty array for title that doesn't exist", async () => {
    const response = await request(app).get("/api/v1/activities?title='unknown'");
    expect(response.body.data).toStrictEqual([]);
  });
});
