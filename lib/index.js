const Game = require('./Game.js');
const Meteors = require('./Meteors.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const arrayOfMeteors = [];

for (var i = 0; i < 50; i++) {
	arrayOfMeteors.push(new Meteors(5, 5));
}

const game = new Game(context, canvas.width, canvas.height, arrayOfMeteors);

game.startGame();