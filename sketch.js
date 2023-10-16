var trex ,trex_running;


//carregar animações
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  

}

function setup(){
  createCanvas(600,200);
  
  //crie um sprite de trex

  trex = createSprite (50,180,20,50);
trex.addAnimation("running, trex_running");



  //adicione dimensão ao trex

  trex.scale=0.5;
 trex.x = 50

  //crie um sprite ground (solo)

  ground = createSprite (300,160,600,20);
 
}

function draw(){
  background("white");

  //pular quando a tecla espaço for pressionada


  if(keyDown("space")) { 
    trex.velocityY = -10;
   }
  
   //simula a gravidade para "cair" após clicar a tecla de pular

trex.velocityY = trex.velocityY + 0.9;

  //impedir que o trex caia (por conta da gravidade)

  trex.collide(ground);
drawSprites()
}