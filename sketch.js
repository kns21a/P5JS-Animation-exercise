function setup() {
  createCanvas(1319, 695);
  noCursor();
  frameRate(50);


}

function draw() {
  background(0, 59);
  noStroke();
  fill(200, 45, 10);
  rect(0, 0, 359.5, 347.5);
  rect(959.5, 0, 400, 1000);
  rect(500, 380, 400, 1000)
  erase();
  rect(mouseX, mouseY, pmouseX, [pmouseY]);
  print(pmouseX + ' -> ' + mouseX);
  describe(`line trail is created from cursor movements.
    faster movement make longer line.`);
    noErase();
    rect(959.5, 347.5, 1000, 1000);
    rect(347.5, 0, 359.5, 347.5);
    rect(300, 0, 50, 1000)
}
