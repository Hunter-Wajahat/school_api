import { Router } from "express";
import adminAuthMiddleware from "../middleware/adminPermission.js";

const admin_router = Router()

admin_router.use(adminAuthMiddleware)

admin_router.get("/read", (req, res)=>{
    res.json({message: "middleware verified successfully"})
})


export default admin_router