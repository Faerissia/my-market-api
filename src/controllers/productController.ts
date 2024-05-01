import { Request, Response, response } from "express";
import { ErrorModel } from "../services/error";
import { decodeJwtToEmail } from "../services/tools";
import productService from "../services/product.service";

export const productDetail = async (req: Request, res: Response) => {
  const product_uuid = req.query.product_uuid;
  try {
    res.json({
      success: true,
      data: {
        results: "result",
      },
    });
  } catch (err: any) {
    console.log("Error:", err);
    res.status(err.status).json({ message: err.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const user = (req as any).user;
  try {
    res.json({
      success: true,
      data: {
        results: user,
      },
    });
  } catch (err: any) {
    console.log("Error:", err);
    res.status(err.status).json({ message: err.message });
  }
};
