module.exports = class Cannon {
	constructor() {
		this.x = 250;
		this.y = 550;
		this.w = 100;
		this.h = 50;
	}

	draw(context) {
		context.fillRect(this.x, this.y, this.w, this.h);
	}

	shootMissle() {
		//interact with missile class
		//launch point for missiles
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
}