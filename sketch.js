const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var blower;
var Button; 
var blower_mouth;
var ball;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  blower= new Blower(500, 200, 40, 60);
  Button= createButton("Click to Blow");
  Button.position(width/2, height-180);
  Button.class("blowButton");
  Button.mousePressed(blow);
  blower_mouth= new BlowerMouth(200, 300,50,90);
  ball= new Ball(550,250,30);


}

function draw() {
  background(255,255,255);  
  //drawSprites();
  blower.show();
  blower_mouth.show();
  ball.display()
}

function blow(){
  Matter.body.applyForce(ball.body,{x: 0, y:0}, {x:0, y:0.05});
}