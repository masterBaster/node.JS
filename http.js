const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('everything is okay');
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`server running at port ${port}`);
})