import Students from "../models/studentSchema.js";

async function updateStudent(req, res) {
    try {
        
        const {studentID, updatedName, updatedClass, updatedSubject} = req.body;
        console.log(`id: ${studentID}, \n name: ${updatedName} \n subject: ${updatedSubject} \n class: ${updatedClass}`)
        const updatedStudent = await Students.updateOne(
            {_id:studentID},
            {
                $set:{
                    studentName: updatedName,
                    studentClass: updatedClass,
                    studentSubject: updatedSubject
                }
            }
        )
    
        res.status(200).json({message: "student data updated successfully!"})
    } catch (err) {
        res.status(500).json({message: "there is an error while updating student data", error: err})
    }
}

export default updateStudent