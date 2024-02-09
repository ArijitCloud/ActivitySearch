import { Request, Response } from "express";
import readActivities from "../data/readActivities";
import type { Activity } from "../models/activity";

const getActivities = async (req: Request, res: Response) => {
  const activities = await readActivities();
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
