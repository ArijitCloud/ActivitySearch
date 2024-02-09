import fs from "fs/promises";
import { Activity } from "../models/activity";

/**
 * Reads the activities from the activities.json file
 * @returns a list of activities
 */
const readActivities = async () => {
  try {
    const rawActivities = await fs.readFile(
      "src/resources/activities.json",
      "utf-8"
    );
    return JSON.parse(rawActivities) as Activity[];
  } catch (e) {
    console.error(e);
    return [];
  }
};
export default readActivities;
