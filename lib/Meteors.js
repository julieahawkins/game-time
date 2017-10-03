module.exports = class Meteors {
	constructor(w, h) {
		this.x = Math.floor(Math.random() * 600);
		this.y = Math.floor(Math.random() * - 1000);
		this.velX = ((Math.random() - 0.5) * 2)
		this.w = w;
		this.h = h;
		this.arrayOfMeteors = [];
	}

	draw(context) {
		context.fillRect(this.x, this.y, this.w, this.h);
	} 

	move() {
		this.y += 5; 
		this.x += this.velX;
	}
};