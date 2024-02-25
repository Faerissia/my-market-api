import { Request, Response, response } from "express";
import { ErrorModel } from "../services/error";
import { decodeJwtToEmail } from "../services/tools";
import { prismaClient } from "../config/prisma";
import userService from "../services/user.service";

export const check = async (req: Request, res: Response) => {
  try {
    const result = await prismaClient.$queryRaw`SELECT NOW()`;

    res.json({
      success: true,
      data: {
        results: result,
      },
    });
  } catch (err) {
    console.log("Error:", err);
    res.status(500).send(String(err));
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await userService.register(body);

    res.json({
      success: true,
      data: {
        results: result,
      },
    });
  } catch (err: any) {
    console.log("Error:", err);
    res.status(err.status).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const login = await userService.login(body);

    res.json({
      success: true,
      data: {
        results: login,
      },
    });
  } catch (err: any) {
    console.log("Error:", err);
    res.status(err.status).json({ message: err.message });
  }
};
