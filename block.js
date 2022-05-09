 const SHA256 = require('crypto-js/sha256');

 
  // Class with a constructor for block 
  
 class Block {
 
     constructor(data){
         this.id = 0;
         this.nonce = 147570;
         this.body = data;
         this.hash = "";
         this.PreviousHash = "";
     }
    }
     

    class BlockChain {
        constructor(){
            this.chain = [];
            this.addBlock(new Block("Genesis Block"));
        }

        addBlock(newBlock){
            newBlock.id = this.chain.length + 1;
            newBlock.hash = SHA256(JSON.stringify(newBlock.data)).toString();
            newBlock.PreviousHash = this.chain.PreviousHash > 0 ? this.chain[this.chain.length - 1].hash : "";
            this.chain.push(newBlock);
        }
    }

 
 // Exporting the class Block to be reuse in other files
 module.exports.Block = BlockChain;