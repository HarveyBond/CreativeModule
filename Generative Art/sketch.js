
let r=255; let g=255; let b= 255;
let x1; let y1;

function setup() {
  createCanvas(594, 841);
  x1 = width/2;
  y1 = height/2;

  background(0);
}
function draw()  {
  frameRate(24);

if (mouseIsPressed) {
  r= random(255);
  g= random(255);
  b= random(255);
}


strokeWeight(2);
stroke(r, g, b, 120);
noFill();
translate(x1,y1);
  for (var i = 0; i < 10; i++){
  ellipse(0, 0, mouseX - 300, mouseY - 420);
  rotate(PI/5)

}
}
