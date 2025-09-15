const jwt = require('jsonwebtoken')
    require('dotenv').config()

const requireAuth = (req,res,next) =>{
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET,(err , decodedToken) =>{
            if(err){
                console.log(err.message);
                return res.status(401).json({ message: "Unauthorized" });
                
            }
            else{
                console.log(decodedToken);
                next();
            }
        });
    }
    else{
        return res.status(401).json({ message: "No token provided" });
    }
}

module.exports = {requireAuth};