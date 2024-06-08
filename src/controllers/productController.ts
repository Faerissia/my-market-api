import { Request, Response, response } from "express";
import { ErrorModel } from "../services/error";
import * as tools from "../services/tools";
import productService from "../services/product.service";
import responseMethod from "../services/responseMethod";

export const productList = async (req: Request, res: Response) => {
  const category_id = req.query.category_id || null;
  const keyword = req.query.keyword || null;
  const page = Number(req.query.page) || 1;
  const page_size = Number(req.query.page_size) || 10;
  const query = { page, page_size, keyword, category_id };
  try {
    const get = await productService.productList(query);

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
  const product_uuid = req.params.product_uuid;
  try {
    if (!product_uuid)
      return res
        .status(400)
        .json(responseMethod.InvalidRequest("require product_uuid"));

    const get = await productService.productDetail(product_uuid as string);

    if (!get) return res.status(400).json(responseMethod.NotFound());

    res.json({
      success: true,
      data: get,
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
  const user = (req as any).user;
  const { product_name, description, amount, category_id, status } = req.body;
  const product_uuid = req.params.product_uuid;
  const body: any = { product_name, description, amount, category_id, status };
  try {
    if (!product_uuid)
      return res
        .status(400)
        .json(responseMethod.InvalidRequest("require product_uuid"));

    if (!product_name)
      return res
        .status(400)
        .json(responseMethod.InvalidRequest("require product_name"));

    if (!description)
      return res
        .status(400)
        .json(responseMethod.InvalidRequest("require description"));

    const user_id = await tools.userUuidToUserId(user.uuid);
    body.updated_by = user_id;

    const update = await productService.updateProduct(
      product_uuid as string,
      body
    );

    res.json({
      httpStatusCode: 200,
      success: true,
      message: "update product successfully",
    });
  } catch (err: any) {
    console.log("Error:", err);
    res.status(err?.status || 400).json({ message: err.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { product_uuid } = req.body;
  const body = { product_uuid };
  try {
    if (!product_uuid)
      return res
        .status(400)
        .json(responseMethod.InvalidRequest("require product_uuid"));

    const get = await productService.productDetail(product_uuid as string);

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
