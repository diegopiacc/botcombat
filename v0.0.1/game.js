// Get the canvas element and its 2D rendering context
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Set up car properties
let carWidth = 50;
let carHeight = 80;
let carX = (canvas.width - carWidth) / 2;
let carY = (canvas.height - carHeight) / 2;
let carSpeed = 5;

// Event listener for keydown event
document.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
        case 38: // Up arrow key
            carY -= carSpeed;
            break;
        case 40: // Down arrow key
            carY += carSpeed;
            break;
        case 37: // Left arrow key
            carX -= carSpeed;
            break;
        case 39: // Right arrow key
            carX += carSpeed;
            break;
    }
});

// Main game loop
function gameLoop() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the car
    context.fillStyle = "green";
    context.fillRect(carX, carY, carWidth, carHeight);

    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();