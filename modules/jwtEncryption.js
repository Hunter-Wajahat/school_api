import jwt from "jsonwebtoken"

async function encode_to_jwt_token(data) {
    const jwtSecret = process.env.jwt_secret;
    try {
        if(data){
            
            const encoded = jwt.sign(data, jwtSecret)
        
            return encoded;
        }
    } catch (error) {
        console.log("there is an error while encoding data: ", error)
    }
}

export default encode_to_jwt_token;