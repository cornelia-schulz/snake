var c = document.getElementById("game");
var globalID;
var startGame = function(){
    runGame();
}

var runGame = function(){
    moveSnake();
    globalID = requestAnimationFrame(runGame);
}

var checkForCollisionWithBorders = function(){
    if (snake[0].x < 0 || snake[0].x > c.width || snake[0].y < 0 || snake[0].y > c.height){
        console.log("GAME OVER");
        endGame();
    }
}

var checkForCollisionWithSelf = function(){

}

var calculatePoints = function(){

}

var endGame = function(){
    console.log("end game");
    cancelAnimationFrame(globalID);
}

startGame();