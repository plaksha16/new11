var runner,runner_running
var path,pathimg

function preload(){
 pathimg=loadImage("path.png")
 runner_running=loadImage("runner-1.png","runner-2.png") 
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,250)
  path.addImage("path",pathimg)
  runner=createSprite(180,150)
  runner.addAnimation("runner",runner_running)
  runner.scale=0.05
  path.scale=1
  path.velocityY=4
 leftboundary=createSprite(10,200,20,400)
 rightboundary=createSprite(350,200,20,400)
 
}

function draw() {
  background(0);

if(path.y>400){
  path.y=200
}
runner.x=World.mouseX
runner.collide(leftboundary)
runner.collide(rightboundary)
drawSprites()
}
