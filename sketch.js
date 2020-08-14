var form,game,player;
var database;
var gameState=0;
var playerCount=0;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
   
}

function draw(){
    background("white");
    
    drawSprites();
}

