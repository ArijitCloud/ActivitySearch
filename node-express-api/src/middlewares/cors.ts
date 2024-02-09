import cors from "cors";

/**
 * Cors middleware - allow only specific origin
 */
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:5000",
  optionSuccessStatus: 200,
};

export const corsMiddleware = cors(corsOptions);
