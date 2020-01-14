const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var raindrops = [];
var engine, world;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,20,1200,20)
  createSprite(400, 200, 50, 50);
}

function draw() {
  Random_x = Math.round(random(0,1200));
  Random_y = Math.round(random(0,400));

  raindrops.push(new RainDrop(Random_x,Random_y))
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();
}

function RainDrop(x,y,options){ 
  var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, 5,10, options);

  World.add(world, this.body);

  this.show = function() {

    var pos = this.body.position;  
    var angle = this.body.angle;
    push();
    translate(pos.x, this.pos.y);
    rotate(angle);

    rect(0,0,5,10)
    pop();
  } 
}