import { Request, Response } from "express";
import cache from "memory-cache";
import "dotenv/config";
import { getMappedActivities } from "../data";
import filterByText from "../common/filterByText";
import { ActivityMap } from "../models";

const cacheDuration = process.env.CACHE_DURATION || "300000";

const getActivities = async (req: Request, res: Response) => {
  const cachedActivities = cache.get("activities") as
    | ReadonlyArray<ActivityMap>
    | undefined;

  let mappedActivities: ReadonlyArray<ActivityMap>;
  if (cachedActivities) {
    console.log("found in cache..using cached data..");
    mappedActivities = cachedActivities;
  } else {
    mappedActivities = await getMappedActivities();
    cache.put("activities", mappedActivities, Number(cacheDuration));
  }

  if (req.query.title) {
    res.status(200).json({
      success: true,
      data:
        filterByText(mappedActivities, "title", req.query.title as string) ||
        [],
    });
    return;
  }

  res.status(200).json({ success: true, data: mappedActivities });
};

export { getActivities };
