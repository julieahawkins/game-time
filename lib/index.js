const Game = require('./Game.js');
const Meteors = require('./Meteors.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');



const arrayOfMeteors = [];

for (var i = 0; i < 1000; i++) {
	arrayOfMeteors.push(new Meteors(10, 10));
}

const game = new Game(context, canvas.width, canvas.height, arrayOfMeteors);

game.startGame();