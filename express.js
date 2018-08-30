var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/contact', function(req, res){
    console.log(req.query)
    res.render('contact');
});

app.get('/homepage', function(req, res){
    res.render('index');
});

app.get('/profile/:name', function(req, res){
    let data = { age: 29, job: 'progremmmer', hobbies: ['fishing', 'playing basketball', 'watching tv']};
    res.render('profile', {person: req.params.name, data: data});  
})

app.listen(3000);

