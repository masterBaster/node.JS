const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }     
}

const myEmitter = new MyEmitter();
myEmitter.on('some_event', function(message) {
  console.log(message);
});
myEmitter.emit('some_event', 'fire some_event');