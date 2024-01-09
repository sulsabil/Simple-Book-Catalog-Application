import express from "express";
import { signIn, signup,signOut } from "./userController.js";
import { verifyToken } from "../middleware/JWT.js";
// import {  refreshToken } from "../middleware/JWT.js";

const router = express.Router();

router.get("/signOut",verifyToken, signOut)
router.post("/signup", signup);
router.post("/signIn", signIn);

export default router;
