import fs from "fs/promises";
import readFileData from "../common/readFileData";
jest.mock("fs/promises");

describe("readFileData", () => {
  //reset mocks before each test
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return file data", async () => {
    const mockFileData = `[
      { "id": 1, "title": "Activity 1" },
      { "id": 2, "title": "Activity 2" }
    ]`;
    (fs.readFile as jest.MockedFunction<typeof fs.readFile>).mockResolvedValue(
      mockFileData
    );

    const fileData = await readFileData("somefile.json");

    expect(fileData).toEqual(JSON.parse(mockFileData));
  });

  it("should return an empty array when there's an error", async () => {
    (fs.readFile as jest.MockedFunction<typeof fs.readFile>).mockRejectedValue(
      new Error("File read error")
    );

    const fileData = await readFileData("somefile.json");

    expect(fileData).toEqual([]);
  });
});
