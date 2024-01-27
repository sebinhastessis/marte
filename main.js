canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var como_tu_quieras="mars.jpg";
var como_tu_gustes="rover.png";
rover_x=100; 
rover_y=100;
function XD(){
    




	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = como_tu_quieras;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = como_tu_gustes;   // load image
	
}
	
	
	
	function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y,  30 ,30);
}
window.addEventListener("keydown", XDDD)
function XDDD(palabra){
 XDDDD=palabra.keyCode;
 console.log(palabra);
 if(XDDDD=="38")
{up();
console.log ("lapalabraquetuquieras")
}
if(XDDDD=="37")
{left();
console.log ("lapalabraquetuquieras")
}
if(XDDDD=="40")
{down();
console.log ("lapalabraquetuquieras")
}
if(XDDDD=="39")
{right();
console.log ("lapalabraquetuquieras")
}
}
function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	 