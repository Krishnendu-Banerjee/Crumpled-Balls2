class Paper{
    constructor(x, y, radius){
        var options={
            isStatic: false,
            Restitution:0.3,
            friction:0.5,
            density:1.2,
        }

        this.body= Bodies.circle(x, y, radius, options)
        this.radius=radius
        World.add(world, this.body)
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius);
        imageMode(CENTER);
        fill("white");
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}