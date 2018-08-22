const http = require('http');
const fs = require('fs');

const MyReadStream = fs.createReadStream(__dirname + '/readMe.txt');
MyReadStream.on('open', () => {
    console.log(`open: ${MyReadStream.read()}`);
});
