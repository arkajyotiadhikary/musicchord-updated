const bcrypt = require("bcrypt");

const saltRounds = 10;

const encrypt = async (data) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedData = await bcrypt.hash(data, salt);
    return hashedData;
};

const decrypt = async (data, hashedData) => {
    const result = await bcrypt.compare(data, hashedData);
    return result;
};

module.exports = {
    encrypt,
    decrypt,
};
