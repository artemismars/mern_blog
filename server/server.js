// dotenv 모듈을 이용한 환경변수 설정
require("dotenv").config();
// DB 연결 실행
require("./db/connect");
// 프로덕션 모드 yes or no
if (process.env.NODE_ENV === "production") require("./config/production");
else process.env.PORT = 8080;
console.log(`${process.env.NODE_ENV} mode on`);

const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", require("./routes/routers"));

app.listen(PORT, () => {
  console.log(`listening to port on ${PORT}`);
});