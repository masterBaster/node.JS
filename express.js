var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body)
    res.render('contact-success', {data: req.body});
});

app.get('/homepage', function(req, res){
    res.render('index');
});

app.get('/profile/:name', function(req, res){
    let data = { age: 29, job: 'progremmmer', hobbies: ['fishing', 'playing basketball', 'watching tv']};
    res.render('profile', {person: req.params.name, data: data});  
})

app.listen(3000);

