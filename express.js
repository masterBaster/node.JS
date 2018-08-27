const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send('welcome to my homepage');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});

app.get('/homepage', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/profile/:name', function(req, res){
    let data = { age: 29, job: 'progremmmer', hobbies: ['fishing', 'playing basketball', 'watching tv']};
    res.render('profile', {person: req.params.name, data: data});  
})

app.listen(3000);

