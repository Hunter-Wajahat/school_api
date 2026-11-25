import verifyCookie from "../modules/jwtVerification.js";


async function adminAuthMiddleware(req, res, next) {
    try {
        
        const token = req.cookies?.admin_cookie;
        
        if (!token) {
            res.json({message: "token not found!", status: 404})
            return 404
        }
        
        const verified = await verifyCookie(token)
        console.log("decoded: ", verified)
        
        if(verified == 401){
            res.json({message: "unautharized access!", status: 401})
        }

        if(!verified){
            console.log("verification log: ", verified)
            res.json({message: "error while verifying the cookie", status: 500})
        }
        next()
    } catch (err) {
        res.json({message:"error while authanticating the user", error: err, status: 500 })
    }
    }

export default adminAuthMiddleware;