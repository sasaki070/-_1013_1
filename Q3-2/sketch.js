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

  if(keyIsDown(SHIFT)){
    if(keyIsDown(LEFT_ARROW)){ vx -= a*3 ;}
    if(keyIsDown(RIGHT_ARROW)){ vx += a*3 ;}
  }else{
    if(keyIsDown(LEFT_ARROW)){ vx -= a; }
    if(keyIsDown(RIGHT_ARROW)){ vx += a; }
  }


  //摩擦
  if(!keyIsDown(LEFT_ARROW)&&!keyIsDown(RIGHT_ARROW)){ vx *= 0.9; }

  // BLANK[2] 重力とジャンプ
  if(y == height*4/5 && keyIsDown(32)){ vy -= 30;}
  vy += g;


  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -30, 30);

  if(keyIsDown(DOWN_ARROW)){
    vx = 0;
    vy += g*3;
  }

  // 位置を更新
  x += vx;
  y += vy;


  //x = constrain(x,0,width);
  if(x>width){ x=0; }
  if(x<0){ x=width; }

  y = constrain(y,0,height*4/5);

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}



