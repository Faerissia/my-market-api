import express from "express";
import { check } from "../controllers/check";
import omiseRouter from "./omise";

const router = express.Router();

router.get("/check", check);
router.use("/omise", omiseRouter);

export = router;
