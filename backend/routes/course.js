const { Router } = require("express");
const courseRouter = Router();

const { courseModel, purchaseModel } = require("../db");
const { usermiddleware } = require("../middleware/user");



courseRouter.post("/purchase", usermiddleware, async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await courseModel.create({
        userId,
        courseId,
    });

    res.json({
        message: "You have purchase successfully!!"
    })

})

courseRouter.get("/preview", async (req, res) => {
    const courses = await courseModel.find({});

    res.json({
        courses: courses
    })
})


module.exports = {
    courseRouter: courseRouter
}
