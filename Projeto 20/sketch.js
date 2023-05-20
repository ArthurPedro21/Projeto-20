
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//criando corpos do plano e bloco
var plano

var block1,block2,block3;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options = {

		isStatic:true
	
	}

	var block1_options = {

		restitution:0.5,
		friction:0.02,
		frictionAir:0
	
	}
	
	var block2_options = {
	
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	
	}
	
	var block3_options = {
	
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	
	}

plano = Bodies.rectangle(200,390,400,20,plane_options);
World.add(world,plano);

block1 = Bodies.circle(210,50,30,block1_options)
World.add(world,block1);

block2 = Bodies.rectangle(100,50,50,50,block2_options)
World.add(world,block2);

block3 = Bodies.rectangle(340,50,50,50,block3_options)
World.add(world,block3);

	Engine.run(engine);
    Engine.update(engine);
}


function draw() {
  ellipseMode(RADIUS);
  rectMode(CENTER);
  background("lightGreen");

  fill("red");
  rect(block2.position.x,block2.position.y,50,50);
  fill("blue")
  rect(block3.position.x,block3.position.y,50,50);
  fill("yellow")
  ellipse(block1.position.x,block1.position.y,30)
  drawSprites();
}



