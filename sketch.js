let butik;

function setup() {
  createCanvas(500, 600);
  butik = new Butik();
}

function draw() {
  background(220);
  butik.butik();
}


function mousePressed(){
  butik.klik();
}