var express = require("express");
var app = express();
var port = 3000;

app.use(login)

app.get('/', (req, res) => { 
    console.log(" You are in homepage")  
    res.send('<h1>Hello World!, This is my Homepage</h1>') 
}); 

app.get('/about',(req, res) =>{
    res.send("Welcome to the about page")
    console.log("You are in about page ");
})

app.get('/registration',(req,res)=>{
    res.send([{
        name : "Zakwan",
        dept: " computer sciencec"
    },
    {
        name : "Moiz",
        dept: " computer sciencec"
    },
    {
        name : "Yousuf",
        dept: " computer sciencec"
    }
])
    
})

function login(req, res, next){
    console.log("login successful")
    next()
}

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })

app.listen(port, () => {
    console.log(`Example App Listening Port on ${port}!`);
});