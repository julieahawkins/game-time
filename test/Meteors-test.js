const { assert } = require('chai');

global.Audio = class {};

const Base = require('../lib/Base.js');
const Cannon = require('../lib/Cannon.js');
const Missile = require('../lib/Missile.js'); 
const Meteors = require('../lib/Meteors.js');
const Explosion = require('../lib/Explosion.js'); 

describe('meteor unit testing', () => {

	it('should be a function', () => {
		const meteors = new Meteors();
	});

//test for random?
	it('should take random parameters for x and y', () => {
		const meteors = new Meteors();

		assert.notDeepEqual(meteors.x, 700);
		assert.notDeepEqual(meteors.y, -1000);
	});

	it('should take parameters for w and h', () => {
		const meteors = new Meteors(5, 5);

		assert.equal(meteors.w, 5);
		assert.equal(meteors.h, 5);
	});

	it('should have a dx and a dy of 0', () => {
		const meteors = new Meteors();

		assert.equal(meteors.dx, 0);
		assert.equal(meteors.dy, 0);
	});

	it('should have a targetX of undefined', () => {
		const meteors = new Meteors();

		assert.equal(meteors.targetX, undefined);
	});

	it('should have a targetY of 550', () => {
		const meteors = new Meteors();

		assert.equal(meteors.targetY, 550);
	});

	it('should have a property of hasCollided with a default of false', () => {
		const meteors = new Meteors();

		assert.equal(meteors.hasCollided, false);
	});

	it('should have a property of hasArrived with a default of false', () => {
		const meteors = new Meteors();

		assert.equal(meteors.hasArrived, false);
	});

	// it('should be able to move', () => {
	// 	const meteors = new Meteors ();

	// 	assert.equal(meteors)

	// 		move() {
	// 	if (this.y > this.targetY) {
	// 		this.hasArrived = true;
	// 	}

	// 	const oppositeLine = this.targetY - this.y;
	// 	const adjacentLine = this.targetX - this.x;
	// 	const angle = Math.atan(oppositeLine/adjacentLine);
		
	// 	this.dx = Math.cos(angle);
	// 	this.dy = Math.sin(angle);

	// 	if (this.targetX < this.x) {
	// 		this.dy = -this.dy;
	// 		this.dx = -this.dx;
	// 	}

	// 	this.x += this.dx;
	// 	this.y += this.dy; 
	// }

	// });

}); 