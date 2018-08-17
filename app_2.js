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

const counter_pattern = require('./app_3.js')
console.log(counter_pattern.counter_pattern(['yell', 'crystal', 'yoshi']));

const adder = require('./app_3.js');
console.log(adder.adder(1,2,3));

const cube = require('./app_3.js');
console.log(cube.cube(1,5,6));

//working with particular object using differnt types of method

const mathematic = require('./app_3.js');
console.log(mathematic.counter_pattern(['youshi', 'moushi', 'yele']));

const Square = require('./app_4.js');
const mySquare = new Square(5);
console.log(`the area of mySquare is ${mySquare.area()}`);
console.log(`the cube of these three numbers equal ${mySquare.cuboid()}`);



