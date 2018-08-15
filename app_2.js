console.log(__dirname);
console.log(__filename);

function say_hello(){
    console.log('hello world');
}
say_hello();

function callfunction(fun){
    fun();
}

//say_hello function as a paremeter

callfunction(say_hello);

//function expression

let say_hi = function(){
    console.log('say hi');
}
say_hi();

let say_bye = function(parameter){
    console.log(parameter);
}
say_bye('say good bye');

const counter = require('./app_3.js');
console.log(counter.counter(['yell', 'crystal']));

const Square = require('./app_4.js');
const mySquare = new Square(5);
console.log(`the area of mySquare is ${mySquare.area()}`);

