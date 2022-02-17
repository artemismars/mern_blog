const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).catch((reason) => {
  throw new Error(reason);
});
