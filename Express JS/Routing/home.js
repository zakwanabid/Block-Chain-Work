const express  = require("express")
const router = express.Router()

router.get('/', function (req, res) {
   // res.write(`<center><h1> Home Page </h1></center>`)
    res.send(`<center><h1> Home Page </h1><hr><br><h1> This is Zakwan Abid </h1> <br> <h1> Studying BS in Computer Science </h1></center>`)
})

module.exports = router;