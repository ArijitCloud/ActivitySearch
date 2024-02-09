import fs from "fs/promises";
import readActivities from "../data/readActivities";
jest.mock("fs/promises");

describe("readActivities", () => {
  //reset mocks before each test
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return activities", async () => {
    const mockActivities = `[
      { "id": 1, "title": "Activity 1" },
      { "id": 2, "title": "Activity 2" }
    ]`;
    (fs.readFile as jest.MockedFunction<typeof fs.readFile>).mockResolvedValue(
      mockActivities
    );

    const activities = await readActivities();

    expect(activities).toEqual(JSON.parse(mockActivities));
  });

  it("should return an empty array when there's an error", async () => {
    (fs.readFile as jest.MockedFunction<typeof fs.readFile>).mockRejectedValue(
      new Error("File read error")
    );

    const activities = await readActivities();

    expect(activities).toEqual([]);
  });
});
