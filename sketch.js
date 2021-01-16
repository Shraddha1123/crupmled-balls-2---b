
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin1, dustbin2, dustbin3

function preload() {

}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800, 480, 1600, 70);
	paper = new Paper(170, 478, 65);
	dustbin1 = new dustbin(900, 450);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("rgb(255, 20, 147)");

	drawSprites();
	ground.display();
	dustbin1.display();
	paper.display();



}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 199, y: -199 });


	}

}
