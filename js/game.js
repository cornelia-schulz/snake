
var Game = function () {
  this.food = generateRandomBitsOfFood ();
  console.log (this.food);
  this.points = 0;
  this.direction = "right";
  this.stopMoving = false;
  this.frameCount = 0;
  this.fps;
  this.fpsInterval;
  this.startTime;
  this.now;
  this.then;
  this.elapsed;

  this.startGame = function () {
    this.runGame ();
  };

  this.checkOnFood = function () {
    var x1 = snake[0].x;
    var y1 = snake[0].y;
    var x2 = this.food.x;
    var y2 = this.food.y;
    if (x1 >= x2 && x1 <= x2 + size && (y1 >= y2 && y1 <= y2 + size)) {
      for (var i = 0; i < snake.length; i++){
        snake[i].isGrowing = true;
      }
      this.points = this.calculatePoints ();
      document.getElementById("points").innerHTML = this.points;
      console.log (this.points);
      this.food = generateRandomBitsOfFood ();
    }
  };

  this.runGame = function () {
    ctx.clearRect(0, 0, c.width, c.height);
    this.startAnimation(5);
  };

  this.render = function (ctx) {
    renderSnake (ctx);
    this.food.render (ctx);
  };

  this.startAnimation = function (fps) {
    this.fpsInterval = 1000 / fps;
    this.then = window.performance.now ();
    this.startTime = this.then;
    console.log ('Start time: ' + this.startTime);
    this.animate();
  };

  this.animate = function (newtime) {
    var requestId = requestAnimationFrame (this.animate.bind (this));
    this.now = newtime;
    this.elapsed = this.now - this.then;
    if (this.stopMoving) {
      cancelAnimationFrame(requestId);
      return;
    }
    if (this.elapsed > this.fpsInterval) {
      //console.log("elapsed and fpsInterval: " + this.elapsed + " and " + this.fpsInterval);
      this.then = this.now - this.elapsed % this.fpsInterval;
      this.render(ctx);
      moveSnake(this.direction);
    }
  };

  this.checkForCollisionWithBorders = function () {
    if (
      snake[0].x < 0 ||
      snake[0].x > c.width ||
      snake[0].y < 0 ||
      snake[0].y > c.height
    ) {
      this.stopMoving = true;
      this.endGame ();
    }
  };

  this.checkForCollisionWithSelf = function () {
    for (var i = 1; i < snake.length; i++) {
      if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
        console.log("following match: " + snake[0].x + " vs " + snake[i].x + " and " + snake[0].y + " vs " + snake[i].y + " at segment " + i);
        //this.stopMoving = true;
        this.endGame ();
      }
    }
  };

  this.calculatePoints = function () {
    return (game.points += 5);
  };

  this.endGame = function () {
    console.log ('GAME OVER');
    //this.stopMoving = true;
    endGame_image = new Image();
    endGame_image.src = "images/gameover1.png";
    endGame_image.onload = function(){
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(endGame_image, 0, 0, c.width, c.height);
    }
    
  };
};


var game = new Game ();
game.runGame ();
//game.direction = "up";
var btn = document.getElementsByClassName("button")[0];
btn.addEventListener("click", game.runGame);