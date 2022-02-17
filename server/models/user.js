const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  avatar: {
    type: Object,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  confirmationCode: {
    type: String,
    unique: true,
  },
  accessToken: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.index(
  { createdAt: 1 },
  {
    expires: "5m",
    partialFilterExpression: {
      isVerified: false,
    },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
