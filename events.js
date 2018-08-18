const EventEmitter = require('events');
const util = require('util');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }     
}

const myEmitter = new MyEmitter();
myEmitter.on('some_event', function(message) {
  console.log(message);
});
myEmitter.emit('some_event', 'message: fire some_event');


const BasketBallPlayers = function(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

util.inherits(BasketBallPlayers, EventEmitter.EventEmitter);
const james = new Person(James, Harden, 30);
const chris = new Person(Chris, Paul, 29);
const kevin = new Person(Kervin, Durant, 30);