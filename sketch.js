function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(1);
  stroke(225);

  var x = 0;
  fill(200, 85, 60);
  while (x <= width) {
    ellipse(x, 200, 25, 25);
    x = x + 50;
  }

  var x = 1;
  fill(185, 0, 200);
  while (x <= width) {
    ellipse(x, 300, 30, 50);
    x = x + 50;
  }

  var x = 2;
  fill(75, 90, 200);
  while (x <= width) {
    ellipse(x, 100, 20, 100);
    x = x + 40;
  }

  var y = 3;
  fill(30, 90, 90);
  while (y <= height) {
    ellipse(75, y, 20, 25);
    y = y + 80;
  }

  var y = 4;
  fill(30, 150, 90);
  while (y <= height) {
    ellipse(125, y, 60, 25);
    y = y + 60;
  }

  var y = 5;
  fill(200, 150, 90);
  while (y <= height) {
    ellipse(250, y, 90, 35);
    y = y + 80;
  }

  var y = 6;
  fill(125, 90, 125);
  while (y <= height) {
    ellipse(175, y, 60, 25);
    y = y + 70;
  }

  var y = 7;
  fill(200, 50, 20);
  while (y <= height) {
    ellipse(350, y, 125, 25);
    y = y + 100;
  }

  var y = 8;
  fill(80, 170, 150);
  while (y <= height) {
    ellipse(25, y, 25, 25);
    y = y + 35;
  }

  var x = 9;
  fill(75, 90, 200);
  while (x <= width) {
    ellipse(x, 100, 20, 100);
    x = x + 40;
  }

   var x = 10;
  fill(200, 85, 60);
  while (x <= width) {
    ellipse(x, 200, 25, 25);
    x = x + 50;
  }

  var x = 11;
  fill(185, 0, 200);
  while (x <= width) {
    ellipse(x, 300, 30, 50);
    x = x + 50;
  }


}

