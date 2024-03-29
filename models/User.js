const mongoose = require("mongoose");

const User = mongoose.Schema({
    username: { type: String, required: true },
    about: { type: String },
    password: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    token: { type: String },
});

module.exports = mongoose.model("User", User);
