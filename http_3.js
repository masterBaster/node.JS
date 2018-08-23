const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if(req.url === '/api/players'){
        const players = [
            {name: 'James', age: 28}, 
            {name: 'Tom', age: 24}
    ]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(players));
};

});

server.listen(port, hostname, () => {
    console.log(`server running at port ${port}`);
});

