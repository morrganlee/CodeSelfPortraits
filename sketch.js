function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#767522");
  noStroke();
  // draw hair under face
  fill('#2C1A11');
  ellipse(width/2, height/2 , 350, 450);
  quad(width/2 - 175, height/2, width/2 - 200, height/2 + 300, width/2 + 200, height/2 + 300, width/2 + 175, height/2);
  // draw face
  fill("#dca785");
  ellipse(width/2, height/2 - 50, 300);
  beginShape();
  vertex(width/2 - 148, height/2 - 25);
  vertex(width/2 - 100, height/2 + 100);
  vertex(width/2, height/2 + 150);
  vertex(width/2 + 100, height/2 + 100);
  vertex(width/2 + 148, height/2 - 25);
  endShape();
  // ears
  // draw hair on top of face
  // fill('black');
  // rotate(PI / 2.0);
  // ellipse(width/2, height/2, 150, 200);
  // draw nose
  stroke('#a2644b');
  strokeWeight(3);
  line(width/2 - 15, height/2 - 50, width/2 - 15, height/2 + 15);
    // left line of nose
  // line(width/2 + 15, height/2 - 50, width/2 + 15, height/2 + 15);
  arc(width/2, height/2 + 30, 60, 20, PI, 0);
  // draw ze mouf
  fill('#DA627D');
  noStroke();
  ellipse(width/2, height/2 + 80, 75, 25);
  stroke("#A53860");
  line(width/2 - 40, height/2 + 80, width/2 + 40, height/2 + 80,);
  // mask
  // draw eye functions
  drawEye(width/2 - 80, height/2 - 50);
  drawEye(width/2 + 80, height/2 - 50);
  // draw eyebrows
  stroke('#2C1A11');
  strokeWeight(6);
    //right
  line(width/2 - 115, height/2 - 90, width/2 - 50, height/2 - 90);
  // line(width/2 - 90, height/2 - 90, width/2 - 115, height/2 - 80);
    //left
  line(width/2 + 115, height/2 - 90, width/2 + 50, height/2 - 90);
  // line(width/2 + 90, height/2 - 90, width/2 + 115, height/2 - 80);
}

function drawEye(x, y) {
  push();
  fill('white');
  noStroke();
  // stroke('black');
  ellipse(x, y, 60, 30);
  noStroke();
  fill('#2C1A11');
  ellipse(x, y, 30);
  pop();
}