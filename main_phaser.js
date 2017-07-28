var WIDTH = 640;
var HEIGHT = 480;
var x = 50;
var y = 50;
var r = 30;
var vx = 5;
var vy = 5;
var gfx;
var gameStart = true;
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, '',
{ preload: preload, create: create, update: update });

function preload() {
}

function create() {
  gfx = game.add.graphics();
  pause_label = game.add.text(game.world.width-60, game.world.height-60,
     '暫停', { font: '24px Arial', fill: '#0f0' });
  pause_label.inputEnabled = true;
  pause_label.events.onInputUp.add( function() {
    if(gameStart) {
      gameStart = false;
      game.paused = true;
    } else {
      gameStart = true;
      game.paused = false;
    }
  });
}

function update() {
  gfx.clear();
  if(x+r > game.world.width || x-r < 0) {
    vx = -vx;
  }

  if(y+r > game.world.height || y-r < 0) {
    vy = -vy;
  }

  x += vx;
  y += vy;
  drawBall();
}
// function to generate random number
function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function drawBall() {
  gfx.beginFill(0xff0000);
  gfx.drawCircle(x, y, r);
  gfx.endFill();
}
/*
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }
  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }
  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }
  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
  for (var j=0; j<balls.length; j++) {
    if(!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx*dx + dy*dy);
      if(distance < this.size + balls[j].size) {
        balls[j].color = this.color =
         'rgb('+ random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')';
      }
    }
  }
}

var balls = [];
var start = true;
function gameControl() {
   if(start) {
     start = false;
   } else {
     start = true;
     loop();
   }
}

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  while (balls.length < 25) {
    var ball = new Ball(random(0,width), random(0,height),
      random(-7,7), random(-7,7),
      'rgb('+ random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
       random(10,20));
      balls.push(ball);
  }

  for(var i=0; i<balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  if(start) {
    requestAnimationFrame(loop);
  } else {
    return;
  }
}

loop();
*/
