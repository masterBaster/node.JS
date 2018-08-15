console.log('hello world');

setTimeout(function(){
    console.log('inside function 3 sec have passed...');
}, 3000);

var time = 0;

var timer = setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
        if (time > 4){
            clearInterval(timer);
        }
}, 2000);