var counter = function(arr_param){
    return 'there are ' + arr_param.length + ' elements in this array';
}

module.exports = counter;

var counter_pattern = function(arr_param){
    return 'there are ' + arr_param.length + 'elements in this array (inside counter_pattern)';
}

var cube = function(a,b,h){
    return `the cube of these three numbers is equal ${a*b*h}`;
};

var adder =  function(a,b,c){
    return `the sume of three numbers is ${a+b+c}`;
}

module.exports.counter_pattern = counter_pattern;
module.exports.adder = adder;
module.exports.cube = cube;

