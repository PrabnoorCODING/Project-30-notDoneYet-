
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box;


function setup() {
  createCanvas(400,400);
  
  
  box = createSprite(200,20);
  box.scale = 0.2;

  engine = Engine.create();
  world = engine.world;
   

  
}


function draw() 
{
  background(65);
  Engine.update(engine);
  
  drawSprites();
}

