module.exports = class Cannon {
	constructor() {
		this.x = 250;
		this.y = 550;
		this.w = 100;
		this.h = 50;
		this.center = this.w / 2 + this.x;  
	}

	draw(context) {
		context.fillRect(this.x, this.y, this.w, this.h);
	}

	shootMissile(missile) {
		missile.isMoving = true;
	}

	countAmmo() {
		//checking for stored missiles
		//decrecement after missile launch
		//update count
		//return count after doing shit
	}

	isHit() {
		//collision detection
		//update countAmmo = 0
		//toggle display of Cannon(kill cannon)
	}
};