
const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d'); 


class ContadorDeCliques {
    constructor() {
        this.numeroDeCliques = 0;
        this.corDoTexto = 'black';
    }

    incrementar() {
        this.numeroDeCliques++;
    }

    desenhar() {
        ctx.fillStyle = this.corDoTexto;
        ctx.font = '16px Arial';
        ctx.fillText(`Você clicou ${this.numeroDeCliques} vezes.`, 10, 20);
    }
}


class RetanguloColorido {
    constructor(x, y, largura, altura) {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.corR = 0;
        this.corG = 0;
        this.corB = 0;
    }

    atualizarCor(r, g, b) {
        this.corR = r;
        this.corG = g;
        this.corB = b;
    }

    desenhar() {
        ctx.fillStyle = `rgb(${this.corR}, ${this.corG}, ${this.corB})`;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
}


class DesenhoLivre {
    constructor() {
        this.desenhando = false;
        this.cor = 'black';
        this.velocidade = 5; 
    }

    iniciarDesenho(evento) {
        this.desenhando = true;
        this.desenhar(evento);
    }

    pararDesenho() {
        this.desenhando = false;
        ctx.beginPath(); 
    }

    desenhar(evento) {
        if (!this.desenhando) return;

        const retanguloCanvas = canvas.getBoundingClientRect();
        const x = evento.clientX - retanguloCanvas.left;
        const y = evento.clientY - retanguloCanvas.top;

        ctx.lineWidth = this.velocidade;
        ctx.lineCap = 'round'; 
        ctx.strokeStyle = this.cor;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
}

const contador = new ContadorDeCliques();
const retangulo = new RetanguloColorido(200, 150, 200, 100);
const desenhista = new DesenhoLivre();

const inputR = document.getElementById('corR');
const inputG = document.getElementById('corG');
const inputB = document.getElementById('corB');

function atualizarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    retangulo.desenhar();
    contador.desenhar();
}

canvas.addEventListener('click', function(evento) {
    contador.incrementar();
    atualizarCanvas();
});

canvas.addEventListener('mousedown', (e) => desenhista.iniciarDesenho(e));
canvas.addEventListener('mouseup', () => desenhista.pararDesenho());
canvas.addEventListener('mousemove', (e) => desenhista.desenhar(e));

function atualizarCores() {
    const r = inputR.value;
    const g = inputG.value;
    const b = inputB.value;
    
    retangulo.atualizarCor(r, g, b);

    desenhista.cor = `rgb(${r}, ${g}, ${b})`;

    atualizarCanvas();
}

inputR.addEventListener('input', atualizarCores);
inputG.addEventListener('input', atualizarCores);
inputB.addEventListener('input', atualizarCores);

atualizarCanvas();