class Ground{
    constructor(x,y,width,heigth){
        this.x=x;
        this.y=y;
        this.width=width;
        this.heigth=heigth;
    }
    show(){
        fill(255);
        rect(this.x,this.y,this.width,this.heigth);
    }
}