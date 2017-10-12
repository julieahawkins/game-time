const GameEntity = require('./GameEntity.js');

module.exports = class Missile extends GameEntity {
  constructor(x, y, w, h) {
    super(...arguments)
    this.dx = 0;
    this.dy = 0;
    this.targetX = undefined;
    this.targetY = undefined;
    this.hasArrived = false;
    this.isMoving = false;
    this.color = '#7C0937';
  }

  draw(context) {
    context.fillStyle = this.color;
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
    context.strokeStyle = '#DB4AE2';
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