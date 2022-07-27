const router = require("express").Router();
const { Radio } = require("../controllers/radio");

router.route("/").get(Radio);

module.exports = router;
