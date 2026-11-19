import { Router } from "express";
import readStudentData from "../controllers/readStudents.js";

const publicRouter = Router()

publicRouter.get('/student_data',readStudentData )

export default publicRouter;