class Bird{
    constructor(x,y,redius){
        this.x=x;
        this.y=y;
        this.redius=redius;
        
    }

    show(){
        fill(255);
        circle(this.x,this.y,this.redius);
    }
}
