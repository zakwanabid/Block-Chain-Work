const express = require ('express')
const app = express();
const port = 3000;

app.get('/',(req,res) =>{

    console.log("You Are in the root Directory Folder");
    
    var output = `<center><u><b><i><h1 style= "color:blue;"> " Welcome to My Website "</h1></b></i></u></center> <hr>`

    output += `<h2>Choose Options Where you want to Go </h2>`;

    output += `<h2> <a href="home">Home</a> </h2> `;
    output += `<h2> <a href="contact">Contact</a> </h2>`;
    output += `<h2> <a href="about">About</a> </h2>`;
    output += `<h2> <a href="login">Login</a> </h2>`;

    res.send(output)

})

const home = require('./home')
app.use("/home" , home)

const contact = require('./contact')
app.use("/contact" , contact)

const about = require('./about')
app.use("/about" , about)

const login = require('./login')
app.use("/login" , login)

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}!`)
});