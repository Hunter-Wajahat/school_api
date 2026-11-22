import { Router } from "express";
import adminAuthMiddleware from "../middleware/adminPermission.js";
import addStudent from "../controllers/addStudent.js";
import updateStudent from "../controllers/updateStudent.js";
import RemoveStudent from "../controllers/deleteStudent.js";

const admin_router = Router()

admin_router.use(adminAuthMiddleware)

admin_router.get("/read", (req, res)=>{
    res.json({message: "middleware verified successfully"})
})

//POST requests
admin_router.post('/create_student', addStudent)
admin_router.post('/update_student', updateStudent)

// Delete Requests
admin_router.delete('/rm/:id', RemoveStudent)

export default admin_router