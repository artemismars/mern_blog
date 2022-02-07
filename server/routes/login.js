const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/login", async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    // https code 200: OK
    res.status(200).send(user);
  } catch (error) {
    // https code 404: Not Found
    res.status(404).send(`User not found`);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
    await user.save();
    // https code 201: Created
    res.status(201).send(user);
  } catch (error) {
    // https code 500: Internal Server Error
    res.status(500).send(error.message);
  }
});

router.put("/update/password", async (req, res) => {
  try {
    const userObj = await User.updatePassword(req.body);
    await userObj.save();
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
