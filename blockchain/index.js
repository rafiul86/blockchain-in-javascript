const SHA256 = require('crypto-js/sha256');

// this is the data that will be stored in the blockchain
const data1 = "Blockchain Rock!";
const dataObj = {
    id : 1,
    name : "John",
    age : 30,
    timing : new Date().getTime()
}

function generateHash(data){
    return SHA256(JSON.stringify(data)).toString();
}

console.log(generateHash(dataObj));