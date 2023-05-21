const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { encrypt, decrypt } = require("../utils/encrypt");

// Sign In route
// /auth/signin
// Public

const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log(
            "signed in request data- \nEmail::",
            email,
            "\nPassword::",
            password
        );

        const hashedData = await User.findOne({ email });
        if (!hashedData) {
            res.status(400).json({
                msg: "No user found",
            });
            return;
        }

        const decryptedPassword = await decrypt(password, hashedData.password);
        if (!decryptedPassword) {
            res.status(400).json({
                msg: "Password is incorrect",
            });
            return;
        }

        const token = hashedData.token;

        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 2589200000),
            httpOnly: true,
        });
        res.status(200).json({
            msg: "User signed in successfully",
            token,
            username: hashedData.username,
        });
    } catch (error) {
        if (error) console.error("Error signin in", error);
        res.status(500).json({ msg: "Error signing in!!!" });
    }
};

// Sign Up route
// /auth/signup
// Public

const signUp = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        if (!(username && password))
            res.status(401).send("can not pass empty values");

        const hashedPassword = await encrypt(password);
        const user = await User.create({
            username: username,
            password: hashedPassword,
            email: email.toLowerCase(),
        });
        res.status(200).json({ msg: "User signed up successfully" });
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: "7h",
            }
        );
        user.token = token;
        user.save();
    } catch (error) {
        if (error) console.error("Error sigin up", error);
        res.status(500).json({ msg: "Error signing up!!!" });
    }
};

// Sign Up route
// /auth/loadUser
// Public

const loadUser = async (req, res) => {
    const { token } = req.body;
    try {
        const verifiedUser = jwt.verify(token, process.env.JWT_TOKEN_KEY);

        const verifiedUserDetails = await User.findOne({
            email: verifiedUser.email,
        });

        res.status(200).json({
            msg: "User loaded successfully",
            username: verifiedUserDetails.username,
        });
    } catch (error) {
        const err = error.response;
        if (err) console.error("Error loading the user", err);
        res.status(500).json({ msg: "Error loading user!!!" });
    }
};

// Set session
// /auth/session
// Public
var arr = [];
const setSession = async (req, res) => {
    const { token, type, sessionID } = req.body;

    try {
        //NOTE Verify Jwt token
        const verifiedUser = jwt.verify(token, process.env.JWT_TOKEN_KEY);

        //NOTE Fetch user details from DB
        const verifiedUserDetails = await User.findOne({
            email: verifiedUser.email,
        });

        //NOTE If type if join push to session storage in server
        if (type === "join") {
            req.session.cookie.sessionID = uuidv4();
            const userDetails = {
                userId: verifiedUserDetails.id,
                sessionID: req.session.cookie.sessionID,
            };
            req.session.cookie.chatRoom.push(userDetails);
        } else {
            //NOTE Find the index of the session id in the chat room array sent from browser
            const newIndex = req.session.cookie.chatRoom.findIndex(
                (item) =>
                    item.sessionID === sessionID &&
                    item.userId === verifiedUserDetails.id
            );

            //NOTE If the session id is found then remove from chat room arr
            if (newIndex !== -1) {
                req.session.cookie.chatRoom.splice(newIndex, 1);
            }
        }

        //NOTE Send the session cookie to the browser
        res.status(200).json({
            msg: "User loaded successfully",
            data: { ...req.session.cookie },
        });
    } catch (error) {
        // const err = error.response.msg;
        // console.log(err);
        res.status(500).json({ msg: "Error loading user!!!" });
    }
};

module.exports = { signIn, signUp, loadUser, setSession };
