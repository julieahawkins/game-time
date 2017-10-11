const baseImg = document.getElementById('base-img');

module.exports = class Base {
  constructor(x) {
    this.x = x;
    this.y = 550;
    this.w = 30;
    this.h = 45;
  }

  draw(context) {
    context.drawImage(baseImg, this.x, this.y, this.w, this.h);
  }
};