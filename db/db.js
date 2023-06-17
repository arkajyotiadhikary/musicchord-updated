const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectToDB = async () => {
    dotenv.config();
    mongoose.connect(
        process.env.DATABASE_URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => {
            console.log("Database conencted");
        }
    );
};

module.exports = connectToDB;
