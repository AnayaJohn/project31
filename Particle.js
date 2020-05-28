class Particle {
    constructor(x,y,r) {
      var options = {
          restitution: 0.4
      }
      this.r=r;
      this.body = Bodies.rectangle(x,y,this.r,options);
      //this.radius = radius;
      //this.height = height;
      this.color=color(random(0,255), random(0,255), random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotation(angle);
      noStroke();
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0,0,this.r, this.r);
      //circle(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
