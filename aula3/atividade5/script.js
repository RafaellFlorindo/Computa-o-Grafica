window.onload = main; // nome da função a ser chamada 'onload'
var ctx; // contexto com a API para desenhar
var canvas; // canvas global para fácil acesso

const gridSize = 10;
const totalCells = gridSize * gridSize;
var cellWidth;
var cellHeight;
var filledCells = new Set(); 

function main() {
  canvas = document.getElementById('meucanvas');
  ctx = canvas.getContext('2d');
  if (!ctx) {
    alert("Não consegui abrir o contexto 2d :-( ");
    return;
  }

  cellWidth = canvas.width / gridSize;
  cellHeight = canvas.height / gridSize;

  drawNextCell();
};

function drawNextCell() {
  if (filledCells.size >= totalCells) {
      console.log("Canvas cheio. Limpando e reiniciando.");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      filledCells.clear(); 
      drawNextCell(); 
    }

  let gridX, gridY, cellKey;
  do {
    gridX = Math.floor(Math.random() * gridSize);
    gridY = Math.floor(Math.random() * gridSize);
    cellKey = `${gridX},${gridY}`;
  } while (filledCells.has(cellKey)); 
  filledCells.add(cellKey);

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const corAleatoria = `rgb(${r}, ${g}, ${b})`;
  const posX = gridX * cellWidth;
  const posY = gridY * cellHeight;
  desenheRect(corAleatoria, posX, posY, cellWidth, cellHeight);

  setTimeout(drawNextCell, 50); 
}

function desenheRect(cor, left, top, width, height) {
  ctx.fillStyle = cor;
  ctx.fillRect(left, top, width, height);
};