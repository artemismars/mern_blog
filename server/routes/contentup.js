const express = require('express');
const router = express.Router();
const { Content } = require("../models/content");
const { auth } = require("../middleware/auth");
const multer = require("multer");




router.post("/publish", (req, res) => {

    const content = new Content(req.body)

    content.save((err, content) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true 
        })
    })
});





module.exports = router;
