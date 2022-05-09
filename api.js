const express = require('express');

const app = express();
const fs = require('fs');
// import blockchain from './blockchain';
const BlockClass = require('./block.js');

const block = new BlockClass.Block("Genesis Block");



app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/product', (req, res) => {
   res.send('Hodl4Gold total 180 - 250 BNB');
})

app.post('/product', (req, res) => {
    
    let data = "First Block";
    block.addBlock(data).then((result) => {
        console.log(`Block Hash: ${result.hash}`);
        console.log(`Block: ${JSON.stringify(result)}`);
    }).catch((error) => {console.log(error)});
    
    console.log(block.chain)
    
    
})

const port = 3300
app.listen(port, () => {console.log(`Example app listening on port ${port}`)});