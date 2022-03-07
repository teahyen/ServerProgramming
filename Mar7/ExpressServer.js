const express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.send("Install Gentoo");
});

app.get("/user/:id", (req, res) => {  // : 뒤가 파라미터가 됨, */user/Han 하면 Han 이 id
    var dummyData = {
        userid: req.params["id"],
        username: "Han",
        wins: 1,
        coins: 2,
        losses: -1,
        someArray: [
            { name: "item1", value: 2 },
            { name: "item2", value: 3 },
            { name: "item3", value: 100 }
        ]
    };

    res.json(dummyData);
});

app.listen(46000, () => {
    console.log("Server is running on port 46000");
});