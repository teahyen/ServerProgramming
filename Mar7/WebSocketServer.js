const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 48000 }, () => {
    console.log("Server is running on port 48000");
});

wss.on("connection", socket => {
    console.log("New client connected");

    socket.on("message", data => {
        console.log(data.toString());
        socket.send(data + " Echo");
    });

    socket.on("close", data => {
        console.log("Client disconnected");
    });
});


wss.on("listening", () => {
    console.log("Server listening on port 48000");
});