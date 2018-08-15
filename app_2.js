console.log(__dirname);
console.log(__filename);

function say_hello(){
    console.log('hello world');
}
say_hello();

//function expression

let say_hi = function(){
    console.log('say hi');
}
say_hi();

let say_bye = function(parameter){
    console.log(parameter);
}
say_bye('say good bye');