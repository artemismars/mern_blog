const express = require('express');
const router = express.Router();
const { Content } = require("../models/content");
const { auth } = require("../middleware/auth");
const multer = require("multer");


router.post('/upload', async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: '파일 업로드 실패'
            });
        } else {
            let f = req.files.uploadFile;
            f.mv('./uploads/' + f.name);
            res.send({
                status: true,
                message: '파일이 업로드 되었습니다.',
                data: {
                    name: f.name,
                    minetype: f.minetype,
                    size: f.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
})

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
