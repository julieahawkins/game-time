const GameEntity = require('./GameEntity.js');

module.exports = class Meteors extends GameEntity {
  constructor(x, y, w, h) {
    super(x, y, w, h)
    this.dx = 0;
    this.dy = 0;
    this.targetX = undefined;
    this.targetY = 550;
    this.hasArrived = false;
    this.hasCollided = false;
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