let a: number = 0;
let b: number = Math.random() * 20;
let word: string[] = ["Coke", "Meth", "Molly", "Speed"];
while (a < b) {
    let thing: HTMLDivElement = document.createElement("div");
    document.body.appendChild(thing);
    thing.textContent = word[Math.floor(Math.random() * word.length)];
    thing.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // thing.style.color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    thing.style.position = "absolute";
    thing.style.top = Math.random() * 1000 + "px";
    thing.style.left = Math.random() * 1000 + "px";
    thing.style.fontSize = Math.random() * 100 + "px";

    thing.addEventListener('click', () => {
        thing.textContent = word[Math.floor(Math.random() * word.length)];
        thing.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        thing.style.top = Math.random() * window.innerHeight + "px";
        thing.style.left = Math.random() * window.innerWidth + "px";
        thing.style.fontSize = Math.random() * 100 + "px";
    });
    a = a + 1;
}
