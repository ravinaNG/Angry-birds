let ground;
let box;
let bird;

function setup(){
    createCanvas(1300,570);
    ground=new Ground(0, height-20, width-20, 15);
    box = new Box(1200, 450,40,90);
    bird = new Bird(50,510,50);
}
function draw(){
    background(-50);
    box.show();
    bird.show();
    ground.show();
}


