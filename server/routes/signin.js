const User = require("../models/user");

const signin = async (req, res) => {
  const user = User.findOne({
    email: req.body.email,
  });
  if (user.status != "Active") {
    res.status(401).send({
      message:
        "이메일 인증이 완료되지 않았습니다. 이메일 인증을 완료 후 다시 접속해주세요.",
    });
  }
};

module.exports = signin;