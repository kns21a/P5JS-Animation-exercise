function setup() {
  createCanvas(1319, 694);

  let cnv = createCanvas(1319, 694);;
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();


}
function draw(){
  rect(282.65, y, 10, 10);

  rect(471.08, y, 10, 10);

  rect(1319/2, y, 10, 10);

  rect(847.94, y, 10, 10);

  rect(1036.37, y, 10, 10);

  rect(1224.8, y, 10, 10);}

  function draw() {
  background(0);
  fill(255);

  text('tap to start', width/2, 20);

  micLevel = mic.getLevel();
  let y = height - micLevel * height;
  rect(94.22, y, 10, 10);

  rect(282.65, y, 10, 10);

  rect(471.08, y, 10, 10);

  rect(1319/2, y, 10, 10);

  rect(847.94, y, 10, 10);

  rect(1036.37, y, 10, 10);

  rect(1224.8, y, 10, 10);
}
