// 最終課題を制作しよう
let x, y, vx, vy;
let n=3
let r =100
let R=100,G=255,B=255;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width / 2;
  y = height / 2;
  array = [-1,-1/2,1,1/2,1]
  let k = round(random(0,4))
  vx = array[k]*2;
  k=round(random(0,4))
  vy = array[k]*2;
  angle_add = 0;
}

function draw() {
  background(0, 40);
  fill(R,G,B);
  shape_maker(x,y,n,angle_add, r);

  // x,y方向への移動
  x += vx;
  y += vy;

  angle_add +=0.05

  // 跳ね返り
  if(x < 0 || x > width){ 
    R = y%255*200/255;
    vx = -1 * vx;
    n++; 
    vx = vx*(1+1/n);
    r = r*(n-1)/n;
  }
  if(y < 0 || y > height){
    R = x%255*200/255;
    vy = -1 * vy;
    vy = vy*(1+1/n);
    n++;
    r = r*(n-1)/n;
     }


  

  // x座標, y座標の制限
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

}

function shape_maker(x,y,n,angle_add,r){
  let angle = TWO_PI/n;

  //図形の点打ち
  push();
  noStroke();
  beginShape();
  for(let i =0; i<n; i++){
    vertex(x+r*cos(angle*i+angle_add),y+r*sin(angle*i+angle_add));
  }
  endShape(CLOSE);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  n = 3;    // クリックで三角形に戻る
  r = 100;  // 大きさもリセット
  vx = 2;
  vy = 2;
  background(0); // 画面を真っ暗にリセット
}