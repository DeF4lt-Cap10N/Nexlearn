const { Router } = require("express");
const adminRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { adminmiddleware } = require("../middleware/admin")

const { adminModel, courseModel } = require("../db")


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

    const matchPass = await bcrypt.compare(password, findAdmin.password);

    console.log(findAdmin);

    if (matchPass) {
        const token = jwt.sign({
            id: findAdmin._id.toString(),
        }, process.env.JWT_SECRET_ADMIN);

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

adminRouter.post("/course", adminmiddleware, async (req, res) => {
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    });


    res.json({
        messsage: "course Created",
        courseId: course._id
    })
})

adminRouter.put("/course", adminmiddleware, async (req, res) => {
    const adminId = req.userId;
    const { title, description, imageUrl, price, courseId } = req.body;

    const course = await courseModel.findOneAndUpdate({
        _id: courseId,
        creatorId: adminId
    }, {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
    }, {
        new: true
    });


    if (course) {
        res.json({
            messsage: "course updated",
            courseId: course._id
        })
    }
    else {
        res.json({
            messsage: "course invalid",
        })
    }

})


adminRouter.get("/course/bulk", adminmiddleware, async (req, res) => {
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId
    });

    if (courses) {
        res.json({
            course: courses
        })
    }
    else {
        res.json({
            messsage: "courses are empty!!"
        })
    }

})



module.exports = {
    adminRouter: adminRouter
}