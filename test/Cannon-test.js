const { assert } = require('chai');

global.Audio = class {};

const Base = require('../lib/Base.js');
const Cannon = require('../lib/Cannon.js');
const Missile = require('../lib/Missile.js'); 
const Meteors = require('../lib/Meteors.js');
const Explosion = require('../lib/Explosion.js'); 

describe('cannon unit testing', () => {

	it('should be a function', () => {
		const cannon = new Cannon();
	});


	it('should have an x of 275', () => {
		const cannon = new Cannon();

		assert.equal(cannon.x, 275);
	});

	it('should have a y of 545', () => {
		const cannon = new Cannon ();

		assert.equal(cannon.y, 545);
	});

	it('should have a w of 50', () => {
		const cannon = new Cannon ();

		assert.equal(cannon.w, 50);
	});

	it('should have an h of 50', () => {
		const cannon = new Cannon ();

		assert.equal(cannon.h, 50);
	}); 

	it('should have a center of width divided by two plus x', () => {
		const cannon = new	Cannon ();

		assert.equal(cannon.center, cannon.w / 2 + cannon.x);
	});

	it('should have a missileArray = []', () => {
		const cannon = new Cannon ();

		assert.deepEqual(cannon.missileArray, []);
	});

	it('should have a firedArray = []', () => {
		const cannon = new Cannon ();

		assert.deepEqual(cannon.firedArray, []);
	});

	it('should have a property of hasAmmo with a default of false', () => {
		const cannon = new Cannon ();

		assert.equal(cannon.hasAmmo, false);
	});

	// it('should shootMissile', () => {
	// 	const cannon = new Cannon ();

	// 	assert.equal(cannon ) 
			
	// 		shootMissile(),

	// 		isMoving = true,
			
	// 		firedMissile.targetX = mouseX,
			
	// 		firedMissile.targetY = mouseY,
		
	// 		firedMissile.setVelocity(),
		
	// 		this.firedArray.push(firedMissile,
	// });

	// it ('should populateMissles', () => {
	// 		populateMissiles() {
	// 		for (let i = 0; i < 30; i++) {
	// 		this.missileArray.push(new Missile(300, 550, 5, 5));
	// 	}
	// }
	// });

}); 




//populate missile()