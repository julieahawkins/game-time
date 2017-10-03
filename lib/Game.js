const Meteors = require('./Meteors.js');

module.exports = class Game {
	constructor (context, width, height, array) {
		this.meteors = new Meteors(10, 10);
		this.width = width;
		this.height = height;
		this.context = context;
		this.array = array;
	}

	gameLoop() {
		this.context.clearRect(0, 0, this.width, this.height);
		for (var i = 0; i < this.array.length; i++) {
			this.array[i].draw(this.context);
			this.array[i].move();		
		}		
		requestAnimationFrame(this.gameLoop.bind(this));
	}

	startGame() {
		requestAnimationFrame(this.gameLoop.bind(this));
	}
};