const Cannon = require('./Cannon.js');
const Meteors = require('./Meteors.js');
const Explosion = require('./Explosion.js'); 


module.exports = class Game {
	constructor(context, width, height) {
		this.cannon = new Cannon();
		this.width = width;
		this.height = height;
		this.context = context;
		this.meteorArray = [];
		this.explosionArray = []; 
	}

	gameLoop() {
		this.context.clearRect(0, 0, this.width, this.height); 
		
		//draws cannon
		this.cannon.draw(this.context);

		
		//draws and moves meteors 
		for (let i = 0; i < this.meteorArray.length; i++) {
			this.meteorArray[i].draw(this.context);
			this.meteorArray[i].move();	
			if (this.meteorArray[i].hasArrived === true) {
				this.meteorArray.splice(i, 1);
			}	
		}
		
		//draws and moves missiles 
		if (this.cannon.hasAmmo === true ) {
			for (let i = 0; i < this.cannon.firedArray.length; i++) {
				this.cannon.firedArray[i].draw(this.context);
				this.cannon.firedArray[i].move(this.context);

				if (this.cannon.firedArray[i].hasArrived === true) {
					this.explosionArray.push(new Explosion(this.cannon.firedArray[i].targetX, this.cannon.firedArray[i].targetY, 10))
					console.log(this.explosionArray)
					this.cannon.firedArray.splice(i, 1);
				}
			}	
		}

		//draws explosions
		for (let i = 0; i < this.explosionArray.length; i++) {
			this.explosionArray[i].draw(this.context);
			if (this.explosionArray[i].isExploded === false) {
				this.explosionArray[i].explode();
			} else {
				this.explosionArray[i].implode();	
			}
			if (this.explosionArray[i].isExploded === true && this.explosionArray[i].radius === this.explosionArray[i].minRadius) {
				this.explosionArray.splice(i, 1)
			}
		}

		requestAnimationFrame(this.gameLoop.bind(this));
	}

	startGame() {
		requestAnimationFrame(this.gameLoop.bind(this));
		this.cannon.populateMissiles();
		this.populateMeteors(12);
	}

	clicked(mouseX, mouseY) {
		this.cannon.hasAmmo = true; 
		this.cannon.shootMissile(mouseX, mouseY);
	}

	populateMeteors(amount) {
		for (let i = 0; i < amount; i++) {
			this.meteorArray.push(new Meteors(5, 5));
		}
	}
};