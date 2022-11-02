
let y= 0;
let speed = 3

function setup() {
  createCanvas(1319, 695);
 rectMode
}

function draw() {
  background(0);
  
  fill('yellow')
  rect(94.22, 347.5, 40, 40);
  
  fill('orange')
  rect(282.65, 547.5, 40, 40);
  
  fill('red')
  rect(471.08,147.5, 40, 40);
 
  fill('purple')
  rect(1319/2, 447.5, 40, 40);
  
  fill('blue')
  rect(847.94, 347.5, 40, 40);
  
  fill('green')
  rect(1036.37, 247.5, 40, 40);
 
  fill('white')
  rect(1224.8, 647.5, 40, 40);

  y += speed;

  fill('yellow');
  rect(94.22, y*1.5, 40, 40);

  fill('orange')
  rect(282.65, y*2, 40, 40);
  
  fill('red')
  rect(471.08, y, 40, 40);

  fill('purple')
  rect(1319/2, y*1.5, 40, 40);

  fill('blue')
  rect(847.94, y*2.5, 40, 40);

  fill('green')
  rect(1036.37, y, 40, 40);

  fill('black')
  rect(1224.8, y*1, 40, 40);
  
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