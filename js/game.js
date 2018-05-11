var vertical = [];
var horizontal = [];
for (var h = 0; h < c.width; h+=size){
  horizontal.push(h);
}

for (var v = 0; v < c.height; v+=size){
  vertical.push(v);
}

var Game = function () {
  this.food = generateRandomBitsOfFood();
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

  this.getFood = function(){
    this.food = generateRandomBitsOfFood();
      for (var i = 0; i < snake.length; i++){
        if(this.food.x === snake[i].x && this.food.y === snake[i].y){
          this.food = generateRandomBitsOfFood();
          this.getFood();
        }
    }
  }

  this.startGame = function () {
    resetSnake();
    this.stopMoving = false;
    this.points = 0;
    document.getElementById("points").innerHTML = this.points;
    this.runGame ();
  };

  this.runGame = function () {
    ctx.clearRect(0, 0, c.width, c.height);
    this.startAnimation(6);
  };

  this.render = function (ctx) {
    renderSnake (ctx);
    this.food.render (ctx);
  };

  //move snake
  this.startAnimation = function (fps) {
    this.fpsInterval = 1000 / fps;
    this.then = window.performance.now ();
    this.startTime = this.then;
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
      this.then = this.now - this.elapsed % this.fpsInterval;
      this.render(ctx);
      moveSnake(this.direction);
    }
  };

  // check if snake moved over the food
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
      this.getFood();
    }
  };

  //check if snake is moving off the canvas
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

  // check if snake is moving over itself
  this.checkForCollisionWithSelf = function () {
    for (var i = 1; i < snake.length; i++) {
      if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
        //console.log("following match: " + snake[0].x + " vs " + snake[i].x + " and " + snake[0].y + " vs " + snake[i].y + " at segment " + i);
        this.endGame ();
      }
    }
  };

  // calculate game points
  this.calculatePoints = function () {
    return (game.points += 5);
  };

  // terminate game
  this.endGame = function () {
    this.stopMoving = true;
    endGame_image = new Image();
    endGame_image.src = "images/gameover1.png";
    endGame_image.onload = function(){
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(endGame_image, 0, 0, c.width, c.height);
    }
    
  };
};

// Create a new game and start it by clicking the button
var game = new Game();
var btn = document.getElementsByClassName("button")[0];
btn.onclick = function(){
  game.startGame();
}