const {Router} = require("express");
const adminRouter = Router();
const bcrypt = require("bcrypt");
const {adminModel} = require("../db")


adminRouter.post("/signup", async(req, res)=>{
    const {email, password, firstName, lastName} = req.body;

    const hashPass =await bcrypt.hash(password, 5);

    await adminModel.create({
        email:email,
        password:hashPass,
        firstName:firstName,
        lastName:lastName
    })


    res.json({
        messsage:"admin signup succesfully",
        password:hashPass
    })


})

adminRouter.post("/signin", (req, res)=>{
    res.json({
        messsage:""
    })
})

adminRouter.post("/course", (req, res)=>{
    res.json({
        messsage:""
    })
})

adminRouter.put("/course", (req, res)=>{
    res.json({
        messsage:""
    })
})


adminRouter.delete("/course", (req, res)=>{
    res.json({
        messsage:""
    })
})



module.exports = {
    adminRouter:adminRouter
}