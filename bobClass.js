class Bob {
    constructor (x,y,radius){
    var options = {
        'isStatic' : false,
        'restitution' : 0.1,
        'friction' : 500000,
        'density' : 1.2
    }
    this.body = Bodies.circle(x, y,radius, options);
    this.radius = radius
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    push();
    ellipseMode(RADIUS);
    circle(pos.x,pos.y, this.radius);
    pop();
  }
}
