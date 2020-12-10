class Rope {
    constructor (body1,body2, offsetX, offsetY)
    {
      this.offsetX = offsetX
      this.offsetY = offsetY
        var options = {
            'bodyA' : body1,
            'bodyB' : body2,
            pointB : {x : this.offsetX, y : this.offsetY}
            //'stiffness' : 0.5,
            //'length' : 20
        }
        this.Rope = Constraint.create(options)
        World.add(world,this.rope)
       // this.pointB = B
        //console.log(this.Rope.bodyA.position)
    }
    display(){
      if (this.Rope.bodyA){
        var p1 = this.Rope.bodyA.position
        var p2 = this.Rope.pointB
        strokeWeight(4)
        line(p1.x,p1.y,p2.x,p2.y)
      }
    }
}