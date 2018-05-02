var c = document.getElementById("game");
var ctx = c.getContext("2d");
console.log("game on");
var backgroundImage = new Image();
backgroundImage.src="images/grass.jpg";
/*ctx.moveTo(400, 200);
ctx.lineTo(440, 220);
ctx.stroke();*/
ctx.fillStyle = 'yellow';
ctx.fillRect(400, 200, 40, 8);