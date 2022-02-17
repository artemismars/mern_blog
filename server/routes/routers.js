const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const avatar = require("../middleware/avatar");

// 기본
router.get("*", auth.tokenVerification, require("./home"));

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
router.post("/login", auth.authenticateUser, require("./login"));

//content router
router.use("/content", require("./content"));
module.exports = router;
