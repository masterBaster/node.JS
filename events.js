const eventemitter = require('events');
const util = require('util');

class MyEmitter extends eventemitter {
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

util.inherits(BasketBallPlayers, eventemitter.EventEmitter);
const james = new BasketBallPlayers('James', 'Harden', 30);
const chris = new BasketBallPlayers("Chris", 'Paul', 29);
const kevin = new BasketBallPlayers('Kervin', 'Durant', 30);

const best_players = [james, chris, kevin];

best_players.forEach(players => {
    players.on('play_hard', function(mssg){
        console.log(players.name + ' said ' + mssg)
    })
});

james.emit('play_hard', 'inside mssg param');

//ES6

class Person extends eventemitter {
    write(name) {
        this.emit('say_name', name);
    }
}

const marry = new Person();

marry.on('say_name', (name) => {
    console.log(`she's name: ${name}`);
})

marry.write('marry');