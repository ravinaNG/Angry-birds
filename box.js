class Box{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    show(){
        fill(555);
        rect(this.x,this.y,this.width,this.height);
    }
}