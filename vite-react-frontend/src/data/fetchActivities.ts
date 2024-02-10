import { Activity } from "../types/activity";

const apiBaseUrl = "http://localhost:3001";
const fetchActivities = async (searchText: string) => {
  try {
    const response = await fetch(
      `${apiBaseUrl}/api/v1/activities?title=${searchText}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const { data, success } = await response.json();
    if (!success) throw new Error("Error fetching activities");
    
    return data as ReadonlyArray<Activity>;
  } catch (error) {
    console.error("Error fetching activities::", error);
  }
};

export default fetchActivities;
