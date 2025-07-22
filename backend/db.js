const mongoose = require("mongoose");
const { Schema } = mongoose;

const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
})


const AdminSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
})


const CoursesSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})


const PurchaseSchema = new Schema({
    courseId: ObjectId,
    userId: ObjectId
})


const userModel = mongoose.model("user", UserSchema);
const adminModel = mongoose.model("admin", AdminSchema);
const courseModel = mongoose.model("course", CoursesSchema);
const purchaseModel = mongoose.model("purchases", PurchaseSchema);

module.exports = {
    userModel:userModel,
    adminModel:adminModel,
    courseModel:courseModel,
    purchaseModel:purchaseModel
}