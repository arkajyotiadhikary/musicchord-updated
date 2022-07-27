const router = require("express").Router();
const { signIn, signUp, loadUser, setSession } = require("../controllers/auth");

router.route("/signin").post(signIn);
router.route("/signup").post(signUp);
router.route("/loaduser").post(loadUser);
router.route("/session").post(setSession);

module.exports = router;
