// 最終課題を制作しよう
let x, y, vx, vy;
const g = 1;
const vyMax =20;
let isjumping = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  x = 50;
  y = 50;
  vx = 2;
  vy = 2;  

}

function draw(){
  background(160, 192, 255);
  vy = constrain(vy += g, -vyMax, vyMax);
  y += vy;
  x = constrain(x, 0, width);
  
  block(width/3, height*3/5, 150, 50);
  block(width*2/3, height*3/5, 150, 50);


//花を描画
  for(let i = 0; i < 10; i++){
    let fx = width/10 * i+20;
    let fy = height*4/5-50;
    if(i % 2 == 0){
      noStroke();
      fill(247, 202, 201);
      flower(fx, fy, 10);
    }
    else{
      noStroke();
      fill(146, 168, 209);
      flower(fx, fy, 10);
    }
  }

  //地面を描画
  noStroke();
  fill(6,145,43);
  rect(0, height*4/5, width, height/3);
  fill(179,152,96);
  rect(0, height*5/6, width, height/4);
  
  //まるおを描画
  stroke(0);
  strokeWeight(1);
  fill(222,176, 247);
  ellipse(x, y-25 , 50); //地面の上に円が来るように
   if(keyIsDown(LEFT_ARROW)){ x -= vx; }
   if(keyIsDown(RIGHT_ARROW)){ x += vx; }
   if(keyIsDown(SHIFT)){ x = 10; }//加速
   


  //雲を描画
  fill(255); 
  noStroke();
  cloud(200, 200, 300 , 50);
  cloud(500, 100, 300, 50);
  cloud(800, 250, 300, 50);
  cloud(1100, 150, 300, 50);
}
 

function jump1(){
  if(y == height*4/5)
  vy = -40 ;
}

function jump2(){
  if(y==height*3/5)
  vy = -10 ;
}

//雲の関数
function cloud(cx, cy, r1, r2){
  ellipse(cx, cy, r1, r2);
  ellipse(cx+60, cy-20, r1/2, r2*2/3);
}

//花の関数
function flower(cx, cy, r1){
  stroke(6,145,43);
  line(cx, cy, cx, cy+50);
  noStroke();
  ellipse(cx, cy-5, r1);
  ellipse(cx+5, cy-2, r1);
  ellipse(cx-5, cy-2, r1);
  ellipse(cx+3, cy+5, r1);
  ellipse(cx-3, cy+5, r1);
  fill(255, 238, 8);
  ellipse(cx, cy, r1/2);
  
}

//ジャンプ
function keyPressed(){
  if(key === 'ArrowUp'){
    jump();
    isJumping = true;
  }
}

function jump(){
  if(isJumping === false){
    vy = -vy;
  }
}

function keyReleased(){
  if(key === 'ArrowUp'){
    isJumping = false;
  }
}

//ブロック関数
function block(bx, by, bw, bh){
  stroke(0);
  strokeWeight(1);
  fill(117, 69, 6);
  rect(bx, by, bw, bh);
  //ブロックの下に来たら跳ね返る
  if(x > bx-25 && x < bx + bw +25 && y > by && y < by + bh + 50 && vy <0){
    y = by+bh+50;
    vy = -vy;
  } 
  //ブロックの上
  else if(x > bx -25 && x < bx + bw + 25 && y > by && y < by + bh){
     y = by; //まるおのy座標をブロックの上に
     vy = 0; // まるおのy方向の速度を0に
     if(keyIsDown(UP_ARROW)){ vy = -10; } //変更点　ブロックの上でもジャンプできるように
  } 
  //地面の上
  else {
    y = constrain(y, height/2, height * 4/5 );
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
