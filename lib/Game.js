const Meteors = require('./Meteors.js');
const Cannon = require('./Cannon.js')

module.exports = class Game {
	constructor(context, width, height, array) {
		this.meteors = new Meteors(5, 5);
		this.cannon = new Cannon();
		this.width = width;
		this.height = height;
		this.context = context;
		this.array = array;
	}

	gameLoop() {
		this.context.clearRect(0, 0, this.width, this.height); 

		this.cannon.draw(this.context);
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