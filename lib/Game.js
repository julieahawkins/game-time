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
			for (var i = 0; i < this.cannon.missileArray.length; i++) {
				this.cannon.missileArray[i].draw(this.context);
			}
			for (var i = 0; i < this.cannon.firedArray.length; i++) {
				this.cannon.firedArray[i].draw(this.context);
			this.cannon.firedArray[i].move(this.context);
			}
			
		}

		requestAnimationFrame(this.gameLoop.bind(this));
	}

	startGame() {
		requestAnimationFrame(this.gameLoop.bind(this));
		this.cannon.populateMissiles();
	}

	clicked(mouseX, mouseY) {
		this.cannon.hasAmmo = true; 
		// this.cannon.firedArray[0].targetX = mouseX;
		// this.cannon.firedArray[0].targetY = mouseY;
		// this.cannon.firedArray[0].setVelocity();
		this.cannon.shootMissile(this.context, mouseX, mouseY);
		// this.cannon.array[0].isMoving = true; 
		// console.log(this.cannon.array[0].targetX);
		// console.log(this.cannon.array[0].targetY);
	}

};