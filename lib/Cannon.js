const Missile = require('./Missile.js');

module.exports = class Cannon {
	constructor() {
		this.x = 275;
		this.y = 550;
		this.w = 50;
		this.h = 35;
		this.center = this.w / 2 + this.x;
		this.missileArray = [];
		this.firedArray = [];
		this.hasAmmo = false;   
	}

	draw(context) {
		context.fillStyle = 'black';
		context.fillRect(this.x, this.y, this.w, this.h);
	}

	shootMissile(mouseX, mouseY) {
		const firedMissile = this.missileArray.shift();
		firedMissile.isMoving = true;
		firedMissile.targetX = mouseX;
		firedMissile.targetY = mouseY;
		firedMissile.setVelocity();
		this.firedArray.push(firedMissile);
	}

	populateMissiles() {
		for (let i = 0; i < 30; i++) {
			this.missileArray.push(new Missile(300, 550, 5, 5));
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