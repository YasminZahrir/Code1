let canvas2: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
let cntx: CanvasRenderingContext2D = canvas2.getContext("2d")!;
type RGB = `rgb(${number}, ${number}, ${number})`;

interface StarAttributes {
    positionX: number;
    positionY: number;
    spikes: number;
    oRadius: number;
    iRadius: number;
    colour: string;
}

let star: StarAttributes[] = []

for (let s: number = 0; s < 50; s++) {
    star.push({
        positionX: Math.random() * canvas2.width,
        positionY: Math.random() * canvas2.height / 2,
        spikes: 4,
        oRadius: Math.random() * 15,
        iRadius: Math.random() * 7.5,
        colour: "white",
    });
}

function drawStar() : void {
    for (let s: number = 0; s < star.length; s++) {
        let x = star[s].positionX;
        let y = star[s].positionY;
        let rot = Math.PI / 2 * 3;
        let step = Math.PI / star[s].spikes;

        cntx.beginPath();
        cntx.moveTo(star[s].positionX, star[s].positionY - star[s].oRadius);
        for(i = 0; i < star[s].spikes; i++) {
            x = star[s].positionX + Math.cos(rot) * star[s].oRadius;
            y = star[s].positionY + Math.sin(rot) * star[s].oRadius;
            cntx.lineTo(x, y);
            rot += step;
  
            x = star[s].positionX + Math.cos(rot) * star[s].iRadius;
            y = star[s].positionY + Math.sin(rot) * star[s].iRadius;
            cntx.lineTo(x, y)
            rot += step;
        }
        cntx.lineTo(star[s].positionX, star[s].positionY - star[s].oRadius);
        cntx.closePath();
        cntx.fillStyle = star[s].colour;
        cntx.fill();
    }
}

// Moon
let s = 0;
do {
    s++;
    let pathMoon = new Path2D();
    let size = Math.random() * 10 + 50;
    pathMoon.ellipse(Math.random() * 100 + 900, Math.random() * 50 + 100, size, size, Math.PI / 5, 0, 2 * Math.PI);
    cntx.fillStyle = "white";
    cntx.fill(pathMoon);
} while (s < 1);

interface CloudAttributes {
    positionX: number;
    positionY: number;
    scaleX: number;
    scaleY: number;
    cloudD: number;
    color: number;
}

interface CloudArea {
    x: number;
    y: number;
    sizeX: number;
    sizeY: number;
}

let clouds: CloudAttributes[] = [];
let cloudsBG: CloudAttributes[] = [];
let clArea: CloudArea[] = [];

// Clouds
for (let i: number = 0; i < 3; i++) {
    clouds.push({
        positionX: Math.random() * 1920,
        positionY: Math.random() * 100 + 100,
        scaleX: Math.random() * 10 + 40,
        scaleY: Math.random() * 10 + 30,
        cloudD: Math.random() * 25 + 35,
        color: Math.random() * 25 + 205,
    });
}

for (let j: number = 0; j < clouds.length; j++) {
    for (let i: number = 0; i < clouds[j].cloudD; i++) {
        clArea.push({
            x: clouds[j].positionX + (Math.random() * 200) - (Math.random() * 200),
            y: clouds[j].positionY + (Math.random() * 100) - (Math.random() * 75),
            sizeX: clouds[j].scaleX * (Math.random() * 1 + 1),
            sizeY: clouds[j].scaleX * (Math.random() * 1 + 0.5),
        });
    }
}

for (let i: number = 0; i < 8; i++) {
    cloudsBG.push({
        positionX: Math.random() * 1920,
        positionY: Math.random() * 50 + 150,
        scaleX: Math.random() * 25 + 10,
        scaleY: Math.random() * 10 + 70,
        cloudD: Math.random() * 25 + 75,
        color: Math.random() * 25 + 175,
    });
}

function drawClouds() {
    function drawCloud(): void {
        for (let c: number = 0; c < clouds.length; c++) {
            let pathCloud = new Path2D();
            pathCloud.ellipse(clouds[c].positionX, clouds[c].positionY, clouds[c].scaleX, clouds[c].scaleY, Math.PI / 1, 0, 2 * Math.PI);
            cntx.fillStyle = `rgb(${clouds[c].color}, ${clouds[c].color}, ${clouds[c].color})`;
            cntx.fill(pathCloud);
            for (let a: number = 0; a < clArea.length; a++) {
                let pathCD = new Path2D();
                pathCD.ellipse(clArea[a].x, clArea[a].y, clArea[a].sizeX, clArea[a].sizeY, Math.PI / 1, 0, 2 * Math.PI);
                cntx.fillStyle = `rgb(${clouds[c].color}, ${clouds[c].color}, ${clouds[c].color})`;
                cntx.fill(pathCD);
            }
        }
    }

    function drawCloudBG(): void {
        for (let c: number = 0; c < cloudsBG.length; c++) {
            let pathCloudBG = new Path2D();
            pathCloudBG.ellipse(cloudsBG[c].positionX, cloudsBG[c].positionY, cloudsBG[c].scaleX, cloudsBG[c].scaleY, Math.PI / 2, 0, 2 * Math.PI);
            cntx.fillStyle = `rgb(${cloudsBG[c].color}, ${cloudsBG[c].color}, ${cloudsBG[c].color})`;
            cntx.fill(pathCloudBG);
        }
    }

    drawCloudBG();
    drawCloud();
}

function drawBgScene() {
    drawStar();
// Background
    let k = 0;
    do {
        k++;
        let bgR = Math.random() * 15 + 155;
        let bgG = Math.random() * 15 + 195;
        let bgB = Math.random() * 15 + 175;
        let pathBG = new Path2D();
        let size = Math.random() * 75 + 720;
        pathBG.ellipse(Math.random() * 1900, Math.random() * 100 + 1350, size, size, Math.PI / 4, 0, 2 * Math.PI);
        cntx.fillStyle = `rgb(${bgR}, ${bgG}, ${bgB})`;
        cntx.fill(pathBG);
    } while (k < 10);

// Middleground
    let j = 0;
    do {
        j++;
        let mgR = Math.random() * 20 + 85;
        let mgG = Math.random() * 25 + 155;
        let mgB = Math.random() * 45 + 75;
        let pathMG = new Path2D();
        let size = Math.random() * 75 + 420;
        pathMG.ellipse(Math.random() * 1900, Math.random() * 100 + 1150, size, size, Math.PI / 4, 0, 2 * Math.PI);
        cntx.fillStyle = `rgb(${mgR}, ${mgG}, ${mgB})`;
        cntx.fill(pathMG);
    } while (j < 20);

    interface TreeAttributesMG {
        positionX: number;
        positionY: number;
        scaleX: number;
        scaleY: number;
        leaves: number;
        color: string;
        colorR: number;
        colorG: number;
        colorB: number;
        hasLeaves: boolean;
    }

    let treesMG: TreeAttributesMG[] = [];

    for (let b: number = 0; b < 12; b++) {
        treesMG.push({
            positionX: Math.random() * 1920,
            positionY: Math.random() * 150 + 400,
            scaleX: Math.random() * 1 + 1,
            scaleY: Math.random() * 1 + 1,
            leaves: Math.random() * 25 + 35,
            color: "#80755a",
            colorR: Math.random() * 20 + 75,
            colorG: Math.random() * 25 + 145,
            colorB: Math.random() * 45 + 65,
            hasLeaves: true,
        });
    }
    function drawTreeMG(): void {
        for (let t: number = 0; t < treesMG.length; t++) {
            let pathTreeMG = new Path2D();
            pathTreeMG.rect(treesMG[t].positionX, treesMG[t].positionY, 10 * treesMG[t].scaleX, 500 * treesMG[t].scaleY);
            cntx.fillStyle = treesMG[t].color;
            cntx.fill(pathTreeMG);

            for (let l: number = 0; l < treesMG[t].leaves; l++) {
                let pathLeafMG = new Path2D();
                pathLeafMG.ellipse(treesMG[t].positionX + (Math.random() * 100) - (Math.random() * 100), treesMG[t].positionY + (Math.random() * 250) - (Math.random() * 100), Math.random() * 50 + 25, Math.random() * 50 + 25, Math.PI / 2, 0, 2 * Math.PI);
                cntx.fillStyle = `rgb(${treesMG[t].colorR}, ${treesMG[t].colorG}, ${treesMG[t].colorB})`;
                cntx.fill(pathLeafMG);
            }
        }
    }
    drawTreeMG();
}

// Foreground
let i = 0;
do {
    i++;
    let fgR = Math.random() * 25 + 55;
    let fgG = Math.random() * 45 + 95;
    let fgB = Math.random() * 75 + 15;
    let pathFG = new Path2D();
    let size = Math.random() * 75 + 120;
    pathFG.ellipse(Math.random() * 1900, Math.random() * 100 + 1000, size, size, Math.PI / 4, 0, 2 * Math.PI);
    cntx.fillStyle = `rgb(${fgR}, ${fgG}, ${fgB})`;
    cntx.fill(pathFG);
} while (i < 120);

interface TreeAttributes {
    positionX: number;
    positionY: number;
    scaleX: number;
    scaleY: number;
    leaves: number;
    color: string;
    colorR: number;
    colorG: number;
    colorB: number;
    hasLeaves: boolean;
}

let trees: TreeAttributes[] = [];

for (let b: number = 0; b < 5; b++) {
    trees.push({
        positionX: Math.random() * 1920,
        positionY: Math.random() * 200 + 250,
        scaleX: Math.random() * 1 + 2,
        scaleY: Math.random() * 1 + 1.2,
        leaves: Math.random() * 25 + 45,
        color: "#654321",
        colorR: Math.random() * 25 + 35,
        colorG: Math.random() * 45 + 75,
        colorB: Math.random() * 65 + 5,
        hasLeaves: true,
    });
}

function drawTree(): void {
    for (let t: number = 0; t < trees.length; t++) {
        let pathTree = new Path2D();
        pathTree.rect(trees[t].positionX, trees[t].positionY, 10 * trees[t].scaleX, 500 * trees[t].scaleY);
        cntx.fillStyle = trees[t].color;
        cntx.fill(pathTree);

        for (let l: number = 0; l < trees[t].leaves; l++) {
            let pathLeaf = new Path2D();
            pathLeaf.ellipse(trees[t].positionX + (Math.random() * 100) - (Math.random() * 100), trees[t].positionY + (Math.random() * 250) - (Math.random() * 100), Math.random() * 50 + 25, Math.random() * 50 + 25, Math.PI / 2, 0, 2 * Math.PI);
            cntx.fillStyle = `rgb(${trees[t].colorR}, ${trees[t].colorG}, ${trees[t].colorB})`;
            cntx.fill(pathLeaf);
        }
    }
}
drawTree();

drawBgScene();
let imgData: ImageData = cntx.getImageData(0, 0, canvas2.width, canvas2.height);

    cntx.clearRect(0, 0, canvas2.width, canvas2.height);
    cntx.putImageData(imgData, 0, 0);
    drawClouds();

interface RainAttributes {
    positionX: number;
    positionY: number;
    scaleX: number;
    scaleY: number;
    initialY: number;
    colour: string;
    speed: number;
} 

let rain: RainAttributes[] = [];
let initialY = Math.random() * 100 + 300;

for (let b: number = 0; b < 100; b++) {
    rain.push({
        positionX: Math.random() * 1920,
        positionY: initialY,
        initialY: initialY,
        scaleX: Math.random() * 1 + 2,
        scaleY: Math.random() * 1 + 1.2,
        colour: "blue",
        speed: Math.random() * 5,
    });
}

function drawRain(): void {
    for (let r: number = 0; r < rain.length; r++) {
        let pathRain = new Path2D();
        pathRain.rect(rain[r].positionX, rain[r].positionY, rain[r].scaleX, 20 * rain[r].scaleY)
        cntx.fillStyle = rain[r].colour;
        cntx.fill(pathRain);
    }
}

function updateRain(_deltaTime: number) {
    for (let i: number = 0; i < rain.length; i++) {
        rain[i].positionY += rain[i].speed;
        if (rain[i].positionY > canvas2.height + rain[i].scaleY) {
            rain[i].positionY = rain[i].initialY;
        }
    }
}

let previousFrameTime: number = 0;
function animateScene(_elapsedTime: number) {
    let currentFrameDeltaTime: number = (_elapsedTime - previousFrameTime) / 1000;
    previousFrameTime = _elapsedTime;

    cntx.clearRect(0, 0, canvas2.width, canvas2.height);
    cntx.putImageData(imgData, 0, 0);
    updateRain(currentFrameDeltaTime);
    drawRain();
    drawClouds();
    requestAnimationFrame(animateScene);
}

requestAnimationFrame(animateScene);

   // function drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number){
   //     var rot=Math.PI/2*3;
   //     var x=cx;
   //     var y=cy;
   //     var step=Math.PI/spikes;
  //
  //      cntx.beginPath();
  //      cntx.moveTo(cx,cy-outerRadius)
  //      for(i=0;i<spikes;i++){
   //       x=cx+Math.cos(rot)*outerRadius;
   //       y=cy+Math.sin(rot)*outerRadius;
   //       cntx.lineTo(x,y)
   //       rot+=step
  
   //       x=cx+Math.cos(rot)*innerRadius;
   //       y=cy+Math.sin(rot)*innerRadius;
   //       cntx.lineTo(x,y)
   //       rot+=step
    //    }
    //    cntx.lineTo(cx,cy-outerRadius);
    //    cntx.closePath();
    //    cntx.stroke();
    //    cntx.fillStyle='white';
    //    cntx.fill();
    //  }
  
     // drawStar(300, 200, 5, 15, 7.5);