const Meteors = require('./Meteors.js');
const Cannon = require('./Cannon.js');
const Missile = require('./Missile.js');

module.exports = class Game {
	constructor(context, width, height, array) {
		this.cannon = new Cannon();
		this.missile = new Missile(this.cannon.center - 5, 550, 10, 10);
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

		this.missile.draw(this.context);

		if(this.missile.isMoving === true) {
			this.missile.move(this.context);
		}

		requestAnimationFrame(this.gameLoop.bind(this));
	}

	startGame() {
		requestAnimationFrame(this.gameLoop.bind(this));
	}

	clicked(mouseX, mouseY) {
		this.cannon.shootMissile(this.missile);
		// this.missile.move(this.context, mouseX, mouseY)
		this.missile.targetX = mouseX;
		this.missile.targetY = mouseY;
		this.missile.setVelocity();
		// console.log(this.missile.targetX);
		// console.log(this.missile.targetY);
	}

};