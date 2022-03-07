const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080); // 환경변수 설정
// => app.get("port") returns 8080

app.get("/", (req, res) => {
    // res.send("<h2>Install Gentoo</h2>");
    try {
        res.sendFile(__dirname + "/index.html");
    } catch(e) {
        console.log(e);
    }
});

app.listen(app.get("port"), () => {
    console.log(`Server is running at port ${app.get("port")}`);
});

