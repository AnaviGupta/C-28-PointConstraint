class Slingshot{
    constructor(bodyA, PB){
        var options = {
            bodyA: bodyA,
            pointB: PB,
            stiffness: 0.04,
            length: 10
        }
        this.ABC= PB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA !== null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.ABC;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly(){
        this.sling.bodyA=null

    }
}
