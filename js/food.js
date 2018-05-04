
var snakeFood = function(x, y, sideLength) {
    this.x = x;
    this.y = y;
    this.width = sideLength;
    this.height = sideLength;
    this.render = function(ctx){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var generateRandomBitsOfFood = function() {
    var x;
    var y;
    x += c.width[Math.floor(Math.random() * 1)];
    y += c.height[Math.floor(Math.random() * 1)];
    var food = new snakeFood(x, y, size);
    food.render(ctx);
}