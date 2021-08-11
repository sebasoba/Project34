class Hero {
    constructor(x,y,r){
        {
            var options = {
                density: 1,
                frictionAIr: 1
            };
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
        World.add(world,this.body);
    }

    display(){
     this.body = Bodies.circle;
     this.color = "white";
    }
}
