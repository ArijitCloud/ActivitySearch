import express from "express";

import {
  getActivities,
  getActivityById,
} from "../controllers/activitiesController";

const router = express.Router();

//route /api/v1/activities
router.route("/").get(getActivities);

//route /api/v1/activities/:id
router.route("/:id").get(getActivityById);

export default router;
