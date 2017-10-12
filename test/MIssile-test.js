const { assert } = require('chai');

global.Audio = class {};

const Base = require('../lib/Base.js');
const Cannon = require('../lib/Cannon.js');
const Game = require('../lib/Game.js');
const GameEntity = require('../lib/GameEntity.js');
const Missile = require('../lib/Missile.js'); 
const Meteors = require('../lib/Meteors.js');
const Explosion = require('../lib/Explosion.js'); 

describe('missile unit testing', () => {

	it('should instantiate our good friend, Missile', () => {
		const missile = new Missile();

		assert.isFunction(Missile);
		assert.isObject(missile);
	});

	it('should take parameters for x, y, w and h', () => {
		const missile = new Missile(10, 10, 10, 10);

		assert.equal(missile.x, 10);
		assert.equal(missile.y, 10);
		assert.equal(missile.w, 10);
		assert.equal(missile.h, 10);
	});

	it('should have both a dx and dy of 0', () => {
		const missile = new Missile();

		assert.equal(missile.dx, 0);
		assert.equal(missile.dy, 0);
	});

	it('should have a both a targetX and targetY of undefined', () => {
		const missile = new Missile();

		assert.equal(missile.targetX, undefined);
		assert.equal(missile.targetY, undefined);
	});

	it('should have a property of isMoving with a default of false', () => {
		const missile = new Missile();

		assert.equal(missile.isMoving, false);
	});

	it('should have a property of hasArrived with a default of false', () => {
		const missile = new Missile();

		assert.equal(missile.hasArrived, false);
	});

	it.skip('should be able to move', () => {
		const missile = new Missile();

		// assert.equal(missile.)
		});

	it.skip('should setVelocity', () => {
		const missile = new Missile();
			// hard code dx to one 
			// assert it eaquals -1 
			// hard code dy to one 
			// assert it eqauls -1
			// assert.equal(missile.);
	});

}); 
