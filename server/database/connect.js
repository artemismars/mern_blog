const mongoose = require("mongoose");
const DB = process.env.DB;

mongoose.connect(DB).catch((reason) => {
  throw reason;
});
module.exports = mongoose;
