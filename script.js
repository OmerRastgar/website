const canvas = document.getElementById("hexCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.4; // Limit canvas height to top 30% of the page

let hexagons = [];
const maxHexagons = Math.floor(canvas.width * canvas.height / 50000);

function createHexagon(x, y, size, blur) {
    return { x, y, size, blur, speedX: (Math.random() - 0.5) * 2, speedY: (Math.random() - 0.5) * 2 };
}

function drawHexagon(hex) {
    ctx.strokeStyle = "rgba(200, 200, 200, 0.6)";
    ctx.lineWidth = 2;
    ctx.filter = `blur(${hex.blur}px)`;
    
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        let angle = Math.PI / 3 * i;
        let x = hex.x + hex.size * Math.cos(angle);
        let y = hex.y + hex.size * Math.sin(angle);
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
}

function animateHexagons() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hexagons = hexagons.filter(hex => 
        hex.x >= -50 && hex.x <= canvas.width + 50 && hex.y >= -50 && hex.y <= canvas.height + 50
    );
    
    ctx.beginPath();
    hexagons.forEach(hex => {
        hex.x += hex.speedX;
        hex.y += hex.speedY;
        drawHexagon(hex);
    });
    ctx.stroke();
    
    while (hexagons.length < maxHexagons) {
        let size = Math.random() * 50 + 20;
        let blur = Math.random() * 1.5;
        hexagons.push(createHexagon(Math.random() * canvas.width, Math.random() * canvas.height, size, blur));
    }
}

function init() {
    for (let i = 0; i < maxHexagons; i++) {
        let size = Math.random() * 50 + 20;
        let blur = Math.random() * 1.5;
        hexagons.push(createHexagon(Math.random() * canvas.width, Math.random() * canvas.height, size, blur));
    }
    setInterval(animateHexagons, 33); // ~30 FPS
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.3; // Maintain hero section height restriction
});

init();
