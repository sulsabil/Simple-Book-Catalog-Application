import express from "express";
import { signIn, signup,signOut } from "./userController.js";



const router = express.Router();

router.get("/signOut", signOut)
router.post("/signup", signup);
router.post("/signIn", signIn);

export default router;
