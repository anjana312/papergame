class  Paper{
constructor(x,y){
    var options = {
        isStatic:flase,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    
    this.body = Bodies.circle(x,y,radius,[options]);
    this.radius = 0.1;
    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    ellispeMode(RADIUS);
    ellipse(pos.x,pos.y,20,20);
}

}