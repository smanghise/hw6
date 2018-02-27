var puck = {
  x: 200,
  y: 200,
  xSpeed: 3,
  ySpeed: -1,
  r: 15
};
var edgeOffset = 20;

var player1 = {
  x: edgeOffset,
  y: 200,
  ht: 50,
  wd: 10
};

var player2 = {
  x: 400-edgeOffset,
  y: 200,
  ht: 50,
  wd: 10
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  // draw puck
  ellipse(puck.x, puck.y, puck.r);
  
  if (puck.y < 0 || puck.y > height) {
    puck.ySpeed = -puck.ySpeed;
  }
  
  puck.x += puck.xSpeed;
  puck.y += puck.ySpeed;
  
  // draw paddles
  rect(player1.x, player1.y, player1.wd, player1.ht);
  rect(player2.x, player2.y, player2.wd, player2.ht);
  
}

function keyPressed() {
  if (key == 'Q') {
    player1.y -= 3;
  }
  
  if (key == 'A') {
    player1.y += 3;
  }
}
