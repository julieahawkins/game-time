const { assert } = require('chai');

global.Audio = class {};

const Base = require('../lib/Base.js');
const Cannon = require('../lib/Cannon.js');
const Missile = require('../lib/Missile.js'); 
const Meteors = require('../lib/Meteors.js');
const Explosion = require('../lib/Explosion.js'); 

describe('explosions unit testing', () => {

//is this good practice?
	it('should be a function', () => {
		const explosion = new Explosion();
		// assert.equal(explosion.explosion());
	});

	it('should take parameters for x and y', () => {
		const explosion = new Explosion(300, 300);

		assert.equal(explosion.x, 300);
		assert.equal(explosion.y, 300);
	});

	it('should take parameters for radius and minRadius', () => {
		const explosion = new Explosion(300, 300, 45);

		assert.equal(explosion.radius, 45);
		assert.equal(explosion.minRadius, 45);		
	});

	it('should have a colorArray', () => {
		const explosion = new Explosion();

		assert.deepEqual(explosion.colorArray, ['black', 'red', 'orange', 'white']);
	});

	it('have a property of isExploded with a default of false', () => {
		const explosion = new Explosion();

		assert.equal(explosion.isExploded, false);
	});

	// it('should be able to explode', () => {
	// 	const explosion = new Explosion();

	// 	assert.equal(explosion.explode(), );
	// });

	// it('should be able to implode', () => {
	// 	const explosion = new Explosion();

	// 	assert.equal(explosion.implode(), );
	// });

}); 