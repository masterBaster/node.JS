const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
        const MyReadStream = fs.createReadStream(__dirname + '/readMe.txt');
            MyReadStream.pipe(res);
                setTimeout(() => {
                        console.log('stop writing to writeStream.txt');
                    MyReadStream.unpipe(MyWriteStream);
                        console.log('manually close the file stream')
                    MyWriteStream.end();
                }, 20000);
});

server.listen(port, hostname, () => {
    console.log(`server running at port ${port}`);
});



/*
    const MyReadStream = fs.createReadStream(__dirname + '/readMe.txt');
    const MyWriteStream = fs.createWriteStream(__dirname + '/writeStream.txt');
        MyReadStream.on('data', (chunk) => {
            console.log('new chunk received...');
        MyWriteStream.write(chunk);
}); 
*/
