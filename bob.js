class Bob {
    constructor(x,y,r){
    var options={
    density:0.7,
    restituiton:0.8
    }
    this.radius=r;
    this.bobObject1=Bodies.circle(700,600,30,options);
    World.add(world,this.bobObject1);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
    }