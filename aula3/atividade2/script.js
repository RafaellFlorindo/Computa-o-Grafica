// A `main()` só deve ser executada quando tudo estiver carregado
window.onload = main;

// Variável global para o contexto do canvas
var ctx;

function main() {
    const canvas = document.getElementById('meucanvas');
    ctx = canvas.getContext('2d');
    if (!ctx) {
        alert("Não consegui abrir o contexto 2d :-( ");
        return;
    }

    const raio = 30;
    const yPos = canvas.height/2 

    desenheCirculo(40, yPos, raio, 8); 
    desenheCirculo(110, yPos, raio, 16);
    desenheCirculo(180, yPos, raio, 32); 
    desenheCirculo(250, yPos, raio, 64);
}

function desenheCirculo(centroX, centroY, raio, numSegmentos) {
    console.log("Desenhando círculo com", numSegmentos, "segmentos.");

    ctx.beginPath();

    for (let i = 0; i <= numSegmentos; i++) {
        const angulo = (i / numSegmentos) * 2 * Math.PI;
        const x = centroX + raio * Math.cos(angulo);
        const y = centroY + raio * Math.sin(angulo);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }



    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.stroke(); 
}