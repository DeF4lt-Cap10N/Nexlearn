const {Router} =  require("express");
const userRouter = Router();
const bcrypt = require("bcrypt");
const {userModel} = require("../db");



userRouter.post("/signup", async(req, res) => {
    const {email, password, firstName, lastName} = req.body;

    const hashPass =await bcrypt.hash(password, 5);

    await userModel.create({
        email:email,
        password:hashPass,
        firstName:firstName,
        lastName:lastName
    })


    res.json({
        messsage:"User signup succesfully",
        password:hashPass
    })

})

userRouter.post("/signin", (req, res) => {

})

userRouter.get("/purchases", (req, res) => {

})


module.exports={
    userRouter:userRouter
}