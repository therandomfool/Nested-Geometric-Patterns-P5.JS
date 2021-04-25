let angle=0
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  
}

function draw() {
  background(0);

  for (let i = 50; i < mouseX; i += 50) {
    for (let j = 50; j < mouseY; j += 50) {
      noFill()
      stroke(mouseX - i, i, mouseY - j)
      strokeWeight(3)
      
      let d =dist(mouseX,mouseY,i+width/2,j+height/2)
      
      let r=d/5
      push()
      translate(i, j)
      rotate(-angle)
      rect(0, 0, r, r)
      pop()
      
      push()
      translate(i, j)
      rotate(angle)
      rect(0, 0, r, r)
      pop()
      
      angle+=0.0003
      
    }
  }

}