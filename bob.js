class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.5,
      }
      this.body = Bodies.circle(x, y, radius, options);
      
      this.radius=radius
      
      World.add(world, this.body);

      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      pop ()
    }
    
  };
  