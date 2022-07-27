const User = require("../models/User");

export const Update = async (req, res) => {
    const { email, username, about, old_password, password } = req.body;
    console.log(
        "Recived Updated data",
        username,
        about,
        old_password,
        password
    );

    try {
        const hashedData = await User.findOne({ email });
        console.log("hashed data", hashedData);
    } catch (error) {}
};
