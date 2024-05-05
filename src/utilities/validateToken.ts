import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split("Bearer ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decodedToken = jwt.verify(token, `${process.env.JSON_SECRET_KEY}`);
    (req as any).user = decodedToken;
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.log("Error validating Firebase token:", error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
