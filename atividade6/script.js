window.onload = main;
var ctx;

function main() {
  const canvas = document.getElementById('meucanvas');
  ctx = canvas.getContext('2d');
  if (!ctx) {
    alert("Não consegui abrir o contexto 2d :-( ");
    return;
  }

  const cellWidth = 20;
  const cellHeight = 20;

  const gridSizeX = canvas.width / cellWidth;
  const gridSizeY = canvas.height / cellHeight;

  for (let y = 0; y < gridSizeY; y++) {
    for (let x = 0; x < gridSizeX; x++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const corAleatoria = `rgb(${r}, ${g}, ${b})`;

      const posX = x * cellWidth;
      const posY = y * cellHeight;

      desenheRect(corAleatoria, posX, posY, cellWidth, cellHeight);
    }
  }
};

function desenheRect(cor, left, top, width, height) {
  ctx.fillStyle = cor;
  ctx.fillRect(left, top, width, height);
};