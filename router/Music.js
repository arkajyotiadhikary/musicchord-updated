const router = require("express").Router();
const { yt_audio } = require("../controllers/Music");

router.route("/:songId").get(yt_audio);

module.exports = router;
