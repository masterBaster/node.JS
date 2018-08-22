const http = require('http');
const fs = require('fs');

const MyReadStream = fs.createReadStream(__dirname + '/readMe.txt');
MyReadStream.on('readable', function(chunk){
    while (chunk = this.read()){
        console.log(chunk);
        console.log(`Received ${chunk.length} bytes of data.`);
    }
});
MyReadStream.on('end', () => {
    console.log('there are no more data.');
});

