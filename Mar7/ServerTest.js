var http = require("http");
var count = 0;
var server = http.createServer((req, res) => {
    console.log("Hit!");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`you are visitor: ${++count}`);
});

server.listen(8080, () => {
    console.log("Server listening on port 8080");
});
