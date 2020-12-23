
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1,side2,side3;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,30);
	
	
	side1 = createSprite(700,680,100,20);
	side1.shapeColor = "green";
	side2 = createSprite(650,650,20,100);
	side2.shapeColor = "green";
	side3 = createSprite(750,650,20,100);
	side3.shapeColor = "green";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
    
	
  drawSprites();
  ground.display();
  paper.display();
}



