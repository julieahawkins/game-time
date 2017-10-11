module.exports = class Meteors {
  constructor(w, h) {
    this.x = (Math.floor(Math.random() * 500) + 50 );
    this.y = Math.floor(Math.random() * -810);
    this.w = w;
    this.h = h;
    this.dx = 0;
    this.dy = 0;
    this.targetX = undefined;
    this.targetY = 550;
    this.hasCollided = false;
    this.hasArrived = false;
    this.colorArray = ['#000', '#FFF', '#f4b042' ]; 

  }

  draw(context) {
    context.fillStyle = this.colorArray[Math.floor(Math.random() * this.colorArray.length)]; 
    context.fillRect(this.x, this.y, this.w, this.h);
  }

  move() {
    if (this.y > this.targetY) {
      this.hasArrived = true;
    }

    const oppositeLine = this.targetY - this.y;
    const adjacentLine = this.targetX - this.x;
    const angle = Math.atan(oppositeLine/adjacentLine);
		
    this.dx = Math.cos(angle);
    this.dy = Math.sin(angle);

    if (this.targetX < this.x) {
      this.dy = -this.dy;
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy; 
  }
};