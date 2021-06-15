function preload (){
   bg=loadImage("bg.png")
   mario1=loadImage("mario1.png")
   ground=loadImage("ground.png")
   enemy1=loadImage("enemy1.png")

}

function setup (){
    createCanvas (1400,700)
    m=createSprite(100,600,50,50)
    m.addImage(mario1)
    m.scale=0.5
    //adding ground
    g=createSprite(700,690,1400,30)
    g.addImage(ground)
    g.velocityX=-4
}

function draw () {
     background(bg)
     if(keyDown("up")){
     m.velocityY=-5
     }
     //giving gravity
     m.velocityY=m.velocityY+0.5
     //colliding
     m.collide(g)
     //unlimited ground 
     if(g.x<0){
         g.x=350
     }
     move()
     drawSprites();
}

function move () {
    if(frameCount%100==0){
    enemy=createSprite(1200,500,30,40)
    enemy.y=Math.round(random(100,500))
    enemy.addImage(enemy1)
    enemy.scale=0.25
    enemy.velocityX=-5
}
}