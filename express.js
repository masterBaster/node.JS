const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('welcome to my homepage');
});

app.get('/contact', function(req, res){
    res.send('welcome to my homepage');
});

app.get('/homepage', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/profile/:id', function(req, res){
    res.send('You requested to see a profile with the id of:' + req.params.id);
})

app.listen(3000);

