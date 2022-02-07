const bcrypt = require("bcryptjs");
const { isEmail } = require("validator");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    validate: [isEmail, "invalid email"],
  },
  username: {
    type: String,
    minlength: 4,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
  },
  password: {
    type: String,
    minlength: [6, "password should be more than 5 characters"],
    select: false,
    required: true,
  },
  created_at: Date,
  updated_at: Date,
});

userSchema.methods.updatePassword = async function (user) {
  const userObj = await User.findOne(user).select("+password");
  if (!userObj.email) throw Error("user not found");

  // check password then update it
  bcrypt.compare(user.password, userObj.password, (err, result) => {
    if (err) throw err;
    if (result) console.log(`correct password`);
    else {
      const salt = bcrypt.genSaltSync(10);
      const encrypted = bcrypt.hashSync(user.password, salt);
      userObj.password = encrypted;
    }
  });
  return userObj;
};

userSchema.pre("save", async function () {
  try {
    const user = await User.findOne(this);
    // check if user already in DB
    if (user) throw new Error("user already exists");

    this.created_at = new Date();
    // encrypt password
    const salt = bcrypt.genSaltSync(10);
    const encrypted = await bcrypt.hash(this.password, salt);
    this.password = encrypted;
  } catch (error) {
    throw error;
  }
});
// model should be after the methods and pre
const User = mongoose.model("User", userSchema);
module.exports = User;
