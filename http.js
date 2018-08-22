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







/*
const server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('everything is okay');
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`server running at port ${port}`);
})
*/