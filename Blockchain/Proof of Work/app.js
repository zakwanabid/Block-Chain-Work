// code for output on the website

let Block = require('./block')
let Blockchain = require('./blockchain')
let Transaction = require('./transaction')

const express = require('express')
const app = express()


app.get('/',function(req,res){
    res.send(`<center><h1>Block Chain Proof of Work</h2><br><h1>You are in the roor Directory</h1></br><h1>If you want to see Transactions of this block then type in the URL /blockchain</h1></center>`)
})

app.get('/blockchain',function (req,res){
let transaction = new Transaction('Zakwan','Abid',3000)
let genesisBlock = new Block()

let blockchain = new Blockchain(genesisBlock)
let block = blockchain.getNextBlock([transaction])
blockchain.addBlock(block)

let anotherTransaction = new Transaction('Shahzaib','Abbas',5000)
let block1 = blockchain.getNextBlock([anotherTransaction,transaction])
blockchain.addBlock( block1)

let anotherTransaction2 = new Transaction('Faisal','Abbas',3032)
let block2 = blockchain.getNextBlock([anotherTransaction2,anotherTransaction,transaction])
blockchain.addBlock(block2)

console.log(blockchain);
console.log();
res.json(blockchain)
})

app.listen(8000,function() {
  console.log("server stared on port 8000....")  
})