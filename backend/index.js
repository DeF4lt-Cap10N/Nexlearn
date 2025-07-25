const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")

const PORT = process.env.PORT || 3001;

const DATABASE = process.env.MONGODBURI;


app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

app.get("/api/v1", (req, res) => {
    res.send("hello boys");
})

async function main() {
    await mongoose.connect(process.env.MONGODBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Db connected!")
        })

    app.listen(PORT, () => {
        console.log(`server running on ${PORT}`)
    });

}

main();