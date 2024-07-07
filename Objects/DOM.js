"use strict";
let a = 0;
let b = Math.random() * 15;
let word = ["Coke", "Meth", "Molly", "Speed"];
while (a < b) {
    let thing = document.createElement("div");
    document.body.appendChild(thing);
    thing.textContent = word[Math.floor(Math.random() * word.length)];
    thing.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // thing.style.color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    thing.style.position = "absolute";
    thing.style.top = Math.random() * 1000 + "px";
    thing.style.left = Math.random() * 1000 + "px";
    thing.style.fontSize = Math.random() * 100 + "px";
    a = a + 1;
}
