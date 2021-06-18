var bg;
var snow ;

function preload(){
  bg=loadImage("snow2.jpg");
}


function setup() {
  createCanvas(900,400);
 
}

function draw() {
  background(bg); 
 

  if(frameCount%60===0){
    snow.push(new snowFlakes(random(width/2-20, width/2+20), 10,10));
    
  }

  drawSprites();
}