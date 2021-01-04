let Block = require("./Block");
let Blockchain = require("./Blockchain")
let Transaction = require("./Transaction")

let trans = new Transaction("Zakwan","Abid",300);
let block = new Block();

block.addtrans(trans);
let blockchain = new Blockchain(block)

console.log(blockchain)