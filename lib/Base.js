module.exports = class Base {
  constructor(x) {
    this.x = x;
    this.y = 550;
    this.w = 30;
    this.h = 10;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.w, this.h)
  }
};