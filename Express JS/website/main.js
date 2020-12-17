var express = require("express");
var app = express();
var port = 5000;

app.use(express.static("./"));

app.listen(port, () => {
    console.log(`Example App Listening Port on ${port}!`);
});

