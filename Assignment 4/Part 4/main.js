/* Author Name: Nirmal Patel
     Date:31 July 2024
     Discription: fourth HTML assignment part 3
     Adding features to our bouncing balls demo */


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

// function to generate random color

function randomRGB() {
    // reutrn a random color with RGB format.
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// ball class 
class shape {
    // constructor to crate ball objects
    constructor(x,y,veIX,veIY){
        // x coordinate of ball.
        this.x = x;
        // y coordinate of ball.
        this.y = y;
        // horizontal velocity of ball
        this.veIX = veIX;
        // vertical velocity of ball
        this.veIY = veIY;
    }
}

class ball extends shape{
    constructor(x,y,veIX,veIY,color,size){
        super(x,y,veIX,veIY);
        this.color = color;
        this.size = size;

    }


    // draw method
    draw(){
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
    update(){
        // check that the ball hit right wall
        if((this.x + this.size) >= width){
            // reverse the horizontal velocity
            this.veIX = - (this.veIX);
        }
        // check that the ball hit left wall
        if((this.x - this.size) <= 0){
            // reverse the horizontal velocity
            this.veIX = -(this.veIX);
        }
        // check that the ball hit bottom wall
        if((this.y + this.size) >= height){
            // reverse the vertical velocity
            this.veIY = -(this.veIY);
        }
        // check that the ball hit top wall
        if((this.y - this.size) <= 0){
            // reverse the vertical velocity
            this.veIY = -(this.veIY);
        }
        // upadte the balls x coordinate based on velocity.
        this.x += this.veIX;
        // upadte the balls y coordinate based on velocity.
        this.y += this.veIY;
    }

    // collisionDetect method
    collisionDetect() {
        // uses for loop to loop all balls in an array.
        for (const ball of balls) {
          if (!(this === ball) && ball.exists) {
            // it will calculate difference between x coordinates.
            const dx = this.x - ball.x;
            // it will calcualte difference between y coordinates.
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
          size,
        );
        
        // it will add new ball to an array.
        balls.push(ball);
    }

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

  // request frame to create animation with loop parameter.  
  requestAnimationFrame(loop);
}

// loop to start the animation
loop();