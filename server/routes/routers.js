const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
// router working
router.post("/signup", auth.generateConfirmationCode, require("./signup"));
router.post("/signin", require("./signin"));

module.exports = router;
