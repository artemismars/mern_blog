const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const avatar = require("../middleware/avatar");
// user router
router.post(
  "/signup",
  auth.generateConfirmationCode,
  auth.sendEmailVerification,
  avatar.gitAvatarGenerator,
  require("./signup")
);
router.get("/confirm/:confirmationCode", auth.verifyUser);
router.post("/signin", require("./signin"));

//content router
router.use("/content", require("./content"));
module.exports = router;
