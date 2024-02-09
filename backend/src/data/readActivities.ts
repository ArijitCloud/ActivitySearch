import fs from "fs/promises";
import { Activity } from "../models/activity";

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
