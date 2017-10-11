const { assert } = require('chai');

global.Audio = class {};

global.document = {
	getElementById: function() {}
};

const Base = require('../lib/Base.js');
const Cannon = require('../lib/Cannon.js');
const Missile = require('../lib/Missile.js'); 
const Meteors = require('../lib/Meteors.js');
const Explosion = require('../lib/Explosion.js'); 

describe('base unit testing', () => {

	it('should be a function', () => {
		const base = new Base();
	});

	it('should take a parameter for x', () => {
		const base = new Base(300);

		assert.equal(base.x, 300);
	});

	it('should have a y position of 550', () => {
		const base = new Base();

		assert.equal(base.y, 550);
	});

	it('should have a width of 30', () => {
		const base = new Base();

		assert.equal(base.w, 30);
	});

	it('should have a width of 45', () => {
		const base = new Base();

		assert.equal(base.h, 45);
	});

}); 