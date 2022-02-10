const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signup", async (req, res) => {
  try {
    // 유저 인스턴스 생성
    const user = new User(req.body);
    // user.js에서 userSchema.pre() 메소드를 이용하여 이메일 검사, 비밀번호 암호화, 이메일 인증 코드 전송 후 DB에 저장
    await user.save();
    res.status(202).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
