module.exports = class Explosion {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.minRadius = 10;
		this.colorArray = ['black']; 
		this.isExploding = false;
	}

	draw(context) {
		context.beginPath();
		context.arc((this.x + 2.5), (this.y + 2.5), this.radius, 0, (Math.PI * 2), false);
		context.fillStyle = this.colorArray[Math.floor(Math.random() * this.colorArray.length)]; 
		context.fill(); 
		// context.closePath();
	}

	expand() {
		// const maxRadius = 50;
		if (this.radius < 49) {
			console.log(this.radius)
			this.radius += 1;
		} else {
			this.radius -= 1;
		}
		
	}
};


// if (this.radius < maxRadius) {
// 			this.radius += 1;
// 			}
// 		} else if (this.radius > this.minRadius) {
// 			this.radius -= 1;
// 		}



