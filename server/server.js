// dotenv 모듈을 이용한 환경변수 설정
require("dotenv").config();
// DB 연결 실행
require("./db/connect");
// 프로덕션 모드 yes or no
if (process.env.NODE_ENV === "production") require("./config/production");
console.log(`${process.env.NODE_ENV} mode on`);

const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening to port on ${PORT}`);
});

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan')
const _ = require('lodash')

app.use(fileUpload({
    createParentPath: true
}));

// 미들 웨어 추가
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/content', require('./routes/content'));
app.use('/contentup', require('./routes/contentup'));
