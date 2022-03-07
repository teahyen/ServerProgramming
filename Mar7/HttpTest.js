const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" });
    res.write("<h1>Node.js 로 만든 서버</h1><br/><h2>Install Gentoo</h2>");
    res.end("<p>리눅스 최고</p>"); // 응답 여기까지라고 알려줘야함 (그러면 무한로딩 사라짐)
    
}).listen(8080, () => {
    console.log("Server running on port 8080");
});

// 시작 후 listening 시
server.on("listening", () => {
    console.log("Listening on port 8080");
});

// 클라 req 할 시
server.on("request", () => { 
    console.log("req");
});

// error event listener
server.on("error", (error) => { 
    console.log(error);
});