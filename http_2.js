const http = require('http');
const fs = require('fs');

const MyReadStream = fs.createReadStream(__dirname + '/readMe.txt');
const MyWriteStream = fs.createWriteStream(__dirname = '/writeStream.txt');

MyReadStream.on('readable', () => {
    console.log(`readable: ${MyReadStream.read()}`);
});
