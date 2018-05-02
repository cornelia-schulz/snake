var c = document.getElementById("game");
var ctx = c.getContext("2d");
console.log("game on");
var backgroundImage = new Image();
backgroundImage.src="images/grass.jpg";
ctx.fillStyle = 'brown';
ctx.fillRect(392, 200, 8, 8);
ctx.fillRect(400, 200, 8, 8);
ctx.fillRect(408, 200, 8, 8);
ctx.fillRect(408, 208, 8, 8);

var snakeSegment = function(x, y, sideLength) {
    this.x = x;
    this.y = y;
    this.width = sideLength;
    this.height = sideLength;
    this.render = function(ctx){
        ctx.fillRect;
    }
}

var snake = [
    new snakeSegment(392, 200, 8),
    new snakeSegment(400, 200, 8),
    new snakeSegment(408, 200, 8),
    new snakeSegment(408, 208, 8)
];