const GameEntity = require('./GameEntity.js');
const baseImg = document.getElementById('base-img');

module.exports = class Base extends GameEntity {
  constructor(x, y, w, h) {
    super(x, y, w, h)
  }

  draw(context) {
    context.drawImage(baseImg, this.x, this.y, this.w, this.h);
  }
};