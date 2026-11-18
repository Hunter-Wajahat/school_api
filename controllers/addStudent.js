import Students from "../models/studentSchema.js";

async function addStudent(req, res) {
    try {

        const {studentName, className, subjectName} = req.body;
        const student = new Students({
            studentName: studentName, 
            studentClass: className, 
            studentSubject: subjectName
        })

        await student.save();

        res.json({message: "student created!", status: 200})
    } catch (error) {
        res.json({message: "there is an error while creating student", status: 500})
    }
}

export default addStudent;