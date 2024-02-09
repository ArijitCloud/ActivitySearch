import { Request, Response } from "express";
import cache from "memory-cache";
import readActivities from "../data/readActivities";
import type { Activity } from "../models/activity";

const cacheDuration = process.env.CACHE_DURATION || "300000";

const getActivities = async (req: Request, res: Response) => {
  const cachedActivities = cache.get("activities");
  if (cachedActivities) {
    console.log("found in cache..using cached data..");
    res.status(200).json({ success: true, data: cachedActivities });
    return;
  }
  const activities = await readActivities();
  cache.put("activities", activities, Number(cacheDuration));

  res.status(200).json({ success: true, data: activities });
};

const getActivityById = async (req: Request, res: Response) => {
  const activities = await readActivities();
  const activity = activities.find(
    (activity: Activity) => activity.id === Number(req.params.id)
  );
  res.status(200).json({ success: true, data: activity || "" });
};

export { getActivities, getActivityById };
