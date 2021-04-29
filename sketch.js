
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone;
var BoyImage,MangoImage,TreeImage,StoneImage;
var mango1,mango2,mango3,mango4,mango5;
var sling;


function preload(){
  
	BoyImage = loadImage("sprites/boy.png");
	MangoImage = loadImage("sprites/mango.png");
	TreeImage = loadImage("sprites/tree.png");
	StoneImage = loadImage("sprites/stone.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  //sling = new Stone(StoneImage,{x:100,y:440});
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(BoyImage,100,450,200,200);
  image(TreeImage,340,60,500,550);
  image(MangoImage,450,150,100,100);
  image(MangoImage,500,200,100,100);
  image(MangoImage,650,250,100,100);
  image(MangoImage,630,130,100,100);
  image(StoneImage,100,440,70,70);
  drawSprites();
 
}



