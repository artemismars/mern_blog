const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const avatar = require("../middleware/avatar");
// router working
router.post(
  "/signup",
  auth.generateConfirmationCode,
  auth.sendEmailVerification,
  avatar.gitAvatarGenerator,
  require("./signup")
);
router.get("/confirm/:confirmationCode", auth.verifyUser);
router.post("/signin", require("./signin"));

module.exports = router;
