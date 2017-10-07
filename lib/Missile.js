module.exports = class Missile {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.dx = 0;
		this.dy = 0;
		this.targetX = undefined;
		this.targetY = undefined;
		this.isMoving = false;
		this.hasArrived = false;
	}

	draw(context) {
		// console.log(this);
		context.fillRect(this.x, this.y, this.w, this.h);
	} 

	move(context) {
		if(this.y < this.targetY) {
			this.isMoving = false;
			this.hasArrived = true; 
			this.dx = 0;
			this.dy = 0;
		}
		
		//draws a line to click point
		context.beginPath();
		context.moveTo(300, 550);
		context.lineTo((this.x + (this.w / 2)), (this.y + (this.h /2)));
		context.stroke();
		context.closePath();

		//sends missile to target * missile speed
		this.x += this.dx * 4;
		this.y += this.dy * 4;
	}

	setVelocity() {
		const oppositeLine = this.targetY - this.y;
		const adjacentLine = this.targetX - this.x;
		const angle = Math.atan(oppositeLine/adjacentLine);
		
		this.dx = Math.cos(angle);
		this.dy = Math.sin(angle);
		
		if (this.targetX < this.x) {
			this.dx = -this.dx;
			this.dy = -this.dy;
		}
	}
}; 