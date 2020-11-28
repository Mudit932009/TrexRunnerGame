var trex,trexImage;
var ground,groundImage;
var edges
var invisibleGround
var cloudImage
var cactusImage1,cactusImage2,cactusImage3,cactusImage4,cactusImage5,cactusImage6


function preload(){
 trexImage=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png")
  cloudImage=loadImage("cloud.png")
  cactusImage1=loadImage("obstacle1.png")
  cactusImage2=loadImage("obstacle2.png")
  cactusImage3=loadImage("obstacle3.png")
  cactusImage4=loadImage("obstacle4.png")
  cactusImage5=loadImage("obstacle5.png")
  cactusImage6=loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600,200);
 trex=createSprite(40,180);
 trex.addAnimation("running",trexImage) 
  trex.scale=0.5
  ground=createSprite(40,180)
  ground.addImage(groundImage)
  invisibleGround=createSprite(40,185,600,5);
  invisibleGround.visible=false
  
}

function draw() {
  background("white")
 edges= createEdgeSprites();
  ground.velocityX=-5;
if(keyDown("space")&&trex.y>110) {
  trex.velocityY=-3;
}
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  spawnCloud();
  makeObstacle();
//add gravity  
 trex.velocityY=trex.velocityY+0.8; 
  trex.collide(invisibleGround);
  drawSprites();
}

function spawnCloud(){
  if(frameCount%60===0){
 var cloud=createSprite(600,100);
  cloud.velocityX=-3;
  cloud.y=random(20,150)
  cloud.addImage(cloudImage);
  cloud.scale=0.5; 
    trex.depth=cloud.depth;
    trex.depth=trex.depth+1;
    trex.lifetime=200;
    
  }
  
}

function makeObstacle(){
 if(frameCount%60===0){
  var obstacle= createSprite(600,160);
   obstacle.scale=0.5;
   
   obstacle.velocityX=-3;
   var rand=Math.round(random(1,6));
   switch(rand){
     case 1 :obstacle.addImage(cactusImage1);
       break;
       case 2 :obstacle.addImage(cactusImage2);
       break;
       case 3 :obstacle.addImage(cactusImage3);
       break;
       case 4:obstacle.addImage(cactusImage4);
       break;
       case 5:obstacle.addImage(cactusImage5);
       break;
       case 6 :obstacle.addImage(cactusImage6);
       break;
       
       default:
       break;
   }
   
 } 
}

