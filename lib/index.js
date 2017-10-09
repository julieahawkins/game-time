// Requires
const Game = require('./Game.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const mouse = {
	x: undefined,
	y: undefined
};

// Creating game
const game = new Game(context, canvas.width, canvas.height);

// Event listeners
canvas.addEventListener('click', function(event) {
	mouse.x = event.offsetX;
	mouse.y = event.offsetY;
	game.clicked(mouse.x, mouse.y);
});	

game.startGame();