let ground;
let boxs=[];

let bird;

function setup(){
    createCanvas(1300,570);
    ground=new Ground(0, 540, 1250, 15);
    let x = 1200;
    let y = 450;
    let z = 90;
    for (let i=0;i<3;i++){
        if(i == 2){
            y = y + 90
            boxs[i] = new Box(x, y, 50, 90); 
        }
        if(i==1){
            y = y - 90
            boxs[i] = new Box(x, y, 50, 90);
        }
        boxs[i] = new Box(x, y, 50, 90);
        x = x - 50
    }
    bird = new Bird(50,510, 50);
}
function draw(){
    background(-50);
    for (box of boxs){
        box.show();
    }
    bird.show();
    ground.show();
}


