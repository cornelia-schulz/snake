var c = document.getElementById("game");
var startGame = function(){
    renderSnake();
}

var checkForCollisionWithBorders = function(){
    if (snake[0].x < 0 || snake[0].x > c.width || snake[0].y < 0 || snake[0].y > c.height){
        console.log("GAME OVER");
    }
}

var checkForCollisionWithSelf = function(){

}

var calculatePoints = function(){

}

var endGame = function(){

}

startGame();