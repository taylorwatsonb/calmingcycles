let angle = 0;
let size = 200;
let expanding = true;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0); // Black canvas
  translate(width/2, height/2);
  rotate(angle);
  
  // Outer circle (constant)
  noStroke();
  fill(100, 150, 255);
  ellipse(0, 0, 300, 300);
  
  // Breathing circle
  if (expanding) {
    size += 0.25;
    if (size >= 280) expanding = false;
  } else {
    size -= 0.25;
    if (size <= 200) expanding = true;
  }
  
  // Inner breathing circle
  fill(173, 216, 230); // Light blue
  ellipse(0, 0, size, size);
  
  // Yin-yang style arcs
  fill(255, 0, 0); // Red
  arc(0, 0, size, size, 0, PI);
  fill(173, 216, 230); // Light blue
  arc(0, 0, size, size, PI, TWO_PI);
  
  // Small circles
  let smallCircleSize = size / 6;
  fill(255, 0, 0); // Red
  ellipse(0, -size/4, smallCircleSize, smallCircleSize);
  fill(173, 216, 230); // Light blue
  ellipse(0, size/4, smallCircleSize, smallCircleSize);
  
  // Slow rotation
  angle += 0.0025;
  
  // Instructions in white
  push();
  rotate(-angle);
  fill(255); // White text
  textSize(24);
  text(expanding ? "Inhale" : "Exhale", 0, 180);
  pop();
}
