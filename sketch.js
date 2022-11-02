
let y= 0;
let speed = 2

function setup() {
  createCanvas(1319, 695);
 rectMode
}

function draw() {
  background(405);
  
  y += speed;

  fill('yellow');
  line(114.22, 0, 114.22, 695); // line(x1, y1, x2, y2)
  rect(94.22, y, 40, 40);

  fill('orange')
  line(302.65, 0, 302.65, 695); // line(x1, y1, x2, y2)
  rect(282.65, y, 40, 40);
  
  fill('red')
  line(491.08, 0, 491.08, 695); // line(x1, y1, x2, y2)
  rect(471.08, y, 40, 40);

  fill('purple')
  line(679.9, 0, 679.9, 695); // line(x1, y1, x2, y2)
  rect(1319/2, y, 40, 40);

  fill('blue')
  line(867.94, 0, 867.94, 695); // line(x1, y1, x2, y2)
  rect(847.94, y, 40, 40);

  fill('green')
  line(1056.37, 0, 1056.37, 695); // line(x1, y1, x2, y2)
  rect(1036.37, y, 40, 40);

  fill('black')
  line(1244.8, 0, 1244.8, 695); // line(x1, y1, x2, y2)
  rect(1224.8, y, 40, 40);
  
  
  // reverses direction of rect
  if (y > 655 || y < 0) {
    speed *= -1;
  }
}

  //placement of ellipses are corellipse but size, color, and reactions to noise will need to be altered.
  //add an effect that has the rect ocilate between the y of the canvas when audio is recieved (if possible).
  //ocilating speed will corralate with the frequancy input recieved via microphone. 


//function draw(){rect(282.65, y, 40, 694); rect(471.08, y, 40, 694); rect(1319/2, y, 40, 694);rect(847.94, y, 40, 694); rect(4036.37, y, 40, 694); rect(1224.8, y, 40, 694);}
// The above function is to create the background bars for each corresponding note.
// needs a function to alter the appearance of each bar as audio input is recieved. For instance a gradiant effect or an altering of the shape/form to indicate that the corellipse frequancy is recieved.