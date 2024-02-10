import readFileData from "../common/readFileData";
import { Activity } from "../models";

/**
 * Reads the activities from the suppliers.json file
 * @returns an array of activities
 */
export const readActivities = async () =>
  await readFileData<Activity>("src/resources/activities.json");
