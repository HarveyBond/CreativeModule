
let r=255; let g=255; let b= 255;
//let diameter = 25;
let x1; let y1;
let w; let h;

function setup() {
  createCanvas(500,500);
  x1 = width/2;
  y1 = height/2;
  w = 25;
  h = 300;
  background(0);
}
function draw()  {


if (mouseIsPressed) {
  r= random(255);
  g= random(255);
  b= random(255);
}


strokeWeight(2);
stroke(r, g, b, 120);
noFill();
translate(x1,y1);
for (var i = 0; i < 40; i++) {
ellipse(0, 0, w, h);
rotate(PI/20);
}
}
