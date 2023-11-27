// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let speed;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  speed = 1;
}

function draw(){
  background(160, 192, 255);
  count = (count + speed) % cycle; //countを０から１００の間で増加させる(どんどん大きくなる）
  if (keyIsPressed){
    speed = 2;
  } else{
    speed = 1;
  } //キーを押しているときは速くなる
  if(count<cycle/2){
    size=count+50;
  } //countが周期の半分未満の時は円を大きくする
  else{
    size=(cycle-count)+50;
  } //countが周期の半分以上のときは円を小さくする
  ellipse(width / 2, height / 2, size);
}
