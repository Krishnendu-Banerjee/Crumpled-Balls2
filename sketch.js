
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground; 
var dustbinIMG, dustbinSprite, paperIMG, paperSprite;

function preload()
{
	dustbinIMG= loadImage("images/dustbingreen.png");
	paperIMG= loadImage("images/paperimage.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	paper=new Paper(100, 100, 20)
	

	stand1= new Dustbin(600, 580, 190, 20 );
	stand2= new Dustbin(505, 515, 20, 150);
	stand3= new Dustbin(695, 515, 20, 150);

	ground=new Ground(400, 600, 800, 20);
	dustbinSprite=createSprite(600, 525, 190, 70);
	dustbinSprite.addImage(dustbinIMG);
	dustbinSprite.scale= 0.5;

	paperSprite=createSprite(paper.body.position.x, paper.body.position.y,  50, 50);
	paperSprite.addImage(paperIMG);
	paperSprite.scale=0.5;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paperSprite.x=paper.body.position.x;
  paperSprite.y=paper.body.position.y;

  if (keyDown(UP_ARROW)){
	  keypressed();
  }
  
  drawSprites();
 ground.display();
 
 stand2.display();
 stand3.display();
}
function keypressed(){
	if(keyCode== UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:5, y:-10});
	}
}



