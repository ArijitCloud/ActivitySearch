import bodyParser from "body-parser";
import {
  corsMiddleware,
  errorHandler,
  notFoundMiddleware,
} from "./middlewares";
import express from "express";
import activitiesRouter from "./routes/activities";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(corsMiddleware);
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send(
    '<h1>Activties API</h1><a href="/api/v1/activities">activities route</a>'
  );
});

app.use("/api/v1/activities", activitiesRouter);

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
