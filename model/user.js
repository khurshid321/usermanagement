const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number,
    dob: Date,
    email: String,
    description: String
})
module.exports = mongoose.model("user", userSchema)