const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions=[];
var divisionHeight=300;
var particles=[];
var plinkos=[];
var line;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,690,800,20);
    
    for(var i= 0;i<=width;i=i+80){
      division.push(new Division(i,height-divisionsHeight/2,10,divisionHeight));
    }
    for(var j=75;j<=width;j=j+50){
      plinkos.push(new Plinko(j,75));
    }
    for(var j=50;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,175));
    }
    for(var j=75;j<=width;j=j+50){
      plinkos.push(new Plinko(j,275));
    }
    for(var j=50;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,375));
    }


    Engine.run(engine);
    
    /*ball1 = new Box(700,320,70,70);
    ball2 = new Box(920,320,70,70);
    ball3 = new Pig(810, 350);
    ball4 = new Log(810,260,300, PI/2);
    ball5 = new Box(700,240,70,70);
    ball6 = new Box(920,240,70,70);*/
}

function draw(){
    rectMode(CENTER)
    background(0);

drawSprites();

for(var n=0;n<divisions.length;n++){
  divisions[n].display();
}
if(framecount %60 === 0){
  particles.push(new Particle(random(width/2-30,width/2-30),10,10))
}
for(var h=0;h<particle.length;h++){
  division[h].display();
}
for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
}
}

ground.display();