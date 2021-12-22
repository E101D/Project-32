class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life4 = "blue";
    this.life5 = "blue";
    this.life6 = "blue";

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(20);
    fill("white");
    text("Player", width - 1250, 40);

    fill(this.life4);
    rect(300, 50, 70, 30);
    fill(this.life5);
    rect(230, 50, 70, 30);
    fill(this.life6);
    rect(160, 50, 70, 30);
    pop();
  }

 


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
