// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height*4/ 5 ;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ
  const a = 0.5; //加速度

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
  if(keyIsDown(SHIFT)){/*シフト押しながらで加速*/
    if(keyIsDown(LEFT_ARROW)){ vx -= a*3 ;}
    if(keyIsDown(RIGHT_ARROW)){ vx += a*3 ;}
    vx = constrain(vx, -30, 30);
  }else{/*左右移動*/
    if(keyIsDown(LEFT_ARROW)){ vx -= a; }
    if(keyIsDown(RIGHT_ARROW)){ vx += a; }
  }

  //摩擦 　/*ボタンを押していないと減速*/
  if(!keyIsDown(LEFT_ARROW)&&!keyIsDown(RIGHT_ARROW)){ vx *= 0.9; }

  // BLANK[2] 重力とジャンプ

  //地面にいるときにスペースでジャンプ
  if(y == height*4/5 && keyIsDown(" ")){ vy -= 30;}
  if(y == height*4/5 && keyIsDown(" ".charCodeAt(0))){ vy -= 30;}
  if(y == height*4/5 && keyIsDown(UP_ARROW)){ vy -= 30;}


  //重力
  vy += g;

  //ヒップドロップ
  if(keyIsDown(DOWN_ARROW)){
    vx = 0;
    vy += g*3;
  }

  //速度の範囲
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -30, 30);

  // 位置を更新
  x += vx;
  y += vy;

  //xは座標のループ
  if(x>width){ x=0; }
  if(x<0){ x=width; }

  //yの範囲
  y = constrain(y,0,height*4/5);

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}



