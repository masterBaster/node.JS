module.exports.counter = function(arr_param){
    return 'there are ' + arr_param.length + ' elements in this array';
};

module.exports.counter_pattern = function(arr_param){
    return 'there are ' + arr_param.length + 'elements in this array (inside counter_pattern)';
};

module.exports.adder = function(a,b,h){
    return `the cube of these three numbers is equal ${a*b*h}`;
};

module.exports.cube =  function(a,b,c){
    return `the sume of three numbers is ${a+b+c}`;
};


