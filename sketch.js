const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var plinkos=[];
var divisions=[];
var particles=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  Engine.update(engine);
  
for(var k=0; k<=width; k=k+80 ){
  divisions.push(new Division(k, height-divisionHeight/2,10, divisionHeight));
}

for(var j=40; j<=width; j=j+50){
  plinkos.push(new Plinko(j,75));
}

for(var j=15; j<=width; j=j+50){
  plinkos.push(new Plinko(j,175));
}

for(var j=0; j<particles.length; j++){
  //plinkos.push(new Plinko(j,75));
particles[j].display();
}

for(var k=0; k<divisions.length; k++){
  //plinkos.push(new Plinko(j,75));
divisions[k].display();
}

  drawSprites();
}