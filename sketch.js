function setup() {
  createCanvas(1319, 694);

  let cnv = createCanvas(1319, 694);;
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}
//the function below is to setup for the browser to recieve audio input via the computers microphone.
// Each rect will need to be altered to recieve specific frequencies to respond. Possible with p5.FFT for frequency analyzsis.
//p5.Filter to filter the frequency response of an input source. (could be used to set frequency parameters for each note.)
//
  function draw() {
  background(0);
  fill(255);

  text('tap to start', width/2, 20);
  //'tap to start' text will be altered.
 
  micLevel = mic.getLevel();
  let y = height - micLevel * height;
  rect(94.22, y, 10, 10);

  rect(282.65, y, 10, 10);

  rect(471.08, y, 10, 10);

  rect(1319/2, y, 10, 10);

  rect(847.94, y, 10, 10);

  rect(1036.37, y, 10, 10);

  rect(1224.8, y, 10, 10);
  //placement of rects are correct but size, color, and reactions to noise will need to be altered.
}

//function draw(){rect(282.65, y, 10, 694); rect(471.08, y, 10, 694); rect(1319/2, y, 10, 694);rect(847.94, y, 10, 694); rect(1036.37, y, 10, 694); rect(1224.8, y, 10, 694);}
// The above function is to create the background bars for each corresponding note.
// needs a function to alter the appearance of each bar as audio input is recieved. For instance a gradiant effect or an altering of the shape/form to indicate that the correct frequancy is recieved.