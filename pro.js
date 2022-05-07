const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data){
        this.hash = "",
        this.nonce = 0,
        this.body = data,
        this.timeStamp = 0,
        this.previousBlockHash = ""
    }
    muName(){
        return this.body
    }
}

/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/ 

class BlockChain {
    constructor(){
        this.chain = []
        this.addBlock("Genesis Block");
        
    }

    addBlock(data){
        let block = new Block(data);
        block.nonce = this.chain.length;
        block.hash = SHA256(JSON.stringify(data)).toString();
        block.previousBlockHash = this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : "";
        block.timeStamp = new Date().getTime();
        this.chain.push(block);
    }
}

let myFirstBlockChain = new BlockChain();
myFirstBlockChain.addBlock("First Block");
myFirstBlockChain.addBlock("Second Block");
myFirstBlockChain.addBlock("Third Block");

console.log(myFirstBlockChain.chain);
