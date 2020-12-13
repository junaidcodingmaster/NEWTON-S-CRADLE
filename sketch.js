
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

MetalBall1=new MetalBall(300,350,50);
MetalBall2=new MetalBall(350,350,50);
MetalBall3=new MetalBall(400,350,50);
MetalBall4=new MetalBall(450,350,50);
MetalBall5=new MetalBall(500,350,50);

  ground1 = new Ground(400,100,300,15);
  thread1= new Thread(MetalBall1.body,ground1.body,-50*2,0);
  thread2= new Thread(MetalBall2.body,ground1.body,-25*2,0);
  thread3= new Thread(MetalBall3.body,ground1.body,-0*2,0);
  thread4= new Thread(MetalBall4.body,ground1.body,25*2,0);
  thread5= new Thread(MetalBall5.body,ground1.body,50*2,0);
	Engine.run(engine);
  
}


function draw() {
  background("white");
  rectMode(CENTER);
  Engine.update(engine);
  MetalBall1.display();
  MetalBall2.display();
  MetalBall3.display();
  MetalBall3.display();
  MetalBall4.display();
  MetalBall5.display();

  ground1.display();
  thread1.display();
  thread2.display();
  thread3.display();
  thread4.display();
  thread5.display();

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyDown("space")) 
	{ Matter.Body.applyForce(MetalBall1.body,MetalBall1.body.position,{x:-40,y:50}); } 
} 




