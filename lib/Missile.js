module.exports = class Missile {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.isMoving = false;
	}

	draw(context) {
		context.fillRect(this.x, this.y, this.w, this.h);
	} 

	move() {
		this.y--;

		if(this.y < -100) {
			this.isMoving = false;
		}
		// this.x += event.offsetX;
		// this.y -= event.offsetY;
		// console.log(event.offsetX);
	}

}; 