let canvas: HTMLCanvasElement = document.querySelector("canvas#PointClick")!;
let ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface Target {
    x: number;
    y: number;
    radius: number;
    color: string;
    active: boolean;
}

let points = 0;
const targetRadius = 20;

let target = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: targetRadius,
    color: "red",
    active: true,
    dx: (Math.random() * 2 - 1) * 2, // Random initial direction x-component
    dy: (Math.random() * 2 - 1) * 2, // Random initial direction y-component
};

canvas.addEventListener("click", (event: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    const distance = Math.sqrt((clickX - target.x) ** 2 + (clickY - target.y) ** 2);
    if (distance < target.radius) {
        points++;
        target.x = Math.random() * canvas.width;
        target.y = Math.random() * canvas.height;
        target.dx = (Math.random() * 2 - 1) * 2; // New random direction x-component
        target.dy = (Math.random() * 2 - 1) * 2; // New random direction y-component
    }
});

function moveTarget() {
    target.x += target.dx;
    target.y += target.dy;

    if (target.x < target.radius || target.x > canvas.width - target.radius) {
        target.dx *= -1; // Reverse direction on x-axis
    }
    if (target.y < target.radius || target.y > canvas.height - target.radius) {
        target.dy *= -1; // Reverse direction on y-axis
    }
}

function drawTarget() {
    if (target.active) {
        ctx.beginPath();
        ctx.arc(target.x, target.y, target.radius, 0, Math.PI * 2);
        ctx.fillStyle = target.color;
        ctx.fill();
    }
}

function drawPoints() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Points: " + points, 10, 30);
}

function updateScore() {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.textContent = `Points: ${points}`;
    }
}


function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPoints();
    moveTarget();
    drawTarget();
    updateScore();

    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();