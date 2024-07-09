"use strict";
let canvas = document.querySelector("canvas#WASD");
let ctx = canvas.getContext("2d");
let box = {
    x: canvas.width / 2 - 25,
    y: canvas.height / 2 - 25,
    width: 50,
    height: 50,
    color: "red",
    speed: 5
};
let keys = {
    w: false,
    a: false,
    s: false,
    d: false
};
function drawMovable() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = box.color;
    ctx.fillRect(box.x, box.y, box.width, box.height);
}
function updatePosition() {
    if (keys.w && box.y > 0) {
        box.y -= box.speed;
    }
    if (keys.s && box.y < canvas.height - box.height) {
        box.y += box.speed;
    }
    if (keys.a && box.x > 0) {
        box.x -= box.speed;
    }
    if (keys.d && box.x < canvas.width - box.width) {
        box.x += box.speed;
    }
}
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w":
            keys.w = true;
            break;
        case "a":
            keys.a = true;
            break;
        case "s":
            keys.s = true;
            break;
        case "d":
            keys.d = true;
            break;
    }
});
window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "w":
            keys.w = false;
            break;
        case "a":
            keys.a = false;
            break;
        case "s":
            keys.s = false;
            break;
        case "d":
            keys.d = false;
            break;
    }
});
function gameLoop() {
    updatePosition();
    drawMovable();
    requestAnimationFrame(gameLoop);
}
// Start the game loop
gameLoop();
