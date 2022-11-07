let rectPX = 0;
let rectPY = 695/2;
let move = 5
let speed = 5

let rectW2X = 0
let rectW2Y = 317.5
let rectW2Width = 1319
let rectW2Height = 10

let rectW3X = 0
let rectW3Y = 427.5
let rectW3Width = 1319
let rectW3Height = 10

let rectW4X = 1319/2
let rectW4Y = 0
let rectW4Width = 10
let rectW4Height = 100

function setup() {
  createCanvas(1319, 695);
  noCursor();
   rectMode;
}
  
function draw() {
  background(200);
 
  // Start Point
  noStroke()
  fill('ywhite');
  rect (0, 695/2, 60, 60);
  
  // End Point
  noStroke()
  fill('yellow');
  rect (1259, 695/2, 60, 60);
  
  // Player rect
  noStroke();
  fill('white');
    if (keyIsDown(LEFT_ARROW)) {
      rectPX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      rectPX += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      rectPY -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      rectPY += 5;
    }
    rect(rectPX, rectPY, 30, 30);

    // Window Barrier
  if (rectPX < 0){
    rectPX = rectPX + move
  } // left

  if (rectPX > 1299){
    rectPX = rectPX - move
  } // Right

  if (rectPY < 0){
    rectPY = rectPY + move
  } // Top

  if (rectPY > 665){
    rectPY = rectPY - move
  } // Bottom
  
    //Maze wall
  fill ('white')
  rect(rectW2X, rectW2Y, rectW2Width, rectW2Height)

//   if(rectPX > rectW2X - rectW2Width && rectPX < rectW2X + rectW2Width && rectPY > rectW2Y - rectW2Height && rectPY < rectW2Y + rectW2Height){
//   move = move*-1;
// }
  fill ('white')
  rect(rectW3X, rectW3Y, rectW3Width, rectW3Height)

  // if(rectPX > rectW3X - rectW3Width && rectPX < rectW3X + rectW3Width && rectPY > rectW3Y - rectW3Height && rectPY < rectW3Y + rectW3Height){
  //   move = move*-1;
  // }

  // rectW4Y += speed; 

  fill ('white')
  rect(rectW4X, rectW4Y, rectW4Width, rectW4Height)

  // if(rectW4Y > 655 || rectW4Y < 0) {
  //   speed += -1;
  // }

}
