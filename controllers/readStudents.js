import Students from "../models/studentSchema.js";

async function readStudentData(req, res) {
    const {id} = req.params;
    const specialChars = /[@#$%&*~?]/;

    // const hasSpecialChar = specialChars.test(studentName)

    const studentData = await Students.find({_id:id})
    res.json({student_data: studentData})
}

export default readStudentData;