const express = require("express");
const router = express.Router();
const { Content } = require("../models/content");
const { auth } = require("../middleware/auth");
const multer = require("multer");

//create (수정예정)
router.post("/publish", (req, res) => {
  const content = new Content(req.body);

  content.save((err, content) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

//메인페이지
router.get("/", async (req, res) => {
  try {
    const contents = await Content.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//디테일페이지
router.get("/:num", async (req, res) => {
  try {
    const { num: _id } = req.params;
    const content = await Content.findById(_id);
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//삭제
router.delete("/delete/:num", async (req, res) => {
  const { num: _id } = req.params;
  try {
    const deleteContent = await Content.findByIdAndRemove(_id);
    res.status(200).json(deleteContent);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
