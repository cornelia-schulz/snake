document.onkeydown = detectKey;

function detectKey(e){
    var direction = "";
    if (e.keyCode == "38"){
        direction = "up";
        console.log("up");
    }
    else if (e.keyCode == "40"){
        direction = "down";
        console.log("down");
    }
    else if (e.keyCode == "37") {
        direction = "left";
        console.log("left");
    }
    else if (e.keyCode == "39"){
        direction = "right";
        console.log("right");
    }
    moveSnake(direction);
}