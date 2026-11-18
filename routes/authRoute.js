import { Router } from "express";
import AdminAuth from "../controllers/adminAuth.js";

const authRouter = Router()

authRouter.post("/login", AdminAuth)

export default authRouter