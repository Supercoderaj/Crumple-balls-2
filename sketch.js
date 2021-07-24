
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinimg;

function preload()
{
dustbinimg = loadImage('dustbin.png')	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(600,700,1200,30)
     box = new Box(770,670,250,30)
	 box1 = new Box(900,550,30,270)
	 box2 = new Box(650,550,30,270)
	 paper = new Paper(200,200,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display()
  box.display() 
  box1.display()
  box2.display()
  paper.display()
  image(dustbinimg,630,350,300,350)
  drawSprites();
 
}

function keyPressed(){

	if (keyCode==32){
       
		Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-150})

	}


}


