// 小手調べ
function setup(){
  createCanvas(1000,1000);
  noFill();
  for(let i = 0; i < 10; i++){
    let d = (i+1)*20;
    
    if(i<5){
      stroke(0, 0, 255);
    } 
    else{
      stroke(255, 0, 0);
    }
    ellipse(100, 100, d, d);
    
  
  }
 
}

