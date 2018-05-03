var c = document.getElementById("game");
var globalID;
var startGame = function(){
    runGame();
}

var runGame = function(){
    renderSnake();
    globalID = requestAnimationFrame(runGame);
    
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

}

var endGame = function(){
    cancelAnimationFrame(globalID);
}

startGame();