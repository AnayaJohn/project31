class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      //this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      circleMode(CENTER);
      fill("white");
      circle(pos.x, pos.y, this.radius);
    }
  };