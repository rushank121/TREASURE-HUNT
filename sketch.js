var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  cave = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  fill("golden");
  textSize(20);
  text("SCORE:-> " + score,460,250);

  if(score===3){
    clear();
    background(cave);
    fill("black");
    textSize(35);
    text("!TREASURE_UNLOCKED!,NOW_ENJOY!",250,250)
  }

  drawSprites()
}