
document.addEventListener("keydown", function detectKey(e){
    e.preventDefault();
    var direction = "";
    if (e.keyCode == "38"){
        game.direction = "up";
        console.log("up");
    }
    else if (e.keyCode == "40"){
        game.direction = "down";
        console.log("down");
    }
    else if (e.keyCode == "37") {
        game.direction = "left";
        console.log("left");
    }
    else if (e.keyCode == "39"){
        game.direction = "right";
        console.log("right");
    }
});

var btn = document.querySelector("input");
btn.addEventListener("click", game.startGame);