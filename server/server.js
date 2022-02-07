require("dotenv").config();
// convert modes
if (process.env.NODE_ENV === "development") {
  require("./config/development");
} else if (process.env.NODE_ENV === "production") {
  require("./config/production");
}
require("./database/connect");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// server address starts with /api
app.use("/api", require("./routes/login"));

app.listen(PORT, () => {
  console.log(`Listening to port on ${PORT}`);
});
