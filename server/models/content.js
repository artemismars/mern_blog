const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = mongoose.Schema(
  {
    username: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
      minlength: 1,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
    File: {
      type: String,
    },
    creatDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", contentSchema);

module.exports = { Content };
