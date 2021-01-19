class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.path = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
var Position
    super.display();
    if(Status === "released"&&this.body.position.x > 200&&this.body.velocity.x>10) {
      Position = [this.body.position.x, this.body.position.y]
      this.path.push(Position)
    }
    
    for(var I = 0; I < this.path.length; I++) {
      image(this.smokeImage, this.path[I][0], this.path[I][1] )
    }
      
    
  }
}
