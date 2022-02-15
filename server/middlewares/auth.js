console.log(`auth working`);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const User = require("../models/user");

const generateConfirmationCode = async function (req, res, next) {
  // console.log("generateConfirmationCode function working");
  try {
    let user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      user = new User(req.body);
      user.password = bcrypt.hashSync(user.password, 8);
    }
    user.confirmationCode = jwt.sign(
      {
        email: req.body.email,
      },
      process.env.EMAIL_VERIFICATION_SECRET
    );
    res.locals.user = user;
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const sendEmailVerification = (req, res, next) => {
  const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SECRET_USER,
      pass: process.env.SECRET_PASSWORD,
    },
  });

  transport
    .sendMail({
      from: process.env.SECRET_USER,
      to: res.locals.user.email,
      subject: "회원가입을 위한 이메일 인증번호입니다.",
      html: `
    <h1>아래 링크를 클릭해주세요.</h1>
    <a href="http://localhost:${process.env.PORT}/api/confirm/${res.locals.user.confirmationCode}">
    이메일 인증번호 확인 링크
    </a>      
    `,
    })
    .catch((error) => {
      console.log(error);
    });
  next();
};

const verifyUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      confirmationCode: req.params.confirmationCode,
    });
    if (!user) {
      res.status(400).send(`이메일 인증에 실패했습니다.`);
    } else {
      user.status = "Active";
      res.status(200).send(`이메일 인증이 완료되었습니다.`);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const authenticateToken = (req, res, next) => {
  const user = User.findOne({
    email: req.body.email,
  });
  if (!user) {
    res.status(400).send(`가입되지 않은 이메일 계정입니다.`);
  } else {
    res.locals.user;
    next();
  }
};

module.exports = {
  generateConfirmationCode,
  authenticateToken,
  sendEmailVerification,
  verifyUser,
};
