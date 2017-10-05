// Requires
const Game = require('./Game.js');
const Meteors = require('./Meteors.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');


var mouse = {
	x: undefined,
	y: undefined
}

// Create number of meteors
const arrayOfMeteors = [];
for (var i = 0; i < 50; i++) {
	arrayOfMeteors.push(new Meteors(5, 5));
}

// Creating game
const game = new Game(context, canvas.width, canvas.height, arrayOfMeteors);

// Event listeners
$('#game').on('click', function(event) {
	mouse.x = event.offsetX;
	mouse.y = event.offsetY;
	game.clicked(mouse.x, mouse.y);
});	

game.startGame();
