import express from "express";
import { check } from "../controllers/default";

const router = express.Router();

router.get("/check", check);

export = router;
