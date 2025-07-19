const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")

const PORT = (3001, process.env.PORT);
const DATABASE = process.env.MONGODBURI;


app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);


mongoose.connect(DATABASE)
    .then(() => {
        console.log("Db connected!")
    })

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
});