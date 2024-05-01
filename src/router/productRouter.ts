import express from "express";
import * as productController from "../controllers/ProductController";
import { validateToken } from "../utilities/validateToken";

const router = express.Router();

router.get("/detail", productController.productDetail);
router.post("/create", validateToken, productController.createProduct);

export = router;
