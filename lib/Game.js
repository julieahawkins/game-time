const Cannon = require('./Cannon.js');
const Meteors = require('./Meteors.js');
const Explosion = require('./Explosion.js');
const Base = require('./Base.js');

//sounds
const pew = new Audio('../sounds/pew.wav');
pew.volume = 0.2; 

//images
const crossImage = document.getElementById('crosshair');



module.exports = class Game {
  constructor(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.cannon = new Cannon(275, 545, 50, 50);
    this.baseCount = 6;
    this.baseArray = [50, 125, 200, 375, 450, 525];
    this.meteorArray = [];
    this.baseObjArray = [];
    this.explosionArray = [];
    this.crosshairArray = [];
    this.playerScore = 0;
    this.waveCount = 1;
  }


  gameLoop() {
    this.context.clearRect(0, 0, this.width, this.height); 

    this.drawScore();
    this.drawWave();
    this.drawPlayerBaseCount();
    this.drawPlayerMissileCount();

    //cannon
    this.cannon.draw(this.context);
    this.cannonDestroyed();
		

    //bases
    for (let i = 0; i < this.baseObjArray.length; i++) {
      this.baseObjArray[i].draw(this.context);
      this.basesDestroyed(i);
    }

    //meteors 
    for (let i = 0; i < this.meteorArray.length; i++) {
      this.meteorArray[i].draw(this.context);
      this.meteorArray[i].move();
      this.meteorsExploding(i);
    }
    this.meteorsColliding();
		
    //missiles 
    if (this.cannon.hasAmmo === true ) {
      for (let i = 0; i < this.cannon.firedArray.length; i++) {
        this.cannon.firedArray[i].draw(this.context);
        this.cannon.firedArray[i].move(this.context);
        this.missileExplode(i);
      }	
    }

    //crosshairs
    for (let i = 0; i < this.cannon.firedArray.length; i++) {
      if (this.cannon.firedArray[i].hasArrived === false) {
        this.drawCrosshair(this.cannon.firedArray[i].targetX - 7.5, this.cannon.firedArray[i].targetY - 7.5);
      }
    }

    //explosions
    for (let i = 0; i < this.explosionArray.length; i++) {
      this.explosionArray[i].draw(this.context);
      if (this.explosionArray[i].isExploded === false) {
        this.explosionArray[i].explode();
      } else {
        this.explosionArray[i].implode();	
      }
      if (this.explosionArray[i].isExploded === true && 
      	this.explosionArray[i].radius === this.explosionArray[i].minRadius) {
        this.explosionArray.splice(i, 1);
      }
    }

    this.nextWave();

    this.gameOver();

    requestAnimationFrame(this.gameLoop.bind(this));
  }

  startGame() {
    requestAnimationFrame(this.gameLoop.bind(this));
    this.init();
  }

  keepScore() {
    this.playerScore += 100;
  }

  drawScore() {
    this.context.font = "20px Monospace";
    this.context.fillStyle = "#2E9DD1";
    this.context.fillText("Score: " + this.playerScore, 8, 20);
  }

  drawWave() {
  	this.context.font = '20px Monospace';
  	this.context.fillStyle = '#2E9DD1';
  	this.context.fillText('Wave: ' + this.waveCount, 8, 45);
  }

  drawPlayerBaseCount() {
    this.context.font = "20px Monospace";
    this.context.fillStyle = "#2E9DD1";
    this.context.fillText("Bases: " + this.baseCount, 495, 20);
  }

  drawPlayerMissileCount() {
    this.context.font = "20px Monospace";
    this.context.fillStyle = "#DB4AE2";
    this.context.fillText("Missiles: " + this.cannon.missileArray.length, 235, 20);
  }

  gameOver() {
    if (this.baseCount === 0 || this.cannon.w === 0) {
      this.meteorArray.forEach(function(meteor) {
        meteor.x += meteor.dx * 7;
        meteor.y += meteor.dy * 7;
      });
      this.drawGameOver();
    }
  }

  drawGameOver() {
    this.context.font = "80px Monospace";
    this.context.fillStyle = "#2E9DD1";
    this.context.fillText("GAME OVER", 90, 300);
  }

  init() {
    this.populateMeteors(10);
    this.meteorsPickTarget();
    this.populateBases();
    this.cannon.populateMissiles(20);
  }

  nextWave() {
  	if (this.meteorArray.length === 0 && 
  		this.baseObjArray.length > 0 &&
  		this.cannon.w > 0) { 
    	console.log('new wave');
  		this.populateMeteors(15);
    	this.meteorsPickTarget();
    	this.cannon.populateMissiles(5);
    	this.waveCount += 1;
  	}
  }

  clicked(mouseX, mouseY) {
    if (mouseY < 505) {
    	this.cannon.shootMissile(mouseX, mouseY);
    	this.crosshairArray.push(crossImage);
			
    //plays pew
    	pew.play();		
    }	
  }

  drawCrosshair(x, y) {
    this.context.drawImage(crossImage, x, y, 15, 15);
  }

  populateBases() {
    for (let i = 0; i < this.baseArray.length; i++) {
      let x = this.baseArray[i];
      this.baseObjArray.push(new Base(x, 550, 30, 45));
    }
  }	

  populateMeteors(amount) {
    for (let i = 0; i < amount; i++) {
      this.meteorArray.push(new Meteors((Math.floor(Math.random() * 600)) ,(Math.floor(Math.random() * -810)) , 5, 5));
    }
  }

  meteorsPickTarget() {
    const targetArray = this.baseArray.map(function(base) {
      return base + 15;
    });

    targetArray.push(this.cannon.x + (this.cannon.w / 2));

    for (let i = 0; i < this.meteorArray.length; i++) {
      this.meteorArray[i].targetX = targetArray[Math.floor(Math.random() * targetArray.length)];
      console.log(this.meteorArray[i].targetX);
    }
  }

  meteorsColliding() {
    for (let i = 0; i < this.meteorArray.length; i++) {
      for (let j = 0; j < this.explosionArray.length; j++) {
        if (this.meteorArray[i].y <= (this.explosionArray[j].y + this.explosionArray[j].radius) && 
     this.meteorArray[i].y >= (this.explosionArray[j].y - this.explosionArray[j].radius) &&
     this.meteorArray[i].x <= (this.explosionArray[j].x + this.explosionArray[j].radius) && 
     this.meteorArray[i].x >= (this.explosionArray[j].x - this.explosionArray[j].radius)) {
          this.meteorArray[i].hasCollided = true;
        }
      }
    }
  }

  meteorsExploding(i) {
    if (this.meteorArray[i].hasArrived === true) {
      this.explosionArray.push(new Explosion(this.meteorArray[i].targetX, this.meteorArray[i].targetY, 10));
      this.meteorArray.splice(i, 1);
    }	else if (this.meteorArray[i].hasCollided === true) {
      this.explosionArray.push(new Explosion(this.meteorArray[i].x, this.meteorArray[i].y, 10));
      this.meteorArray.splice(i, 1);
      this.keepScore();
    }
  }

  cannonDestroyed() {
    for (let i = 0; i < this.explosionArray.length; i++) {
      if (this.cannon.y <= (this.explosionArray[i].y + this.explosionArray[i].radius) && 
     this.cannon.y >= (this.explosionArray[i].y - this.explosionArray[i].radius) &&
     this.cannon.x <= (this.explosionArray[i].x + this.explosionArray[i].radius) && 
     this.cannon.x >= (this.explosionArray[i].x - this.explosionArray[i].radius)) {
        this.cannon.missileArray = [];
        this.cannon.hasAmmo = false;
        this.cannon.w = 0;
      }
    }
  }

  basesDestroyed(i) {
    for (let j = 0; j < this.explosionArray.length; j++) {
      if (this.baseObjArray[i] &&
    		this.baseObjArray[i].y <= (this.explosionArray[j].y + this.explosionArray[j].radius) && 
     		this.baseObjArray[i].y >= (this.explosionArray[j].y - this.explosionArray[j].radius) &&
     		this.baseObjArray[i].x <= (this.explosionArray[j].x + this.explosionArray[j].radius) && 
     		this.baseObjArray[i].x >= (this.explosionArray[j].x - this.explosionArray[j].radius)) {
      	this.baseObjArray.splice(i, 1);
        this.baseCount -= 1;
      }
    }
  }

  missileExplode(i) {
    if (this.cannon.firedArray[i].hasArrived === true) {
      this.explosionArray.push(new Explosion(this.cannon.firedArray[i].targetX, this.cannon.firedArray[i].targetY, 10));
      this.cannon.firedArray.splice(i, 1);
    }
  }



};


