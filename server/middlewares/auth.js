const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
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

module.exports = {
  generateConfirmationCode,
};
