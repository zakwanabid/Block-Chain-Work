var express = require("express");
var app = express();
var port = 3000;


app.get('/', function(req, res){
    res.send(`<center><b><h1> "Welcome to My Web Page" </h1></b></center>`)
});

app.get('/aboutus', function(req, res){
    res.send(`<center><b><h2> "This is Zakwan Abid" <br> " Studying BS in CS" </h2></b></center>`)
});

app.get('/Register', function(req, res){
    res.send(`<center><b><h1> "If you want to login first Register Yourself" </h1></b></center>`)
});

app.get('/contact', function(req, res){
    res.send(`<center><b><h1> "If you have any querry feel free to contact me at <br> abc@gmail.com " </h1></b></center>`)
});

app.listen(port, () => {
    console.log(`Example App Listening Port on ${port}!`);
});

