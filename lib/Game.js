const Cannon = require('./Cannon.js');
const Meteors = require('./Meteors.js');
const Explosion = require('./Explosion.js');

//sounds
const pew = new Audio('../sounds/pew.wav'); 

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

		
		//cannon
		this.cannon.draw(this.context);

		
		//meteors 
		for (let i = 0; i < this.meteorArray.length; i++) {
			this.meteorArray[i].draw(this.context);
			this.meteorArray[i].move();
			this.meteorsExploding(i);
		}
		this.meteorsColliding();
		
		//missiles 
		if (this.cannon.hasAmmo === true ) {
			for (let i = 0; i < this.cannon.firedArray.length; i++) {
				this.cannon.firedArray[i].draw(this.context);
				this.cannon.firedArray[i].move(this.context);
				this.missileExplode(i);
			}	
		}

		//explosions
		for (let i = 0; i < this.explosionArray.length; i++) {
			this.explosionArray[i].draw(this.context);
			if (this.explosionArray[i].isExploded === false) {
				this.explosionArray[i].explode();
			} else {
				this.explosionArray[i].implode();	
			}
			if (this.explosionArray[i].isExploded === true && this.explosionArray[i].radius === this.explosionArray[i].minRadius) {
				this.explosionArray.splice(i, 1);
			}
			
		}

		requestAnimationFrame(this.gameLoop.bind(this));
	}

	startGame() {
		requestAnimationFrame(this.gameLoop.bind(this));
		this.cannon.populateMissiles();
		this.populateMeteors(10);
	}

	clicked(mouseX, mouseY) {
		this.cannon.hasAmmo = true; 
		this.cannon.shootMissile(mouseX, mouseY);
		//plays pew
		pew.play();		
	}

	populateMeteors(amount) {
		for (let i = 0; i < amount; i++) {
			this.meteorArray.push(new Meteors(5, 5));
		}
	}

	meteorsColliding() {
		for (let i = 0; i < this.meteorArray.length; i++) {
			for (let j = 0; j < this.explosionArray.length; j++) {
				if (this.meteorArray[i].y <= (this.explosionArray[j].y + this.explosionArray[j].radius) && 
					this.meteorArray[i].y >= (this.explosionArray[j].y - this.explosionArray[j].radius) &&
					this.meteorArray[i].x <= (this.explosionArray[j].x + this.explosionArray[j].radius) && 
					this.meteorArray[i].x >= (this.explosionArray[j].x - this.explosionArray[j].radius)) {
					this.meteorArray[i].hasCollided = true;
				}
			}
		}
	}

	meteorsExploding(i) {
		if (this.meteorArray[i].hasArrived === true) {
				this.explosionArray.push(new Explosion(this.meteorArray[i].targetX, this.meteorArray[i].targetY, 10));
				this.meteorArray.splice(i, 1);
			}	else if (this.meteorArray[i].hasCollided === true) {
				this.explosionArray.push(new Explosion(this.meteorArray[i].x, this.meteorArray[i].y, 10));
    		this.meteorArray.splice(i, 1);	
			}
	}

	missileExplode(i) {
		if (this.cannon.firedArray[i].hasArrived === true) {
					this.explosionArray.push(new Explosion(this.cannon.firedArray[i].targetX, this.cannon.firedArray[i].targetY, 10));
					this.cannon.firedArray.splice(i, 1);
				}
	}
			
};