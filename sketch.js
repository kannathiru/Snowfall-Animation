var snowflake,snowflakeImg,snowflakeImg2,snowflake2;
var bgImg


function preload() {
  snowflakeImg = loadImage("snow4.webp");
  bgImg = loadImage("snow2.jpg");
  snowflakeImg2 = loadImage("snow5.webp")
}
function setup() {
  createCanvas(1350,600);
  
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
  createsnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,1350), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}
function createsnowflake(){
  if(frameCount%10 === 0){
    snowflake2 = createSprite(random(0,1350), 0, 50, 50);
    snowflake2.velocityX = -2;
    snowflake2.velocityY = 4;
    snowflake2.addImage(snowflakeImg2);
    snowflake2.scale = 0.1 ;
  }
}
