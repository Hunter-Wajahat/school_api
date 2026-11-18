import Admin from "../models/adminSchema.js";
import jwt from "jsonwebtoken";
import encode_to_jwt_token from "../modules/jwtEncryption.js";

async function AdminAuth(req, res) {
        const { username, password } = req.body;

    console.log("the body:", req.body)
    try {
        // if there is something wrong into the incoming data
        if (!username) {
            res.json({ message: "invalid username or password", status: 401 })
        }

        const adminData = await Admin.findOne({ username: "wajahat" })
        console.log(adminData)

        // if password is wrong 
        if (password !== adminData.password) {
            res.json({ message: "invalid credentials", status: 401 })
        }

        //if the password matches
        if (password == adminData.password) {
            const adminTokenData = {
                username: username,
                password: password
            }

            const encodeData = await encode_to_jwt_token(adminTokenData)
            console.log("the encoded data: ", encodeData)
            res.cookie("admin_cookie", encodeData, {
                httpOnly: true,
                secure: true,
                sameSite: 'none',
                path:'/'
            }).json({message: "cookie sent successfully.", status:200})
        }

    } catch (error) {

        res.json({ status: 500, message: "there is an error while login" })
        console.log("there is an error while authanicating admin: ", error)

    }

}

export default AdminAuth;