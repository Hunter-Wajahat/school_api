import mongoose from "mongoose";
const { Schema } = mongoose;

const StudentSchema = new Schema({
    studentName: String,
    studentClass: String,
    studentSubject: String
});

const Students = mongoose.model('Student-data', StudentSchema);

export default Students;