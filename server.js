const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const initializeSocket = require("./socket");

// Import routes
const authRoutes = require("./router/auth");
const musicRoutes = require("./router/music");

// initialization
dotenv.config();
mongoose.connect(
    process.env.DATABASE_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Database conencted");
    }
);

const app = express();
const server = http.createServer(app);

// ------------------------------------------ socket -----------------------------------------------------
// Socket io connection
initializeSocket(server);

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoutes);
app.use("/music", musicRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build/"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server is running at ${port}`));
