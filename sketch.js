
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(600,700,1200,30)
     box = new Box(770,670,250,30)
	 box1 = new Box(900,600,30,170)
	 box2 = new Box(650,600,30,170)
	 paper = new Paper(200,200,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255   );
  ground.display()
  box.display() 
  box1.display()
  box2.display()
  paper.display()
  drawSprites();
 
}

function keyPressed(){

	if (keyCode==32){
       
		Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-150})

	}


}


