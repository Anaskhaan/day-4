// Ball class
class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = Math.random() * 2 + 1; // X-axis speed
    this.dy = Math.random() * 2 + 1; // Y-axis speed
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

  update(canvas) {
    // Update ball position
    this.x += this.dx;
    this.y += this.dy;

    // Bounce off the canvas boundaries
    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.dx = -this.dx;
      this.changeColor();
    }

    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.dy = -this.dy;
      this.changeColor();
    }
  }

  changeColor() {
    // Generate a random color
    this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
  }
}

// Initialize canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Set canvas size to cover the entire window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to store balls
const balls = [];

// Function to handle click event and add a new ball
canvas.addEventListener("click", (event) => {
  const newBall = new Ball(
    event.clientX,
    event.clientY,
    20,
    `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`
  );
  balls.push(newBall);
});

// Animation loop
function animate() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw each ball
  balls.forEach((ball) => {
    ball.update(canvas);
    ball.draw(context);
  });

  // Request next animation frame
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
