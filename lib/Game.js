const Cannon = require('./Cannon.js');
const Meteors = require('./Meteors.js');


module.exports = class Game {
	constructor(context, width, height) {
		this.cannon = new Cannon();
		this.width = width;
		this.height = height;
		this.context = context;
		this.meteorArray = [];
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
					this.cannon.firedArray.splice(i, 1);
				}
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
		this.cannon.shootMissile(this.context, mouseX, mouseY);
	}

	populateMeteors(amount) {
		for (let i = 0; i < amount; i++) {
			this.meteorArray.push(new Meteors(5, 5));
		}
	}
};







