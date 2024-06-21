

let objeto;
let jogador;
let raio = 30;
let timer = 5;
let pontos = 0;

function setup() {
  createCanvas(400, 400);
  objeto = createVector(random(0,width),random(0,height));
}

function draw() {
  timer -=1/69;
  jogador = createVector(mouseX,mouseY);
  background(220);
  
  //------Verificando o TEMPO--------
  if(timer <=0){
    textSize(36);
    text("GAMER OVER",85,200);
    noLoop();
  }
  
  circle(objeto.x,objeto.y,raio)
  
  let comprimento = map(timer,0,5,0,200);
  rect(20,20,10,comprimento);
}
textSize(24);
text(pontos,180,40);

function mousePressed(){
  let dis = p5.Vector.dist(jogador,objeto)
  if (dis < raio){
    objeto = createVector(random(width),random(height));
    timer =+ 0.5;
    pontos =+1;
  }
  
}

//Criar o objeto CLICK ---> ok
//Criar o valor CLICK ---> ok
//Mover o objeto quando clicado
//Criar o timer usando função MAP --->ok
//Criar Pontos do jogo