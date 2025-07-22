const jwt = require("jsonwebtoken");


function usermiddleware(req, res, next){
    const token = req.headers.token;
    const decode = jwt.verify(token, process.env.JWT_SECRET_USER);
    if(decode){
        req.userId=decode.id;
        next();
    }
    else{
        res.status(403).json({
            message:"You are not signIn"
        })
    }
}

module.exports = {
    usermiddleware:usermiddleware
}