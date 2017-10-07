module.exports = class Meteors {
	constructor(w, h) {
		this.x = (Math.floor(Math.random() * 500) + 50 );
		this.y = Math.floor(Math.random() * -800);
		this.w = w;
		this.h = h;
		this.dx = 0;
		this.dy = 0;
		this.targetX = Math.floor(Math.random() * 600);
		console.log(this.targetX);
		this.targetY = 605;
	}

	draw(context) {
		context.fillRect(this.x, this.y, this.w, this.h);

		// Draws meteor path line
		// context.beginPath();
		// context.moveTo(this.y, this.x);
		// context.lineTo(this.x, this.y);
		// context.stroke();
	} 

	move() {
		const oppositeLine = this.targetY - this.y;
		const adjacentLine = this.targetX - this.x;
		const angle = Math.atan(oppositeLine/adjacentLine);
		
		this.dx = Math.cos(angle);
		this.dy = Math.sin(angle);

		if (this.targetX < this.x) {
			this.dy = -this.dy;
			this.dx = -this.dx;
		}

		this.x += this.dx * 2;
		this.y += this.dy * 2; 	
	}
};