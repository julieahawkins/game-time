const Missile = require('./Missile.js');

module.exports = class Cannon {
	constructor() {
		this.x = 250;
		this.y = 550;
		this.w = 100;
		this.h = 50;
		this.center = this.w / 2 + this.x;
		this.missileArray = [];
		this.firedArray = [];
		this.hasAmmo = false;   
	}

	draw(context) {
		context.fillRect(this.x, this.y, this.w, this.h);
	}

	shootMissile(context, mouseX, mouseY) {
		var firedMissile = this.missileArray.shift();
		console.log(firedMissile);
		firedMissile.isMoving = true;
		firedMissile.targetX = mouseX;
		firedMissile.targetY = mouseY;
		firedMissile.setVelocity();
		console.log(firedMissile);
		console.log(this.missileArray.length);
		this.firedArray.push(firedMissile);
		console.log(this.firedArray);
	}

	populateMissiles() {
		for (var i = 0; i < 30; i++) {
			this.missileArray.push(new Missile(300, 500, 10, 10));
		}
	}

	countAmmo() {
		//checking for stored missiles
		//decrecement after missile launch
		//update count
		//return count after doing shit

		//can we prepend html or how are we going to diplay the counter?
	}

	isHit() {
		//collision detection
		//update countAmmo = 0
		//toggle display of Cannon(kill cannon)
	}
};