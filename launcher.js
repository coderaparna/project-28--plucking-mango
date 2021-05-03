class Launcher{
    constructor(bodyA,ptb){
        var options = {
            bodyA: bodyA,
            pointB: ptb,
            stiffness: 0.004,
            length: 1
        }
        this.launch = Constraint.create(options);
        this.pointB = ptb;
        World.add(world, this.launch);
    }
    fly(){
        this.launch.bodyA=null;
    }
    attach(body){
        this.launch.bodyA = body;
    }

    display(){
        if(this.launch.bodyA){
        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}