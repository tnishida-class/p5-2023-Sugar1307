// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love BTS, SEVENTEEN and Hinatazaka46");
}

function balloon(t){
  let w = textWidth(t);//文字列の幅
  let h = textAscent() + textDescent();//文字の高さ
  let p = 100;
  fill(0);
  rect(0, 0, w + p * 2, h + p * 2);
  fill(218,195,250);
  ellipse(p*2, h+p, w+p, h+p);
  fill(255);
  text(t, p, h + p);
}
