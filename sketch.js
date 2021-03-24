var blob;
var mode = 0;
var blobs = [];
var zoom = 1;
var input;
var name;

function setup() {
  createCanvas(600, 600);
  input = createInput();
  input.changed(newText);
  blob = new Blob(0, 0, 64);
  for (var i = 0; i < 200; i++) {
    var x = random(-width, width);
    var y = random(-height, height);
    blobs[i] = new Enemy(x, y, 16);
  }
}

function draw() {

  clear();
  if (mode == 0){
    textAlign(CENTER);
    textSize (30);
    text('enter your name in the textbox\nbelow to start', 300, 300);
    textSize(20);
    text('(submit with enter)', 300, 500);
    fill(0);
  }
  else if (mode == 1){
  background(0);
  translate(width / 2, height / 2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  for (var i = blobs.length - 1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    }
  }

  blob.show();
  blob.update();
}

}

function newText(){
  name = input.value();
}

function keyPressed(){
  if(keyCode === ENTER){
    mode = 1;
  }
}

name = ' ';
