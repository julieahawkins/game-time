// Requires
const Game = require('./Game.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const score = document.getElementById('score');
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

startButton.addEventListener('click', function() {
  console.log('click');
  game.startGame();
  this.setAttribute('disabled', true)
});

resetButton.addEventListener('click', function() {
  window.location.reload();
});

function drawStartScreen() {
    context.font = "50px Monospace";
    context.fillStyle = "#0095DD";
    context.fillText("Press Start", 145, 300);
};

drawStartScreen();

