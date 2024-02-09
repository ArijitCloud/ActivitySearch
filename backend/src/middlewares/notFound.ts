import { Request, Response } from "express";
/**
 * Not found middleware
 */
export const notFoundMiddleware = (req: Request, res: Response) => {
  res.status(404).json({ success:false, error: "Path not found" });
};
