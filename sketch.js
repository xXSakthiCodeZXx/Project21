var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(32,52);

  bullet = createSprite(100, 200, 30, 15);
  bullet.shapeColor = color(255,255,255);

  thickness = random(22,83);

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = color(80,80,80);

  state = 1;
}

function draw() {
  background(80,80,255);  

  if(keyDown("space") && bullet.x === 100) {
    bullet.velocityX = speed;
  }

  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(isTouching(bullet,wall)) {

    bullet.x = wall.x - wall.width/2 - bullet.width/2 +1;
    bullet.velocityX = 0;
    
    textSize(30);

    text("Damage:" + Math.round(damage),700,80);
    text("Speed:" + Math.round(speed),900,80);
    text("Weight:" + Math.round(weight),1100,80);
  }

  if(damage < 5 && isTouching(bullet,wall)) {
    wall.shapeColor = "green";
  } else if(damage > 5 && damage < 10 && isTouching(bullet,wall)) {
    wall.shapeColor = "yellow";
  } else if(damage > 10 && isTouching(bullet,wall)) {
    wall.shapeColor = "red";
  } 

  drawSprites();

}

