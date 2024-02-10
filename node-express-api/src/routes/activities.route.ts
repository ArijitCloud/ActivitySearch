import express from "express";

import { getActivities } from "../controllers/activities.controller";

const router = express.Router();

/**
 * @swagger
 * /api/v1/activities:
 *  get:
 *     summary: Get a list of activities
 *     description: Returns a list of activities.
 *     parameters:
 *      - in: query
 *        name: title
 *        schema:
 *         type: string
 *        description: The title of the activity to search for.
 *     responses:
 *       200:
 *         description: Successful response with the list of activities.
 */
router.route("/").get(getActivities);

export default router;
