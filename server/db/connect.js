const mongoose = require("mongoose");

mongoose.connect(process.env.DB).catch((reason) => {
  throw new Error(reason);
});
