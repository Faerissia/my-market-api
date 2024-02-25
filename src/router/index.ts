import express from "express";
import { check } from "../controllers/check";
import userRouter from "./user";

const router = express.Router();

router.get("/check", check);
router.use("/user", userRouter);

export = router;
