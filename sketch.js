
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 400, width, 10 , {isStatic:true} );
	World.add(world, ground);	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



