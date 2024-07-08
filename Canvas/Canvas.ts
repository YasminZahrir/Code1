document.addEventListener('DOMContentLoaded',() => {
let canvas: HTMLCanvasElement | null = document.querySelector("canvas#myCanvas");
if (!canvas) {
    console.error("Canvas element not found");
    return;
}

let crc2: CanvasRenderingContext2D | null = canvas.getContext("2d");
if (!crc2) {
    console.error("2D context not found");
    return;
}

    crc2.fillStyle = "red";
    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height)
    // Create a linear gradient
    const gradient = crc2.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    crc2.fillStyle = gradient;

    // Begin a new path
    crc2.beginPath();
    
    // Draw an arc
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;
    const startAngle = Math.PI * 2; // Start at 0 radians (0 degrees)
    const endAngle = 0; // End at 2*PI radians (360 degrees)
    
    crc2.arc(150, 50, radius, 0, Math.PI * 1);
    
    // Set stroke style
    crc2.strokeStyle = 'black';
    crc2.lineWidth = 5;
    crc2.stroke();

    crc2.beginPath();
    crc2.ellipse(centerX, centerY, radius, radius, 0, startAngle, endAngle);
    crc2.fill();
    crc2.stroke();
});