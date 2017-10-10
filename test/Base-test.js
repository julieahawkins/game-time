const { assert } = require('chai');

global.Audio = class {};

const Base = require('../lib/Base.js');
const Cannon = require('../lib/Cannon.js');
const Missile = require('../lib/Missile.js'); 
const Meteors = require('../lib/Meteors.js');
const Explosion = require('../lib/Explosion.js'); 

describe('base unit testing', () => {

	it('should be a function', () => {
		let base = new Base();
	});
}); 

// its should ...

//  x = x

// have a set y

// have a set w

//  have a set h

// draw()