"use strict";
let canvas = document.querySelector("canvas#BInteraction");
let ctx = canvas.getContext("2d");
let shapes = [];
canvas.addEventListener("click", function (event) {
    let x = event.clientX - canvas.getBoundingClientRect().left;
    let y = event.clientY - canvas.getBoundingClientRect().top;
    // Randomly choose shape type
    let shapeType = Math.random() < 0.5 ? "circle" : "rectangle";
    // Create shape
    let shape = {
        x: x,
        y: y,
        width: Math.random() * 60 + 20,
        height: Math.random() * 60 + 20,
        dx: Math.random() * 4 - 2,
        dy: Math.random() * 4 - 2,
        color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
        shapeType: shapeType,
        settled: true,
    };
    shapes.push(shape);
});
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach(shape => {
        shape.dy += 0.1;
        shape.x += shape.dx;
        shape.y += shape.dy;
        if (shape.x < 0 || shape.x + shape.width > canvas.width) {
            shape.dx *= -1;
        }
        if (shape.y < 0 || shape.y + shape.height > canvas.height) {
            shape.dy *= -0.9;
            shape.dx *= 0.9;
            if (Math.abs(shape.dy) < 0 && shape.y + shape.height >= canvas.height) {
                shape.dy = 0;
                shape.settled = true;
            }
        }
        ctx.fillStyle = shape.color;
        if (shape.shapeType === "circle") {
            ctx.beginPath();
            ctx.arc(shape.x + shape.width / 2, shape.y + shape.height / 2, shape.width / 2, 0, Math.PI * 2);
            ctx.fill();
        }
        else if (shape.shapeType === "rectangle") {
            ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
        }
    });
    requestAnimationFrame(update);
}
update();
// Event listener for canvas click
//canvas.addEventListener("click", function (event) {
//const x = event.offsetX;  // X coordinate of click relative to canvas
//const y = event.offsetY;  // Y coordinate of click relative to canvas
// Randomly choose draw mode (circle or rectangle)
//const drawMode = Math.random() < 0.5 ? "circle" : "rectangle";
// Draw based on drawMode
//if (drawMode === "circle") {
//drawCircle(ctx, x, y);
//} else if (drawMode === "rectangle") {
//drawRectangle(ctx, x, y);
//}
//});
// Function to draw a circle
//function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number) {
//ctx.beginPath();
//ctx.arc(x, y, Math.random() * 100 + 25, 0, Math.PI * 2);
//ctx.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//ctx.fill();
//};
// Function to draw a rectangle
//function drawRectangle(ctx: CanvasRenderingContext2D, x: number, y: number) {
//ctx.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//ctx.fillRect(x - 50, y - 25, Math.random() * 100 + 50, Math.random() * 50 + 25);
//};
