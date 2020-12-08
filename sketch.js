const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var b1a,b2a,b3a,b4a,b5a,b6a,b7a,b8a,b9a;
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var bg;
function preload(){
  polygon_img=loadImage("polygon.png");
  bg=loadImage("bg.jpg");
}
function setup() {
  createCanvas(1800,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(1000,480,300,20);
  stand2 = new Stand(1550,260,300,20);
 
  //level3
  b1 = new Block(1000,440,50,60);
  b2 = new Block(950,440,50,60);
  b3 = new Block(900,440,50,60);
  b4 = new Block(1050,440,50,60);
  b5 = new Block(1100,440,50,60);
  //level 2
  b6 = new Block(1000,380,50,60);
  b7 = new Block(950,380,50,60);
  b8 = new Block(1050,380,50,60);
  //level 1
  b9 = new Block(1000,320,50,60);


  //level3
  b1a = new Block(1550,220,50,60);
  b2a = new Block(1500,220,50,60);
  b3a = new Block(1450,220,50,60);
  b4a = new Block(1600,220,50,60);
  b5a = new Block(1650,220,50,60);
  //level 2
  b6a = new Block(1550,160,50,60);
  b7a = new Block(1500,160,50,60);
  b8a = new Block(1600,160,50,60);
  //level 1
  b9a = new Block(1550,100,50,60);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:200,y:300});

}
function draw() {
  background(bg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(30);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks!",430,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  fill("pink")
  b6.display();
  b7.display();
  b8.display();
  fill("turquoise")
  b9.display();
  fill("skyblue")
  b1a.display();
  b2a.display();
  b3a.display();
  b4a.display();
  b5a.display();
  fill("turquoise")
  b6a.display();
  b7a.display();
  b8a.display();
  fill("pink")
  b9a.display();
  slingShot.display();
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,90,90);
  keyPressed();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.ball.body);
  }
}