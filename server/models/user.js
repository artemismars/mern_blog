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
  status: {
    type: String,
    enum: ["Pending", "Active"],
    default: "Pending",
  },
  confirmationCode: {
    type: String,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
