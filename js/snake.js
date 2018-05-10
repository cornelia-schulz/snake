var c = document.getElementById("game");
var ctx = c.getContext("2d");
var size = 8;
console.log("game on");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
  }
  ctx.fillStyle = getRandomColor();

var snakeSegment = function(x, y, sideLength) {
    this.x = x;
    this.y = y;
    this.width = sideLength;
    this.height = sideLength;
    this.isGrowing = false;
    this.render = function(ctx){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var snake = [
    new snakeSegment(292, 100, size),
    new snakeSegment(300, 100, size),
    new snakeSegment(308, 100, size),
    new snakeSegment(308, 108, size),
    new snakeSegment(316, 108, size)
];

var moveSnake = function(direction){
    // remove last segment of snake and add one at the front
    game.checkOnFood();
    if (snake[1].isGrowing === false){
        snake.pop();
    }
    ctx.clearRect(0, 0, c.width, c.height);
    if (direction === "up"){
        snake.unshift(new snakeSegment(snake[0].x, snake[0].y-size, size));
    }
    else if (direction === "down"){
        snake.unshift(new snakeSegment(snake[0].x, snake[0].y+size, size));
    }
    else if (direction === "left"){
        snake.unshift(new snakeSegment(snake[0].x-size, snake[0].y, size));
    }
    else {
        snake.unshift(new snakeSegment(snake[0].x+size, snake[0].y, size));
    }
    game.checkForCollisionWithBorders();
    game.checkForCollisionWithSelf();  
    game.render(ctx);
    console.log(snake);
    for (var i = 0; i < snake.length; i++){
        snake[i].isGrowing = false;
    }
}

var renderSnake = function(ctx){
    for (var i = 0; i < snake.length; i++){
        snake[i].render(ctx);
    }
}

var resetSnake = function(){
    snake = [];
    snake = [
        new snakeSegment(292, 100, size),
        new snakeSegment(300, 100, size),
        new snakeSegment(308, 100, size),
        new snakeSegment(308, 108, size),
        new snakeSegment(316, 108, size)
    ];
}


