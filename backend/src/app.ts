import bodyParser from "body-parser";
import {
  corsMiddleware,
  errorHandler,
  notFoundMiddleware,
} from "./middlewares";
import express from "express";
import activitiesRouter from "./routes/activities";
import swagger from "./swagger";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(corsMiddleware);
app.use(bodyParser.json());

// Routes
app.use("/api/v1/activities", activitiesRouter);
app.use("/", swagger);

//error handling middleware
app.use(notFoundMiddleware);
app.use(errorHandler);

// Start server
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};
start();

export { app };
