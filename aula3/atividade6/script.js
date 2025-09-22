const grade_tamanho = 20;
const animationInterval = 1;

let canvas, ctx;
let largura_cel, altura_cel;
let totalCells = grade_tamanho * grade_tamanho;
let filledCells = new Set();
let lastTime = 0;

window.onload = main;

function main() {
    canvas = document.getElementById('meucanvas');
    ctx = canvas.getContext('2d');
    if (!ctx) {
        alert("Não consegui abrir o contexto 2d :-( ");
        return;
    }

    largura_cel = canvas.width / grade_tamanho;
    altura_cel = canvas.height / grade_tamanho; 

    requestAnimationFrame(animationLoop);
};

function animationLoop(timestamp) {
    const deltaTime = timestamp - lastTime;

    if (deltaTime > animationInterval) {
        lastTime = timestamp;
        desenhe_prox_cel();
    }

    requestAnimationFrame(animationLoop);
}

function desenhe_prox_cel() {
    if (filledCells.size >= totalCells) {
        console.log("Canvas cheio. Limpando e reiniciando.");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        filledCells.clear();
        return;
    }

let tamanho_x, tamanho_y;
tamanho_x = Math.floor(Math.random() * grade_tamanho);
tamanho_y = Math.floor(Math.random() * grade_tamanho);
chave_cel = `${tamanho_x},${tamanho_y}`;

    const r = Math.floor(Math.random() * 254);
    const g = Math.floor(Math.random() * 254);
    const b = Math.floor(Math.random() * 254);
    const cor_aleatoria = `rgb(${r}, ${g}, ${b})`;
    const posicao_x = tamanho_x * largura_cel;
    const posicao_y = tamanho_y * altura_cel;
    desenheRect(cor_aleatoria, posicao_x, posicao_y, largura_cel, altura_cel);
}

function desenheRect(cor, left, top, width, height) {
    ctx.fillStyle = cor;
    ctx.fillRect(left, top, width, height);
};