
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
    var x = Math.floor(Math.random() * ((c.width - size) + 1));
    var y = Math.floor(Math.random() * ((c.height - size) + 1));
    var food = new snakeFood(x, y, size);
    return food;
}