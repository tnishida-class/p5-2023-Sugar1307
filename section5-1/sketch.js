// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0, 0, 255);
  noStroke();
  //for(let i = 0; i < 12; i++){
    //let theta = TWO_PI * i / 12;
    //let x = 100 + cos(theta) * 50;
    //let y = 100 + sin(theta) * 50;
    //ellipse(x, y, 10);
  //}
//}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i/12;
    let x = width/2 + cos(theta) * width/4;
    let y = height/2 + sin(theta) * height/4;
    fill(255,204,0);
    star(x,y,width/20);
  }
}


function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;//-HALF_PIで星の角度が変わる
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}