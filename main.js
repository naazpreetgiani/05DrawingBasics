//Drawing Basics

//Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Store images in variables
let html3Img = document.getElementById("html3-img");

//Let's draw some stuff using the graphics context (ctx)

// DRAW RECTANGLES
//Set the outline(stroke) and fill colors
//Use any valid css colors; name, rgb(), rgba(), hex #FF0033

ctx.strokeStyle = "purple";
ctx.strokeRect(50, 20, 150, 50); // Draw an outlined rectangle

ctx.fillStyle = "rgb(0,255,0";
ctx.fillRect(225, 50, 50, 50); //Draw a filled square

//DRAW TEXT
ctx.font = "42px Comic Sans MS";
ctx.fillStyle = "red";
ctx.fillText("Hello Canvas!", 350, 50);

ctx.font = "30px Arial";
ctx.strokeStyle = "blue";
ctx.strokeText("Hello Canvas!", 350, 100); // Outlined Text

//DRAW LINES
ctx.lineWidth = 4;
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(500, 200); // Set drawing location
ctx.lineTo(700, 150); // Draw a line from current location to (700, 150)
ctx.lineTo(600, 100);
ctx.stroke(); //Draw the specified path

//DRAW POLYGON
ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.moveTo(500, 400);
ctx.lineTo(700, 350);
ctx.lineTo(600, 300);
ctx.closePath(); //Go back to the start of path
ctx.fill(); //Draw the specified path

//CIRCLES / ARCS
ctx.lineWidth = 5;
ctx.strokeStyle = "#0000FF";
ctx.beginPath();
ctx.arc(100, 500, 50, 0, 2 * Math.PI); // Circle (0 to 2*PI) with center (100, 500) and radius 50
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(250, 500, 30, 0, 2 * Math.PI); // Circle (0 to 2*PI) with center (250, 500) and radius 30
ctx.fill();

ctx.fillStyle = "#FFFF00";
ctx.beginPath();
ctx.arc(250, 500, 20, 0, 2 * Math.PI); // Half Circle (0 to PI)  with center (250, 500) and radius 20
ctx.fill();

//DRAW IMAGES
ctx.drawImage(html3Img, 200, 200); // Draw image with top left corner of (200, 200)
ctx.drawImage(html3Img, 200, 350, 50, 50); // Draw image with top left corner of (200, 350) scale to 50 x 50
