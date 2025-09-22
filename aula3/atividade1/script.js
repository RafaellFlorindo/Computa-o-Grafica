window.onload = main; // nome da função a ser chamada 'onload'
var ctx; // contexto com a API para desenhar

function main() {
  // veja o canvas id definido no arquivo index.html
  const canvas = document.getElementById('meucanvas');
  // vamos definir um contexto para desenhar em 2D
  ctx = canvas.getContext('2d');
  if (!ctx) alert("Não consegui abrir o contexto 2d :-( ");


  for (let index = 0; index < 1000; index++) {

    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256);
    const corAleatoria = `rgb(${r}, ${g}, ${b})`;

    posicao = Math.random() * (640 - 1) + 1;
    altura = Math.random() * (480 - 1) + 1;
    largura = Math.random() * (150 - 50) + 50;
    comprimento = Math.random() * (150 - 50)+ 50;
    desenheRect(corAleatoria, posicao, altura, largura, comprimento)
  }
};

function desenheRect(cor, left, top, width, height) {
  console.log("Desenhando retângulo ", cor);
  ctx.fillStyle = cor;
  ctx.fillRect(left, top, width, height);
};