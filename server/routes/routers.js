const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
// router working
router.post(
  "/signup",
  auth.generateConfirmationCode,
  auth.sendEmailVerification,
  require("./signup")
);
router.get("/confirm/:confirmationCode", auth.verifyUser);
router.post("/signin", require("./signin"));

module.exports = router;
