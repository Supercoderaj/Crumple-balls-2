class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          friction:1.5,
          density:1.0   
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width = radius*2;
      this.height = radius*2;
      World.add(world, this.body);
      this.image=loadImage('paper.png')
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      fill("white");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
