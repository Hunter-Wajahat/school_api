import Students from "../models/studentSchema.js";

async function readStudentData(req, res) {
    try {
        
        const {id} = req.params;
        const specialChars = /[@#$%&*~?]/;
    
        // const hasSpecialChar = specialChars.test(studentName)
    
        const studentData = await Students.find({_id:id})
        res.json({student_data: studentData})
    } catch (err) {
        res.status(500).json({message: "there is an error while reading data!", error: err})
    }
}

async function readStudentList(req, res) {
    try {
        const { page } = req.body;

         const limit = 10;
         const skip = (page -1) *limit;

        console.log("skip: ",skip)
        console.log("page: ", page)

        const studentList = await Students.aggregate([
            {$sort: {_id: 1}},
            {$skip: skip},
            {$limit: limit}
        ])

        res.status(200).json(studentList)
    } catch (err) {
        res.status(500).json({message: "There is an error while retrieving student list", error: err})
    }
}

export {readStudentData, readStudentList};