import express from "express";
import { check } from "../controllers/check";
import userRouter from "./userRouter";
import productRouter from "./productRouter";

const router = express.Router();

router.get("/check", check);
router.use("/user", userRouter);
router.use("/product", productRouter);

export = router;
