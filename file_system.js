var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);
fs.writeFileSync('writeMe.txt', readMe);

fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data);
});
console.log('test');

//ES6

fs.readFile('readMe.txt', 'utf8', (data) => {
    fs.writeFile('wiriteMeAsync.txt', data, (error) => {
        if (error) throw err;
        console.log('The file has been saved') || fs.unlink('writeMe.txt');
    });
});