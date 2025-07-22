const { Router } = require("express");
const userRouter = Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();
const { userModel, purchaseModel } = require("../db");
const { usermiddleware } = require("../middleware/user");



userRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const hashPass = await bcrypt.hash(password, 5);

    try {
        await userModel.create({
            email: email,
            password: hashPass,
            firstName: firstName,
            lastName: lastName
        })
    }
    catch (err) {
        console.log(`error in db : ${err}`)
    }



    res.json({
        messsage: "User signup succesfully",
        password: hashPass
    })

})

userRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const findUser = await userModel.findOne({
        email: email
    })

    const matchPass = bcrypt.compare(password, findUser.password);

    console.log(findUser);

    if (matchPass) {
        const token = jwt.sign({
            id: findUser._id.toString(),
        }, process.env.JWT_SECRET_USER);

        res.json({
            token: token,
            messsage: "login sucessfully"
        })
    }
    else {
        res.json({
            messsage: "admin not find"
        })
    }
})

userRouter.get("/purchases",usermiddleware, async(req, res) => {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId
    });

    if(purchases){
        res.json({
            purchases
        })
    }
    else{
        res.json({
            messsage:"you have not purchase any course yet!!"
        })
    }
})


module.exports = {
    userRouter: userRouter
}