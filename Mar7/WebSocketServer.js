const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: process.env.PORT || 48000 }, () => {
    console.log("Server is running on port 48000");
});

wss.on("connection", socket => {
    console.log("New client connected");
    socket.send("Install Gentoo");

    socket.on("message", data => {
        console.log(data.toString());
        socket.send("Client: %s", data);
    });

    socket.on("close", data => {
        console.log("Client disconnected");
    });


    socket.interval = setInterval(() => { // 서버 시작과 동시에 계속 실행함 (클라이언트 없어도)
        if (socket.readyState == socket.OPEN) { // 연결이 성사된 소켓에게만 보내줌
            socket.send("INSTALL GENTOO");
        }
    }, 3000);
});


wss.on("listening", () => {
    console.log(`Server listening on port ${process.env.PORT || 48000}`);
});