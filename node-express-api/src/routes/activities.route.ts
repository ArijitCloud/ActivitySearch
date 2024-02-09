import express from "express";

import {
  getActivities,
  getActivityById,
} from "../controllers/activities.controller";

const router = express.Router();

/**
 * @swagger
 * /api/v1/activities:
 *  get:
 *     summary: Get a list of activities
 *     description: Returns a list of activities.
 *     responses:
 *       200:
 *         description: Successful response with the list of activities.
 */
router.route("/").get(getActivities);

/**
 * @swagger
 * /api/v1/activities/{id}:
 *   get:
 *     summary: Get an activity by id
 *     description: Returns an activity by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the activity to return.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with the activity.
 */
router.route("/:id").get(getActivityById);

export default router;
