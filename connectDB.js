import mongoose from "mongoose";


async function ConnectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/School-data")
        console.log("database connected successfully!!!✅")
    } catch (error) {
        console.log("❌there is an error while connecting to database: ", error)
    }
}

export default ConnectDB