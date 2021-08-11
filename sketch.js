const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX,y:mouseY});
}

function draw() {
  background(0);
  
}

