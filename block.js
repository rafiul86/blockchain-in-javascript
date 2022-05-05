 const SHA256 = require('crypto-js/sha256');

 
  // Class with a constructor for block 
  
 class Block {
 
     constructor(data){
         this.id = 0;
         this.nonce = 147570;
         this.body = data;
         this.hash = "";
     }
     
     
       generateHash() {

           // Using this to create a temporary reference of the class object
           let self = this;
           let hash = SHA256(self.body + self.nonce ).toString();
                self.hash = hash;
                self.id += 1;
           const promise = new Promise((resolve, reject) => {
                try{
                
                resolve(self);
                } catch {
                    reject(new Error("Error in generating hash"));
                }
            });
         return promise;
     }
 }
 
 // Exporting the class Block to be reuse in other files
 module.exports.Block = Block;