var score=0;

var alien,grass, ground;
var alienImg,grassImg;
var edges;

function preload(){
  alienImg = loadImage("image1.png");
  grassImg = loadImage("image2.png");
}

function setup() {
  createCanvas(400, 400);
  
  ground= createSprite(0,390,1000,30);
  ground.shapeColor="green";
  
  alien = createSprite(200, 50);
  alien.addImage(alienImg);
  alien.scale = 0.3;

  grass=createSprite(200,380);
  grass.addImage(grassImg);
  grass.scale=0.2;
}

function draw() {
  background("black");
  
  edges = createEdgeSprites();
  alien.bounceOff(edges[0]);
  alien.bounceOff(edges[1]);
  
  grass.velocityY=-5;
  
  if(keyDown("RIGHT_ARROW")){
      alien.velocityX=4;
    }
  if(keyDown("LEFT_ARROW")){
    alien.velocityX=-4;
  }
  
  stroke("black");
  textSize(22);
  fill("white");
  text("Score: " +score,10,200);
  
  if (grass.isTouching(alien)){
   grass.x=random(30,360);
    
   grass.y=380;
  }
  
  if (grass.y<0){
    background("red");
    textSize(30);
    fill("black");
    text("YOU LOST !",130,200);
  }
  
  drawSprites();
}
