const jwt = require("jsonwebtoken");


function adminmiddleware(req, res, next){
    const token = req.header.token;
    const decode = jwt.sign(token, process.env.JWT_SECRET_ADMIN);
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
    adminmiddleware:adminmiddleware
}