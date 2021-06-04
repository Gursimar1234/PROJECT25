class Paper {
    constructor(x,y,radius) {
        var options = {
            restitution : 0.5,
            friction : 0.3,
            density : 0.3,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("paper.png");
        this.radius = radius+5;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        angleMode(RADIANS);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);

    }
}