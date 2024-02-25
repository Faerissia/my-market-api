import express from "express";
import * as userController from "../controllers/userController";
import { validateToken } from "../utilities/validateToken";

const router = express.Router();

router.get("/check", userController.check);
router.post("/register", userController.register);
router.post("/login", userController.login);

export = router;
