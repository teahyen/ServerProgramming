const express = require("express");
const app = express();
// const http = require("http");
// const server = http.createServer(app);

app.set("port", process.env.PORT || 8080);

app.get("/", (req, res, next) => { // next 도 인자로
    // res.send("Install Gentoo"); // 여기서 응답 종료되서 다음이 실행되지 않음
    res.send("Install Gentoo");
    next(); // 다음에 설정된 미들웨어로 요쳥이 넘어가게 함
});

const myLogger = (req, res) => {
    console.log("LOGGED");
};

app.use(myLogger);
app.listen(app.get("port"), () => {
    console.log(`Server is running at port ${app.get("port")}`);
});