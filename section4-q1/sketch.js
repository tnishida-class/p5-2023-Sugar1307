// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
    // BLANK[1]
    const x = i*dx+10 //i番目のx座標
    const y = height -(height * scores[i]/100);
    ellipse(x, y, 10);

    
    
      //px = (i-1)*dx+10;
      //py = height - (height* scores[i-1]/100);
      line(px, py, x,y);
      //pxにｘを代入したりできる
      px=x;
      py=y;


    
    
    
    

   

  }
}
