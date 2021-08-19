var runner,runner_running
var path,pathimg

function preload(){
 pathimg.loadImage("path.png")
 runner_running.loadImage("runner-1.png","runner-2.png") 
}

function setup(){
  createCanvas(400,400);
  path=createSprite(400,250)
  path.addAnimation("path",pathimg)
  runner=createSprite(60,150)
  runner.addAnimation("runner",runner_running)
}

function draw() {
  background(0);
drawSprites()
}
