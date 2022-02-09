//skintone #DCA785
//haircolor #2C1A11

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#767522");
  noStroke();

  // draw hair under face
  drawHairUnder();

  // draw neck
  fill('#C49576'); // shadowed skin color
  rectMode(CENTER);
  rect(width/2, height/2 + 300, 120, 500);

  //draw shoulders
  fill('black');
  rect(width/2, height/2 + 550, 480, 700, 90);
    // collar
  fill('#C49576');
  ellipse(width/2, height/2 + 200, 120);
  
  // draw face
  drawFace();

  // draw ears
  fill('#dca785')
  noStroke();
    // right
  // push();
  // rotate(PI / 10);
  ellipse(width/2 + 135, height/2 - 5, 50, 70);
  // pop();
    // left
  // push();
  // rotate(PI / -100);
  ellipse(width/2 - 135, height/2 - 5, 50, 70);
  // pop();

  // earrings
  stroke('yellow');
  strokeWeight(4);
    // hoops
  line(width/2 - 135, height/2 + 25, width/2 - 135, height/2 + 40);
  line(width/2 + 135, height/2 + 25, width/2 + 135, height/2 + 40);
    // studs
  line(width/2 - 145, height/2 + 20, width/2 - 145, height/2 + 23);
  line(width/2 + 145, height/2 + 20, width/2 + 145, height/2 + 23);

  // draw hair on top of face
  fill('#2C1A11');
  noStroke();
  beginShape();
  vertex(width/2 - 5, height/2 - 200);
  vertex(width/2 - 110, height/2 - 90);
  vertex(width/2 - 150, height/2 - 25);
  vertex(width/2 - 150, height/2 - 100);
  vertex(width/2 - 120, height/2 - 150);
  vertex(width/2 - 10, height/2 - 210);
  endShape(); 
  beginShape();
  vertex(width/2 + 5, height/2 - 200);
  vertex(width/2 + 110, height/2 - 90);
  vertex(width/2 + 150, height/2 - 25);
  vertex(width/2 + 150, height/2 - 100);
  vertex(width/2 + 120, height/2 - 150);
  vertex(width/2 + 10, height/2 - 210);
  endShape(); 

  // draw nose
  drawNose();

  // draw mouf
  drawMouth();

  // draw eyeliner
  fill("black");
  noStroke();
    // left
  beginShape();
  vertex(width/2 - 100, height/2 - 50);
  vertex(width/2 - 118, height/2 - 53);
  vertex(width/2 - 110, height/2 - 47);
  endShape();
    // right
  beginShape();
  vertex(width/2 + 100, height/2 - 50);
  vertex(width/2 + 118, height/2 - 53);
  vertex(width/2 + 110, height/2 - 47);
  endShape();

  // draw eyes
    // left
  drawEye(width/2 - 80, height/2 - 50);
    // right
  drawEye(width/2 + 80, height/2 - 50);

  // draw eyebrows
  drawBrows();

  // mask interaction
  if(mouseX > width/2 - 225 && mouseX < width/2 + 225 && mouseY < height/2 + 100 && mouseY > height/2 - 25){
    fill('black'); 
    // stroke('black');
    // strokeWeight(2);
    beginShape();
    vertex(width/2, height/2 - 25);
    vertex(width/2 - 143, height/2 - 5);
    vertex(width/2 - 100, height/2 + 100);
    vertex(width/2, height/2 + 150);
    vertex(width/2 + 100, height/2 + 100);
    vertex(width/2 + 143, height/2 - 5);
    endShape();
  }

}

function drawHairUnder(){
  fill('#2C1A11'); //hair
  ellipse(width/2, height/2 , 350, 450);
  quad(width/2 - 175, height/2, width/2 - 200, height/2 + 300, width/2 + 200, height/2 + 300, width/2 + 175, height/2);
}

function drawFace(){
  fill("#dca785"); // skintone
  ellipse(width/2, height/2 - 50, 290);
  beginShape();
  vertex(width/2 - 143, height/2 - 25);
  vertex(width/2 - 100, height/2 + 100);
  vertex(width/2, height/2 + 150);
  vertex(width/2 + 100, height/2 + 100);
  vertex(width/2 + 143, height/2 - 25);
  endShape();
}

function drawNose(){
  stroke('#a2644b');
  noFill();
  strokeWeight(3);
  line(width/2 - 10, height/2 - 50, width/2 - 10, height/2 + 15);
  arc(width/2, height/2 + 30, 60, 20, PI, 0);
}

function drawMouth(){
  fill('#DA627D');
  noStroke();
  ellipse(width/2, height/2 + 80, 75, 20);
  stroke("#A53860");
  noFill();
  arc(width/2, height/2 + 75, 80, 10, 0, PI);
}

function drawBrows(){
  fill('#2C1A11');
  noStroke();
    //right
  beginShape();
  vertex(width/2 - 95, height/2 - 90);
  vertex(width/2 - 35, height/2 - 90);
  vertex(width/2 - 35, height/2 - 82);
  vertex(width/2 - 95, height/2 - 82);
  vertex(width/2 - 120, height/2 - 77);
  endShape();
    //left
  beginShape();
  vertex(width/2 + 95, height/2 - 90);
  vertex(width/2 + 35, height/2 - 90);
  vertex(width/2 + 35, height/2 - 82);
  vertex(width/2 + 95, height/2 - 82);
  vertex(width/2 + 120, height/2 - 77);
  endShape();
}

function drawEye(x, y) {
  push();
  fill('white');
  noStroke();
  // stroke('black');
  ellipse(x, y, 60, 25);
  noStroke();
    // iris
  fill('#2C1A11');
  ellipse(x, y, 25);
    // pupil
  fill('black');
  ellipse(x, y, 10);
  pop();
}