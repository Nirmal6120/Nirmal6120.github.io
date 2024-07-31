/* Author Name: Nirmal Patel
     Date:31 July 2024
     Discription: fourth HTML assignment part 3
     it is the actual java script code */


// setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
    constructor(x,y,veIX,veIY,color,size){
        this.x = x;
        this.y = y;
        this.veIX = veIX;
        this.veIY = veIY;
        this.color = color;
        this.size = size;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update(){
        if((this.x + this.size) >= width){
            this.veIX = - (this.veIX);
        }
        if((this.x - this.size) <= 0){
            this.veIX = -(this.veIX);
        }
        if((this.y + this.size) >= height){
            this.veIY = -(this.veIY);
        }
        if((this.y - this.size) <= 0){
            this.veIY = -(this.veIY);
        }
        this.x += this.veIX;
        this.y += this.veIY;
    }
    collisionDetect() {
        for (const ball of balls) {
          if (this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
          }
        }
      }
    }

    const balls = [];
    while (balls.length < 25) {
        const size = random(10, 20);
        const ball = new Ball(
          // ball position always drawn at least one ball width
          // away from the edge of the canvas, to avoid drawing errors
          random(0 + size, width - size),
          random(0 + size, height - size),
          random(-7, 7),
          random(-7, 7),
          randomRGB(),
          size,
        );

        balls.push(ball);
    }

    