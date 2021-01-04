let sha256 = require("js-sha256")
const Block = require("./Block")

class Blockchain {
    constructor(blueblock){
        this.blocks = []
        this.addblock(blueblock)
    }

    addblock(block)
    {
        if(this.blocks.length == 0){
            block.previoushash = "0000000000000000"
            block.hash = this.generateHash(block)

    }

    this.blocks.push(block)
}
    
    generateHash(block) {

        let hash = sha256(block.key)
        return hash
   }

}

module.exports = Blockchain;

