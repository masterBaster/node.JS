const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('welcome to my homepage');
});

app.get('/contact', function(req, res){
    res.send('welcome to my homepage');
});

app.listen(3000);

