import fs from "fs/promises";

/**
 * Reads the data from the json file
 * @returns am array of data
 */
const readFileData = async <T>(filepath: string): Promise<ReadonlyArray<T>> => {
  try {
    const rawData = await fs.readFile(filepath, "utf-8");
    return JSON.parse(rawData) as ReadonlyArray<T>;
  } catch (e) {
    console.error(e);
    return [];
  }
};
export default readFileData;
