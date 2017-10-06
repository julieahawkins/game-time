const Cannon = require('./Cannon.js');

module.exports = class Game {
	constructor(context, width, height, array) {
		this.cannon = new Cannon();
		this.width = width;
		this.height = height;
		this.context = context;
		this.array = array;
	}

	gameLoop() {
		this.context.clearRect(0, 0, this.width, this.height); 
		
		//draws cannon
		this.cannon.draw(this.context);
		
		//draws and moves meteors 
		for (var i = 0; i < this.array.length; i++) {
			this.array[i].draw(this.context);
			this.array[i].move();		
		}
		
		//draws and moves missiles 
		if (this.cannon.hasAmmo === true ) {
			for (var i = 0; i < this.cannon.array.length; i++) {
			this.cannon.array[i].draw(this.context);
			}
			this.cannon.array[0].move(this.context);
		}

		requestAnimationFrame(this.gameLoop.bind(this));
	}

	startGame() {
		requestAnimationFrame(this.gameLoop.bind(this));
		this.cannon.populateMissiles();
	}

	clicked(mouseX, mouseY) {
		this.cannon.hasAmmo = true; 
		this.cannon.array[0].targetX = mouseX;
		this.cannon.array[0].targetY = mouseY;
		this.cannon.array[0].setVelocity();
		// this.cannon.shootMissile();
		// this.cannon.array[0].isMoving = true; 
		// console.log(this.cannon.array[0].targetX);
		// console.log(this.cannon.array[0].targetY);
	}

};