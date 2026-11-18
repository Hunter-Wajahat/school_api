import jwt, { decode } from "jsonwebtoken"
import Admin from "../models/adminSchema.js";

async function verifyCookie(token) {
    try {
        const decoded = jwt.verify(token, process.env.jwt_secret, {
            algorithms: ['HS256'],
        });

        const adminCred = await Admin.find({password: decoded.password})

        if(adminCred.password !== decode.password){
            return 401
        }
        
        return decoded
        
    } catch (err) {
        console.log("error while verifying token: ", err)
        return false
    }

}

export default verifyCookie;