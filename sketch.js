let ground;
let box;

let bird;

function setup(){
    createCanvas(1300,570);
    ground=new Box(0, 540, 1250, 15);
    box = new Box(1200, 450, 50, 90); 
    box2 = new Box(1200-100, 450, 50, 90);
    box3 = new Box(1200-50, 450-90, 50, 90);
    bird = new Bird(50,510, 50);
}
function draw(){
    background(-50);
    box.show();
    box2.show();
    box3.show();
    bird.show();
    ground.show();
}


