// テキスト「キーボード操作に反応する」
let x, y, vx, vy;
const g = 1;
const vyMax =20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  //x = width / 2;
  //y = height / 2;
  
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
  //y = constrain(y, height/2, height * 4/5 );
  
  //障害物に乗るけど、ジャンプしなくても
  //if(x > width/3-20 && x < width/3+120){
    //x = constrain(x, width/3-20, width/3+120);
    //y = constrain(y, height/2, height*3/5);
    //if(keyIsDown(UP_ARROW)){jump2();}
  //}
  //else{
    //x=constrain(x, 0, width);
    //y=constrain(y, height/2, height * 4/5);
  //}

  
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
  //flower(200, height*4/5-50, 10);
  //flower(230, height*4/5-50, 10);

  
  noStroke();
  fill(6,145,43);
  rect(0, height*4/5, width, height/3);
  fill(179,152,96);
  rect(0, height*5/6, width, height/4);
  stroke(0);
  strokeWeight(1);
  fill(222,176, 247);
  ellipse(x, y-25 , 50); //地面の上に円が来るように
   if(keyIsDown(LEFT_ARROW)){ x -= 5; }
   if(keyIsDown(RIGHT_ARROW)){ x += 5; }
   //if(keyIsDown(UP_ARROW)){ y -= 5; }
   //if(keyIsDown(DOWN_ARROW)){ y += 5; }
   //if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
   //if(keyIsDown(" ".charCodeAt(0))){ x-= 10; }

   if(keyIsDown(RIGHT_ARROW) && keyIsDown(SHIFT)){ x+=10; }//右向きに進むときに押すと加速
   if(keyIsDown(LEFT_ARROW) && keyIsDown(CONTROL)){ x-=10; } //左向きに進むとき加速
   if(keyIsDown(UP_ARROW)){ 
    jump1();
   }
  
  //ブロックにまるおが乗れるようにしたい
  //fill(117, 69, 6);
  //rect(width/3, height*3/5, 50, 50);
  //rect(width/3+50, height*3/5, 50, 50);
  //fill(117,69,6);
  //rect(blockX, blockY, blockWidth, blockHeight);
  //rect(blockX+50, blockY, blockWidth, blockHeight); 
  


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

function cloud(cx, cy, r1, r2){
  ellipse(cx, cy, r1, r2);
  ellipse(cx+60, cy-20, r1/2, r2*2/3);
  //ellipse(cx+80, cy-40, r1/5, r2/2);
}

function flower(cx, cy, r1){
  stroke(6,145,43);
  line(cx, cy, cx, cy+50);
  noStroke();
  //fill(245, 164, 66);
  ellipse(cx, cy-5, r1);
  ellipse(cx+5, cy-2, r1);
  ellipse(cx-5, cy-2, r1);
  ellipse(cx+3, cy+5, r1);
  ellipse(cx-3, cy+5, r1);
  fill(255, 238, 8);
  ellipse(cx, cy, r1/2);
  
}

function block(bx, by, bw, bh){
  stroke(0);
  strokeWeight(1);
  fill(117, 69, 6);
  rect(bx, by, bw, bh);
  if(x > bx && x < bx + bw && y > by && y < by + bh && vy <0){
    y = by+bh+25;
    vy = -vy;
  } 
  else if(x > bx && x < bx + bw && y > by && y < by + bh){
     y = by; //まるおのy座標をブロックの上に
     vy = 0; // まるおのy方向の速度を0に
     if(keyIsDown(UP_ARROW)){ vy = -10; } //変更点　ブロックの上でもジャンプできるように
  } 
  else {
    y = constrain(y, height/2, height * 4/5 );
  }
}

// イベントハンドラを使用するパターン
//function keyPressed(){
   //if(key == " "){ y = 100 ; }
   //else if(keyCode == RIGHT_ARROW){ x+= 5; }
   //else if(keyCode == DOWN_ARROW){ y += 5; }
   //else if(keyCode == UP_ARROW){ y -= 5; }
   //else if(key == "A"){ x += 10; }
 //}

//function keyReleased(){
  //if(key  == " "){ y = height/2;}

//}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
