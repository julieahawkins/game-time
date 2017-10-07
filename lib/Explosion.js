module.exports = class Explosion {
	constructor(radius) {
		this.radius = radius;
		this.minRadius = radius;
	}

	draw(context, x, y) {
		context.beginPath();
		context.arc((x + 2.5), (y + 2.5), this.radius, 0, (Math.PI * 2), false);
		context.fillStyle = 'black'; 
		context.fill(); 
	}

	expand() {
		const maxRadius = 50;
		if (this.radius < maxRadius) {
			this.radius += 1;
		}
	}
};