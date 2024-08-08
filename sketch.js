let charmander;
let battleCry
function preload(){
charmander = loadImage("images/charmander.png")
battleCry = loadSound("sounds/battle-cry.mp3")
  
  
}

let xPos = 25;
let direction = 1;

function setup() {
  createCanvas(500, 500);
  background(0);

}

function draw() {
  background(0);
  fill(0, 255, 0);
  // charmander
  imageMode(CENTER)
  image(charmander, xPos, 250, 50, 50)
  xPos += 3 * direction;
  
  if (xPos > 475 || xPos < 25) {
    direction *= -1;
    //battleCry.play()
  }
}
