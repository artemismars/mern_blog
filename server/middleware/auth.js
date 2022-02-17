const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const User = require("../models/user");

const generateConfirmationCode = async function (req, res, next) {
  console.log(`middleware/auth.js working`);
  console.log("generateConfirmationCode function working");
  try {
    let user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      });
      user.password = bcrypt.hashSync(user.password, 8);
      user.confirmationCode = jwt.sign(
        {
          email: req.body.email,
        },
        process.env.EMAIL_VERIFICATION_SECRET,
        {
          expiresIn: "5m",
        }
      );
      await user.save();
      res.locals.user = user;
      next();
    } else {
      res.status(200).json(`이미 회원가입된 이메일 계정입니다.`);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const sendEmailVerification = (req, res, next) => {
  console.log(`sendEmailVerification working`);

  if (res.locals.user.isVerified != true) {
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
  }
  next();
};

const verifyUser = async (req, res, next) => {
  try {
    console.log(`verifyUser working`);

    const token = req.params.confirmationCode;
    jwt.verify(token, process.env.EMAIL_VERIFICATION_SECRET, (err, decoded) => {
      if (err) throw Error(err.name);
    });
    const user = await User.findOne({
      confirmationCode: req.params.confirmationCode,
    });
    if (!user) {
      res.status(400).json(`이메일 인증에 실패했습니다.`);
    } else if (user.isVerified != true) {
      user.isVerified = true;
      await user.save();
      res.status(200).json(`이메일 인증이 완료되었습니다.`);
    } else if (user.isVerified == true)
      res.status(400).json(`이미 인증 완료된 계정입니다.`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const authenticateUser = (req, res, next) => {
  const user = User.findOne({
    email: req.body.email,
  });
  if (!user) {
    res.status(400).json(`가입되어 있지 않은 이메일 계정입니다.`);
  }
  if (user.isVerified == true) {
    const isMatched = bcrypt.compareSync(req.body.password, user.password);
    if (isMatched) {
      console.log(user);
    }
    next();
  } else {
    res.status(400).json(`이메일 인증을 완료하지 않은 계정입니다.`);
  }
};

module.exports = {
  generateConfirmationCode,
  authenticateUser,
  sendEmailVerification,
  verifyUser,
};
