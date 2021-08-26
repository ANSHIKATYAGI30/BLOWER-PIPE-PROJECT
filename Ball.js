class Ball{
    constructor(x,y,r){
        var options={
            density: 0.001
        }
        this.body= Bodies.circle(x,y,r,options);
        World.add(world, this.body);
    }
    display(){
        push();
        fill("green");
        ellipse(this.body.position.x, this.body.position.y, w, h);
        pop();
    }
}