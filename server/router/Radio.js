const router = require("express").Router();
const { Radio } = require("../controllers/Radio");

router.route("/").get(Radio);

module.exports = router;
