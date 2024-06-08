import express from "express";
import * as productController from "../controllers/productController";
import { validateToken } from "../utilities/validateToken";

const router = express.Router();

router.get("/list", productController.productList);
router.get("/detail/(:product_uuid)", productController.productDetail);
router.post("/create", validateToken, productController.createProduct);
router.put(
  "/update/(:product_uuid)",
  validateToken,
  productController.updateProduct
);
router.delete("/delete", validateToken, productController.deleteProduct);

//category

export = router;
