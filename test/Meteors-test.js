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


}); 

// its should ...

// have a fixed diameter

//choose a random start point 

// have a dx dy

// choose a targetY

// bouleans

// draw

// move