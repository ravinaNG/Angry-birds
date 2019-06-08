class Bird{
    constructor(x,y,redious){
        this.x=x;
        this.y=y;
        this.redious=redious;
        
    }

    show(){
        fill(255);
        circle(this.x,this.y,this.redious);
    }
}
