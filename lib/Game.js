module.exports = class Game {
	constructor (context, width, height) {
		context.fillRect(100, 100, 20, 20);

		this.width = width;
		this.height = height;
		this.context = context;
	}

	gameLoop() {
		this.context.clearRect(0, 0, this.width, this.height)



		requestAnimationFrame(this.gameLoop)

	}

	startGame() {
		requestAnimationFrame(this.gameLoop)
	}
}