import Students from "../models/studentSchema.js";

async function readStudentData(req, res) {
    const {studentName} = req.body;
    const specialChars = /[@#$%&*~?]/;

    const hasSpecialChar = specialChars.test(studentName)
    if(hasSpecialChar){
        res.json({message:"there is something wrong in your request"})
    }
    const studentData = await Students.findOne({studentName: studentName})
    res.json({student_data: studentData})
}

export default readStudentData;