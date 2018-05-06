
var globalID;
var Game = function(){
    this.food = generateRandomBitsOfFood();
    console.log(this.food);
    this.points = 0;
    this.startGame = function(){
        this.runGame();
    }

    this.checkOnFood = function(){
        for (var i = 0; i < snake.length; i++){
            var x = snake[i].x;
            var y = snake[i].y;
            if(x === this.food.x && y === this.food.y){
                this.points = calculatePoints();
                console.log(this.points);
                return (generateRandomBitsOfFood());
            }
        }
    };

    this.runGame = function(){
        this.render(ctx);
        // renderSnake();
        // this.food.render(ctx);
        //globalID = requestAnimationFrame(runGame);
    };

    this.render = function(ctx){
        renderSnake(ctx);
        this.food.render(ctx);
    };


}

var checkForCollisionWithBorders = function(){
    if (snake[0].x < 0 || snake[0].x > c.width || snake[0].y < 0 || snake[0].y > c.height){
        console.log("GAME OVER");
        endGame();
    }
}

var checkForCollisionWithSelf = function(){
    for (var i = 1; i < snake.length; i++){
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y){
            console.log("following match: " + snake[0].x + " vs " + snake[i].x + " and " + snake[0].y + " vs " + snake[i].y + " at segment " + i);
            endGame();
        }
    }
}

var calculatePoints = function(){
    return game.points += 5;
}

var endGame = function(){
    document.removeEventListener("keydown", detectKey, false);
    cancelAnimationFrame(globalID);
}

var game = new Game();
game.startGame();