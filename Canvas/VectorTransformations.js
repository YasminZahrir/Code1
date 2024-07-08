"use strict";
const canvas = document.querySelector("canvas#Vectar");
const ctx = canvas.getContext("2d");
function drawCoordinateSystem(ctx) {
    let notchLength = 10;
    let axisLength = 300;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(axisLength, 0);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, axisLength);
    for (let i = 0; i <= axisLength; i += notchLength) {
        ctx.moveTo(i, -5);
        ctx.lineTo(i, 5);
        ctx.moveTo(-5, i);
        ctx.lineTo(5, i);
    }
    ctx.stroke();
}
ctx.translate(canvas.width / 2, canvas.height / 2);
drawCoordinateSystem(ctx);
function drawSquare(ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 50, 50);
    console.log(`Current transformation matrix (${color}):`, ctx.getTransform());
}
// Base
ctx.save();
ctx.fillStyle = 'black';
drawSquare(ctx, 'black');
ctx.restore();
// Rotate
ctx.save();
ctx.rotate(Math.PI / 3 * -1);
drawSquare(ctx, "purple");
ctx.restore();
// Scale
ctx.save();
ctx.scale(0.2, 0.5);
drawSquare(ctx, "green");
ctx.restore();
// Translate
ctx.save();
ctx.translate(150, 50);
drawSquare(ctx, "blue");
ctx.restore();
// Translate ==> Rotate
ctx.save();
ctx.translate(30, 200);
ctx.rotate(Math.PI / 3);
drawSquare(ctx, "red");
ctx.restore();
// Rotate ==> Translate
ctx.save();
ctx.rotate(Math.PI / 9);
ctx.translate(70, 150);
drawSquare(ctx, "brown");
ctx.restore();
// Rotate ==> Scale ==> Translate
ctx.save();
ctx.rotate(Math.PI / 5 * -1);
ctx.scale(1, 0.75);
ctx.translate(150, 200);
drawSquare(ctx, "cyan");
ctx.restore();
// Transform
ctx.save();
ctx.transform(2, 0, 0, 1.5, 120, 120);
drawSquare(ctx, "orange");
ctx.restore();
