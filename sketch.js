var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(600, 400, 50, 100);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect = createSprite(200, 400,100, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}