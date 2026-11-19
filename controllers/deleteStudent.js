import Students from "../models/studentSchema.js";

async function RemoveStudent(req, res) {
    try {

        const {id} = req.params;
    
        if(!id){
            res.status(404).json({message: "ID not sent by the user"})
        }

        const delData = await Students.deleteOne({_id: id})
        console.log("del data: ", delData)
        if(delData.deletedCount == 0){
            res.status(404).json({message: "student not found!"})
            return 404
        }

        res.status(200).json({message: "student Removed Succesfully!"})

    } catch (error) {
        res.status(500).json({message: "there is an error while deleting the data"})
    }
}

export default RemoveStudent