// dotenv 모듈을 이용한 환경변수 설정
require("dotenv").config();
// DB 연결 실행
require("./db/connect");
// 프로덕션 모드 yes or no
if (process.env.NODE_ENV === "production") require("./config/production");
console.log(`${process.env.NODE_ENV} mode on`);

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening to port on ${PORT}`);
});
