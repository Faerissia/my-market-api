import jwtDecode from 'jwt-decode';
import { Request, Response, NextFunction } from "express";

export const validateToken = async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const token = req.headers.authorization?.split('Bearer ')[1];
        if (!token) {
          return res.status(401).json({ error: 'Unauthorized' });
        }
        const decodedToken = await jwtDecode(token);
        (req as any).user = decodedToken;
        // Proceed to the next middleware or route handler
        next();
      } catch (error) {
        console.error('Error validating Firebase token:', error);
        return res.status(401).json({ error: 'Unauthorized' });
      }
}
