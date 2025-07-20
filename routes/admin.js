const { Router } = require("express");
const adminRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { adminModel } = require("../db")


adminRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const hashPass = await bcrypt.hash(password, 5);

    await adminModel.create({
        email: email,
        password: hashPass,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        messsage: "admin signup succesfully",
        password: hashPass
    })


})

adminRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const findAdmin = await adminModel.findOne({
        email: email
    })

    const matchPass = bcrypt.compare(password, findAdmin.password);

    console.log(matchPass);

    if (matchPass) {
        const token = jwt.sign({
            id: findAdmin._id.toString(),
        }, process.env.JWT_SECRET);

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

adminRouter.post("/course", (req, res) => {
    res.json({
        messsage: ""
    })
})

adminRouter.put("/course", (req, res) => {
    res.json({
        messsage: ""
    })
})


adminRouter.delete("/course", (req, res) => {
    res.json({
        messsage: ""
    })
})



module.exports = {
    adminRouter: adminRouter
}