
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
    var x = horizontal[Math.floor(Math.random() * horizontal.length)];
    var y = vertical[Math.floor(Math.random() * vertical.length)];
    var food = new snakeFood(x, y, size);
    return food;
}