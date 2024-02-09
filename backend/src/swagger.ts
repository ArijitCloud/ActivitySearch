import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const router = express.Router();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Activities API",
      version: "1.0.0-preview",
      description: "Manage activities",
    },
  },
  apis: ["./src/routes/*.ts"],
};

router.use(
  "/",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSDoc(options))
);

export default router;
