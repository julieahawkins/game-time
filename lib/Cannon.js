const Missile = require('./Missile.js');

module.exports = class Cannon {
	constructor() {
		this.x = 250;
		this.y = 550;
		this.w = 100;
		this.h = 50;
		this.center = this.w / 2 + this.x;
		this.array = [];
		this.hasAmmo = false;   
	}

	draw(context) {
		context.fillRect(this.x, this.y, this.w, this.h);
	}

	// shootMissile() {
	// 	this.array[0].isMoving = true;
	// }

	populateMissiles() {
		for (var i = 0; i < 30; i++) {
			this.array.push(new Missile(300, 500, 10, 10));
		}
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