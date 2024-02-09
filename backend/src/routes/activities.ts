import express from "express";

import {
  getActivities,
  getActivityById,
} from "../controllers/activitiesController";

const router = express.Router();
router.route("/").get(getActivities);
router.route("/:id").get(getActivityById);

export default router;
