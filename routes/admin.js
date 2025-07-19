const {Router} = require("express");
const adminRouter = Router();


adminRouter.post("/signup", (req, res)=>{
    res.json({
        messsage:""
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