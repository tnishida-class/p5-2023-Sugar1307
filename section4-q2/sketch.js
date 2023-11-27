// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);
  let pie_w = 300;
  let pie_h = 300;

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }

  // BLANK[1]
  for(let  i = 0; i < scores.length; i++){
    let lastAngle = HALF_PI;
    let angle = scores[i]/total * 100;
    arc(width/2, height/2, pie_w, pie_h, radians(lastAngle), radians(lastAngle+angle))
    lastAngle += angle;
  }
  
}

