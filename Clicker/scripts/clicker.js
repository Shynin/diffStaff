 var click = 0;

 function increment (e) {
 	var x = e.clientX - 120;
 	var y = e.clientY - 80;
 	var dist = Math.sqrt (x*x +  y*y);
 	if (dist<50) {
 		click++;
 		redraw();
 	}
 }

 var canvasClick = document.getElementById("Canvas");
 canvasClick.addEventListener('click', increment);
 var ctx = canvasClick.getContext("2d"); 

 function redraw () {
 	 	ctx.clearRect(0,0, canvasClick.width, canvasClick.height);

 	 	ctx.font = "15px Verdana";
 	 	ctx.fillText("Clicks:"+ click, canvasClick.width/3, canvasClick.height);
 	 	ctx.beginPath();
 	 	ctx.fillStyle = "red";
 	 	ctx.arc(canvasClick.width/2, canvasClick.height/2, 60, 0, 2*3.14);

 	 	ctx.fill();
 	 }
 	 redraw();
