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

	move(context) {

		if(this.y < -100) {
			this.isMoving = false;
		}
		// this.y--;
		context.beginPath();
		context.moveTo((this.x + (this.w / 2)), this.y);
		context.lineTo(250, 250);
		context.stroke();
		// console.log((event.offsetY - this.y)/(event.offsetX - this.x));

		// this.x += event.offsetX;
		// this.y -= event.offsetY;
		// console.log(event.offsetY);
		// 	console.log(event.offsetX);
	}

}; 