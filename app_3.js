var counter = function(arr_param){
    return 'there are ' + arr_param.length + ' elements in this array';
}

module.exports = counter;

//console.log(counter(['first', 'second', 'third']));

var counter_pattern = function(arr_param){
    return 'there are ' + arr_param.length + 'elements in this array (inside counter_pattern)';
}

module.exports.counter_pattern = counter_pattern;