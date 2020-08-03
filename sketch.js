var ball,playerpaddle,edges;
var ball1, paddle1;

function preload() {
  /* preload your images here of the ball and the paddle */
  ball1 = loadImage("ball.png");
  paddle1 = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */

  ball = createSprite(200,200,1,1);
  playerpaddle = createSprite(390,200,1,1);

  /* assign the images to the sprites */

  ball.addImage("Moving",ball1);
  playerpaddle.addImage("Player",paddle1);




  /* give the ball an initial velocity of 9 in the X direction */

  ball.velocityX = 9;
  
}

function draw() {
  background(250,153,0);
  /* create Edge Sprites here */
  edge = createEdgeSprites();

  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges
only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edge[0]);
 ball.bounceOff(edge[2]);
 ball.bounceOff(edge[3]);

  /* Allow the ball to bounceoff from the paddle */

  /* Also assign a collision callback function, so that the ball can
have a random y velocity, making the game interesting */
 if (ball.bounceOff(playerpaddle)){

    randomVelocity();
}

  /* Prevent the paddle from going out of the edges */
playerpaddle.collide(edge);


  if(keyDown(UP_ARROW)){


    playerpaddle.y = playerpaddle.y-20;
     /* what should happen when you press the UP Arrow Key */
  }

  if(keyDown(DOWN_ARROW)){

   playerpaddle.y = playerpaddle.y+20;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();

}

function randomVelocity(){
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in
random direction */

ball.velocityY = Math.round(random(9,15));
ball.velocityX = -Math.round(random(9,15));
}