const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var raindrops = [];
var engine, world;
var i;

function setup() {
  var canvas = createCanvas(1920,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(960,760,1920,50);

}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  

  Random_x = Math.round(random(0,1920));
  Random_x1 = Math.round(random(0,1920));
  Random_x2 = Math.round(random(0,1920));
  Random_x3 = Math.round(random(0,1920));

    r = Math.round(random(0,250));
    b = Math.round(random(0,250));
    g = Math.round(random(0,250));

  if(frameCount % 10 === 0){
    raindrops.push(new RainDrop(Random_x,0));
    console.log(ground);
} 
  
if(frameCount % 5 === 0){
  raindrops.push(new RainDrop(Random_x1,0));
  console.log(ground);
} 
if(frameCount % 3=== 0){
  raindrops.push(new RainDrop(Random_x2,0));
  console.log(ground);
} 

if(frameCount % 7=== 0){
  raindrops.push(new RainDrop(Random_x3,0));
  console.log(ground);
} 

  for (i = 0; i < raindrops.length; i++) {
    raindrops[i].show();
    if (raindrops[i].y >= 349){
      Matter.World.remove(Engine,raindrops[i]);
    }
  }

}



function RainDrop(x,y,options){ 

  var options = {
      'restitution':0.2,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, 5,30, options);

  World.add(world, this.body);

  this.show = function() {

    var pos = this.body.position;  
    var angle = this.body.angle;

      fill(r,g,b);
    
    noStroke();
    push();
    translate(pos.x, pos.y);
    rotate(angle);

    rect(0,0,5,30);
    pop();
  } 
  this.show();
}

