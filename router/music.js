const router = require("express").Router();
const { yt_audio } = require("../controllers/music");

router.route("/:songId").get(yt_audio);

module.exports = router;
