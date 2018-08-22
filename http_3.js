const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
        const MyReadStream = fs.createReadStream(__dirname + '/index.html');
            MyReadStream.pipe(res);
});

server.listen(port, hostname, () => {
    console.log(`server running at port ${port}`);
});

