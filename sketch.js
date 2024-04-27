let Plv; //palavra
let ME = false; //modo escuro

function setup() {
  createCanvas(500, 500);
  Plv = PA(); // Palavras
}

//palavra
function PA() {
  let palavras = ["JS", "PHP", "HTML", "CSS"]; 
  return random(palavras); 
}

//configuração de texto
function CFGTXT() {
  if (ME) {
    background("black");
    fill("white");
  } else {
    background("white");
    fill("black");
  }
  textSize(64);
  textAlign(CENTER, CENTER);
}

//palavra parcial
function PP(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 0, Plv.length); 
  let parcial = Plv.substring(0, quantidade);
  return parcial;
}

function draw() {
  CFGTXT();
  let texto = PP(0, width);
  text(texto, 250, 250); 
  console.log("Aperte espaço para trocar para modo escuro ou claro");
}

function keyPressed() {
  if (keyCode === 32) { // Verifica se a tecla pressionada é a tecla de espaço
    ME = !ME; // Alterna o valor de ME entre true e false
  }
}
