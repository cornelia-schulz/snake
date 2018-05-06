
var globalID;
var Game = function(){
    this.food = generateRandomBitsOfFood();
    console.log(this.food);
    this.points = 0;
    this.startGame = function(){
        this.runGame();
    }

    this.checkOnFood = function(){
            var x1 = snake[0].x;
            var y1 = snake[0].y;
            var x2 = this.food.x;
            var y2 = this.food.y;
            if((x1 >= x2 && x1 <= x2 + size) && (y1 >= y2 && y1 <= y2 + size)){
                snake[0].isGrowing = true;
                this.points = calculatePoints();
                console.log(this.points);
                this.food = generateRandomBitsOfFood();  
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