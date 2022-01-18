const User = require("../models/SignUpModel");

export const Update = async (req, res) => {
    const { username, about, old_password, password } = req.body;
};
