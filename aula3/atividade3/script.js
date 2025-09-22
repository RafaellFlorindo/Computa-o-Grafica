window.onload = main; 
var ctx;

function main() {
  // veja o canvas id definido no arquivo index.html
  const canvas = document.getElementById('meucanvas');
  // vamos definir um contexto para desenhar em 2D
  ctx = canvas.getContext('2d');
  if (!ctx) {
    alert("Não consegui abrir o contexto 2d :-( ");
    return;
  }

  const numElementos = 50;
  const gridSize = 10;
  const cellWidth = canvas.width / gridSize;
  const cellHeight = canvas.height / gridSize;


  for (let i = 0; i < numElementos; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const corAleatoria = `rgb(${r}, ${g}, ${b})`;

    const gridX = Math.floor(Math.random() * gridSize);
    const gridY = Math.floor(Math.random() * gridSize);

    const posX = gridX * cellWidth;
    const posY = gridY * cellHeight;

    desenheRect(corAleatoria, posX, posY, cellWidth, cellHeight);
  }
};

function desenheRect(cor, left, top, width, height) {
  ctx.fillStyle = cor;
  ctx.fillRect(left, top, width, height);
};