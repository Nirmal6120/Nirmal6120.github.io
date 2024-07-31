/* Author Name: Nirmal Patel
   Date: 31 July 2024
   Description: Fourth HTML assignment part 3
   Adding features to our bouncing balls demo
*/

// setup canvas
// it will select the canvas document from the file.
const canvas = document.querySelector("canvas");
// get 2d animation from canvas for drawing operations.
const ctx = canvas.getContext("2d");

// set canva width to full width
const width = (canvas.width = window.innerWidth);
// set canva height to full height
const height = (canvas.height = window.innerHeight);

// function to generate random number
function random(min, max) {
    //  it will return a number between min and max number.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color
function randomRGB() {
    // reutrn a random color with RGB format.
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Shape class to define basic properties
class Shape {
    // constructor to create shape of ball
  constructor(x, y, velX, velY) {
    // x-coordinate of the shape
    this.x = x;
    // y-coordinate of the shape
    this.y = y;
    // Horizontal velocity of the shape
    this.velX = velX;
    // Vertical velocity of the shape
    this.velY = velY;
  }
}

// Ball class inheriting from Shape
class Ball extends Shape {
  constructor(x, y, velX, velY, color, size) {
    // it will call the parent class constructor
    super(x, y, velX, velY);
    // it will show the color of the ball
    this.color = color;
    // it will set the size of the ball
    this.size = size;
  }

  draw() {
    // begin new path for the ball.
    ctx.beginPath();
    // set the color of balls
    ctx.fillStyle = this.color;
    // draw balls
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    // fill the color in balls
    ctx.fill();
  }

  // upadte method
  update() {
    // check that the ball hit right wall
    if ((this.x + this.size) >= width) {
        // reverse the horizontal velocity
      this.velX = -this.velX;
    }
    // check that the ball hit left wall
    if ((this.x - this.size) <= 0) {
        // reverse the horizontal velocity
      this.velX = -this.velX;
    }
    // check that the ball hit bottom wall
    if ((this.y + this.size) >= height) {
        // reverse the vertical velocity
      this.velY = -this.velY;
    }
    // check that the ball hit top wall
    if ((this.y - this.size) <= 0) {
        // reverse the vertical velocity
      this.velY = -this.velY;
    }

    // upadte the balls x coordinate based on velocity.
    this.x += this.velX;
    // upadte the balls y coordinate based on velocity.
    this.y += this.velY;
  }

  // collisionDetect method
  collisionDetect() {
    // it will uses for loop through all the balls
    for (const ball of balls) {
        // ensure that the ball is not same.
      if (!(this === ball)) {
        // it will calculate difference between x coordinates.
        const dx = this.x - ball.x;
        // it will calculate difference between y coordinates.
        const dy = this.y - ball.y;
        // find the distance between two balls.
        const distance = Math.sqrt(dx * dx + dy * dy);

         // check if the balls are touching of not
        if (distance < this.size + ball.size) {
            // it change the color to random color on the collision.
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

// EvilCircle class inheriting from Shape
class EvilCircle extends Shape {
    // constructor to create shape for evilcircle
  constructor(x, y) {
    // it will call the parent class constuctor with the velocities.
    super(x, y, 20, 20);
    // set color of the evilcircle
    this.color = 'white';
    // set the size for the ball
    this.size = 10;
    // it will add the event listener for the use of keys 
    window.addEventListener('keydown', (e) => this.setControls(e));
  }

  // method for the evil circle class  
  draw() {
    // begin new path for the ball.
    ctx.beginPath();
    // set the width for the outline.
    ctx.lineWidth = 3;
    // it will set the stroke of the color
    ctx.strokeStyle = this.color;
    // it will draw the evilcircle as an outline
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    // it will draw outline of circle
    ctx.stroke();
  }

  // method for the evil circle class
  checkBounds() {
    // if the evil circle hits the right wall
    if (this.x + this.size >= width) {
        // it will move back by radius.
      this.x -= this.size;
    }
    // if the evil circle hits the left wall
    if (this.x - this.size <= 0) {
        // it will move back by radius.
      this.x += this.size;
    }
    // if the evilcircle hits the bottom wall
    if (this.y + this.size >= height) {
        // it will move back by its radius
      this.y -= this.size;
    }
    // if the evilcircle hits the top wall
    if (this.y - this.size <= 0) {
        // it will move back by its radius
      this.y += this.size;
    }
  }

  setControls(e) {
    switch (e.key) {
        // it will determine the key pressed
      case "a":
        // it will help key to move left
        this.x -= this.velX;
        break;
      case "d":
        // it will let the key move right
        this.x += this.velX;
        break;
      case "w":
        // it will let the element move up
        this.y -= this.velY;
        break;
      case "s":
        // it will let the element move down
        this.y += this.velY;
        break;
    }
  }

  collisionDetect() {
    // it uses for loop to go through all the balls
    for (const ball of balls) {
        // it will calculate the difference between x-coordinates.
      const dx = this.x - ball.x;
      // it will calculate the difference between y-coordinates.
      const dy = this.y - ball.y;
      // it will calculate the distance between circle.   
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ball.size) {
        // it will move ball to random position.
        ball.x = random(0 + ball.size, width - ball.size);
        // it will move ball to random position.
        ball.y = random(0 + ball.size, height - ball.size);
      }
    }
  }
}

// create an array to hold the balls 
const balls = [];
// loop till 25 balls are created.
while (balls.length < 25) {
    // randomly set the ball's size between 10 and 20
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    // set x coordinate
    random(0 + size, width - size),
    // set y coordinate 
    random(0 + size, height - size),
    // set horizontal velocity between -7 to 7 
    random(-7, 7),
    // set vertical velocity between -7 to 7
    random(-7, 7),
    // set randomize color for ball
    randomRGB(),
    // set size for the ball
    size
  );
  // it will add new ball to an array.
  balls.push(ball);
}

const evilCircle = new EvilCircle(width / 2, height / 2);

// loop for the animation
function loop() {
    // set background color for the canvas
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  // fill entire canvas with the color and effect.
  ctx.fillRect(0, 0, width, height);

  // uses for loop to loop all balls in an array.
  for (const ball of balls) {
    // it will call draw method to draw balls
    ball.draw();
    // it will call update method to change balls position.
    ball.update();
    // it will call collision detect method to check for collision.
    ball.collisionDetect();
  }

  // it will draw the evilcircle.   
  evilCircle.draw();
  // it will check that evilcircle is within bounds.   
  evilCircle.checkBounds();
  // it will check for collison with the evilcircle.  
  evilCircle.collisionDetect();

  // request frame to create animation with loop parameter.
  requestAnimationFrame(loop);
}

// loop to start the animation
loop();
