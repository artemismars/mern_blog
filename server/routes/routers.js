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
// authenticatoinToken 미들웨어에 토큰 생성, 저장, 확인 기능 구현 예정
router.post("/signin", auth.authenticateUser, require("./signin"));

//content router
router.use("/content", require("./content"));
module.exports = router;
