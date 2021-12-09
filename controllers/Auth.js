const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const User = require("../Models/SignUpModel");
const { encrypt, decrypt } = require("../Utils/encrypt");

// Sign In route
// /auth/signin
// Public

const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const hashedData = await User.findOne({ email });

        const decryptedPassword = await decrypt(password, hashedData.password);

        if (!decryptedPassword) {
            res.status(400).json({
                msg: "Either email or password is wrong, please check and type it correctly",
            });
        }

        const token = jwt.sign({ email }, process.env.JWT_TOKEN_KEY, {
            expiresIn: "2h",
        });

        res.status(200).json({
            msg: "User signed in successfully",
            token,
            username: hashedData.username,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error signing in!!!" });
    }
};

// Sign Up route
// /auth/signup
// Public

const signUp = async (req, res) => {
    try {
        const hashedPassword = await encrypt(req.body.password);

        await User.create({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email.toLowerCase(),
        });

        res.status(200).json({ msg: "User signed up successfully" });
    } catch (error) {
        console.log(error);
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
        console.log(err);
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
