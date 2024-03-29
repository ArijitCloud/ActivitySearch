import { Request, Response } from "express";
/**
 * Error handler middleware
 */
export const errorHandler = (err: Error, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({ success:false, error: "Something went wrong!" });
};
