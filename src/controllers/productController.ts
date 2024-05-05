import { Request, Response, response } from "express";
import { ErrorModel } from "../services/error";
import * as tools from "../services/tools";
import productService from "../services/product.service";
import responseMethod from "../services/responseMethod";

export const productList = async (req: Request, res: Response) => {
  const { product_uuid } = req.body;
  const body = { product_uuid };
  try {
    if (!product_uuid)
      return res
        .status(400)
        .json(responseMethod.InvalidRequest("require product_uuid"));

    const get = await productService.ProductDetail(product_uuid as string);

    res.json({
      success: true,
      data: {
        results: get,
      },
    });
  } catch (err: any) {
    console.log("Error:", err);
    res.status(err?.status || 400).json({ message: err.message });
  }
};

export const productDetail = async (req: Request, res: Response) => {
  const product_uuid = req.query.product_uuid;
  try {
    if (!product_uuid)
      return res
        .status(400)
        .json(responseMethod.InvalidRequest("require product_uuid"));

    const get = await productService.ProductDetail(product_uuid as string);

    res.json({
      success: true,
      data: {
        results: get,
      },
    });
  } catch (err: any) {
    console.log("Error:", err);
    res.status(err?.status || 400).json({ message: err.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const user = (req as any).user;
  const { product_name, description, amount, category_id } = req.body;
  const body: any = { product_name, description, amount, category_id };
  try {
    if (!product_name)
      return res
        .status(400)
        .json(responseMethod.InvalidRequest("require product_name"));

    if (!description)
      return res
        .status(400)
        .json(responseMethod.InvalidRequest("require description"));

    const user_id = await tools.userUuidToUserId(user.uuid);
    body.user_uuid = user.uuid;
    body.created_by = user_id;
    body.updated_by = user_id;

    const create = await productService.createProduct(body);

    res.json({
      httpStatusCode: 200,
      success: true,
      message: "create product successfully",
    });
  } catch (err: any) {
    console.log("Error:", err);
    res.status(err?.status || 400).json({ message: err.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { product_uuid } = req.body;
  const body = { product_uuid };
  try {
    if (!product_uuid)
      return res
        .status(400)
        .json(responseMethod.InvalidRequest("require product_uuid"));

    const get = await productService.ProductDetail(product_uuid as string);

    res.json({
      success: true,
      data: {
        results: get,
      },
    });
  } catch (err: any) {
    console.log("Error:", err);
    res.status(err?.status || 400).json({ message: err.message });
  }
};
