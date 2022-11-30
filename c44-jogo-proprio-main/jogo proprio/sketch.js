
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bgimg;
var silent, silentImg;
var computerImg
var computer
var john_doe
var jane_doe
var john_doeImg
var jane_doeImg
var virus, virusImg, virusgp
var virus2,virusgp2
var anti_virus, anti_virusImg, anti_virusgp
var enemys, enemys2
var parede1, parede2
var enemysgp
function preload() {
  bgimg = loadImage("codes.png")
  silentImg = loadImage("personagem5.png");
  computerImg = loadImage("computer.png");
  jane_doeImg = loadImage("jane_Doe.png");
  john_doeImg = loadImage("john_doe.png");
  virusImg = loadImage("virus.jpeg");
  anti_virusImg = loadImage("anti_virus.png");
}

function setup() {
  createCanvas(1705, 775);
  engine = Engine.create();
  world = engine.world;

  silent = createSprite(1500, 700, 20, 100);
  silent.addImage(silentImg);
  silent.scale = 0.5;

  computer = createSprite(1650, 380, 20, 40);
  computer.addImage(computerImg);
  computer.scale = 0.7;
  computer.depth = silent.depth - 1;

  john_doe = createSprite(77, 471, 20, 100);
  john_doe.addImage(john_doeImg);
  john_doe.scale = 0.4;
  john_doe.velocityY = 2

  jane_doe = createSprite(77, 280, 20, 100);
  jane_doe.addImage(jane_doeImg);
  jane_doe.scale = 0.5;
  jane_doe.velocityY = -4

  parede1 = createSprite(700, 0, 2020, 10)
  parede2 = createSprite(700, 770, 2020, 10)
  parede1.visible = false
  parede2.visible = false

  enemysgp = new Group()
  virusgp = new Group()
  virusgp2 = new Group()
  anti_virus = new Group()

  enemysgp.add(jane_doe)
  enemysgp.add(john_doe)
}

function draw() {
  background(0);
  background(bgimg);

  jane_doe.bounceOff(parede1)
  jane_doe.bounceOff(parede2)
  john_doe.bounceOff(parede1)
  john_doe.bounceOff(parede2)
  move()
  virus3()
  virus1()
  anti_Virus()
  drawSprites()
  text("X: " + mouseX + "/ Y: " + mouseY, mouseX, mouseY);
}

function move() {
  if (keyIsDown(UP_ARROW) && this.silent.y > 90) {
    silent.y -= 5;
  }
  if (keyIsDown(LEFT_ARROW) && this.silent.x > 53) {
    silent.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW) && this.silent.x < 1500) {
    silent.x += 5;
  }
  if (keyIsDown(DOWN_ARROW) && this.silent.y < 710) {
    silent.y += 5;

  }

}

function virus1 (){
  if (frameCount%100 == 0) {
    virus = createSprite(jane_doe.position.x,jane_doe.position.y,20,100)
    virus.addImage("virus",virusImg)
    virus.scale = 0.2
    virus.velocityX = 10
    virus.lifetime = width/virus.velocityX
    virus.setCollider("circle",0,0,50)
    virusgp.add(virus)
  }
}

function virus3 (){
  if (frameCount%140 == 0) {
    virus2 = createSprite(john_doe.position.x,john_doe.position.y,20,100)
    virus2.addImage("virus",virusImg)
    virus2.scale = 0.3
    virus2.velocityX = 10
    virus2.lifetime = width/virus2.velocityX
    virus2.setCollider("circle",0,0,50)
    virusgp2.add(virus2)
  }
}

function anti_Virus (){
  if (keyDown("space")) {
    anti_virus = createSprite(silent.x,silent.y)
    anti_virus.addImage("anti_virus",anti_virusImg)
    anti_virus.scale = 0.2
    anti_virus.velocityX = -20
    anti_virus.lifetime = width/anti_virus.velocityX
    anti_virusgp.add(anti_virus)
  }
}