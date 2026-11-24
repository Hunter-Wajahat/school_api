import { Router } from "express";
import {readStudentData, readStudentList} from "../controllers/readStudents.js";

const publicRouter = Router()

publicRouter.get('/student_data/:id',readStudentData )
publicRouter.get('/student_list', readStudentList)

export default publicRouter;