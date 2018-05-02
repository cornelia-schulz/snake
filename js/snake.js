var c = document.getElementById("game");
var ctx = c.getContext("2d");
console.log("game on");
ctx.fillStyle = 'brown';

var snakeSegment = function(x, y, sideLength) {
    this.x = x;
    this.y = y;
    this.width = sideLength;
    this.height = sideLength;
    this.render = function(ctx){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var snake = [
    new snakeSegment(392, 200, 8),
    new snakeSegment(400, 200, 8),
    new snakeSegment(408, 200, 8),
    new snakeSegment(408, 208, 8)
];

var moveSnake = function(direction){
    // remove last segment of snake and add one at the front
    snake.pop();
    ctx.clearRect(0, 0, c.width, c.height);
    if (direction === "up"){
        snake.unshift(new snakeSegment(snake[0].x, snake[0].y-8, 8));
    }
    else if (direction === "down"){
        snake.unshift(new snakeSegment(snake[0].x, snake[0].y+8, 8));
    }
    else if (direction === "left"){
        snake.unshift(new snakeSegment(snake[0].x-8, snake[0].y, 8));
    }
    else {
        snake.unshift(new snakeSegment(snake[0].x+8, snake[0].y, 8));
    }
    renderSnake();
}

var renderSnake = function(){
    for (var i = 0; i < snake.length; i++){
        snake[i].render(ctx);
    }
}


renderSnake();