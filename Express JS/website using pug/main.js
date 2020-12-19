const express = require ('express')
const app = express();
var path = require('path')
var pug = require('pug')
const port = 4000;

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });

  app.get("/login", (req, res) => {
    res.render("login", { title: "Login" });
  });


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}!`)
});

