const router = require("express").Router();
const { yt_audio } = require("../Controllers/Music");

router.route("/:songId").get(yt_audio);

module.exports = router;
