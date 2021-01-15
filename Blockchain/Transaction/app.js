
let Transaction = require('./transaction')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

let transaction = []

app.get('/',function(req,res){
    console.log("You are in the root Directory");
    res.send(`<center><h1>Block Chain Proof of Work</h2><br><h1>You are in the roor Directory</h1></br><h1>If you want to see Transactions of this block then type in the URL /blockchain</h1></center>`)
 })

//to print transaction on console

app.post('/transaction',function (req,res) {

  console.log(req.body.from);
  console.log(req.body.to);
  console.log(req.body.amount);

  res.end();
})

// to print transaction in the postman

app.post('/transaction',function (req,res) {
  let from = req.body.from
  let to = req.body.to 
  let amount = req.body.amount

  let transactions = new Transaction(from,to,amount)
  transaction.push(transactions)

  res.json(transaction)

 })

