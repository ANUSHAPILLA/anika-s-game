var fighter,fighter2,fighteri,fighter2i,lake;
var form1;
var gameState=0;
var playerCount;
var player,form,game;
var player1,player2,players,allPlayers
function preload(params){
    fighter1i=loadImage("Fighter1.jpg")
    fighter2i=loadImage("fighter2.jpg");
    lakei=loadImage("lake.jpg")

}
function setup(params){
   canvas= createCanvas(displayWidth-180,displayHeight-200);
   database = firebase.database();
   fighter=createSprite(750,200,10,10);
   fighter.addImage(fighter1i);
   fighter.scale=0.90;
   fighter2=createSprite(200,200,10,10);
   fighter2.addImage(fighter2i);
   fighter2.scale=0.70;
   lake=createSprite(800,800,400,500);
   lake.addImage(lakei);
   lake.scale=2;
   game = new Game();
   game.getState();
   game.start();
   
   
}
    
function draw(){
  background("white")
    if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
    if(gameState === 2){
      game.end();
    }
  }
  





