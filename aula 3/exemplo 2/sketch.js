//Usando a função MAP com radianos.
//Usando a função map para mapear o angulo de rotação de radianos.
//Implementando a velocidade e a aceleração angular.
//A função map usa cinco parâmetro 
//valor inicial(posição atual do mouse) e um intervalo intervalo inicial(posição 0 e width da tela) e um intervalo final(medio em radianos) .

let angulo = 0;
let anguloV = 0;
let anguloA = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
}

function draw() {
  anguloA= map(mouseX,0,width,-0.01,0.01);
  
  background(146,83,161);
  noStroke();
  fill(240,99,164);
  rectMode(CENTER);
  translate(200,200)
  rotate(angulo);
  rect(0,0,256,32)
  
  angulo += anguloV;
  anguloV += anguloA;
  
}