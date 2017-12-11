
let r=255; let g=255; let b= 255;
let x1; let y1;
//sets up the let variables used for the random rgb colour generation and the positioning of the spirograph

function setup() {
  createCanvas(594, 841);
  // setups the scene
  x1 = width/2;
  y1 = height/2;
  //sets the x and y coordinates to the middle of the canvas
  background(0);
  //sets the background colour to black
    frameRate(24);
 //sets the frame rate of the page to 24 frames per second
}
function draw()  {
  //draws the scene

if (mouseIsPressed) {
  r= random(255);
  g= random(255);
  b= random(255);
}
//changes the colour of the spirograph to a random rgb value when the mouse is clicked
strokeWeight(2);
//sets stroke of the of the ellipse to 2 pixels thick
stroke(r, g, b, 120);
//starts the spirograph off light grey
noFill();
//means the ellipses have no fill colour to create the spirograph effect
translate(x1,y1);
//sets the centre point to the middle meaning the ellipses are rotated around this point
  for (var i = 0; i < 10; i++){
    // loop that creates 10 ellipses
  ellipse(0, 0, mouseX - 200, mouseY - 400);
  // creates the ellipes at x1 y1 with the varying dimensions as you move the mouse
  rotate(PI/5)
  //angle that the ellipese are rotated

}
}
