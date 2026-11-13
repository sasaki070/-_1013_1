// 吹き出し
function setup(){
  createCanvas(400, 400);
  textSize(16);
}

function draw(){
  background(220);
  balloon("関数は難しい？", 100, 100);
  balloon("関数は便利？", mouseX, mouseY);
}

function balloon(t, x, y){
  const w = textWidth(t); // テキストの幅
  const h = textAscent() + textDescent(); // テキストの高さ
  const p = 4; // 余白の大きさ (padding)

  push();

  // BLANK[1] 吹き出しの背景を先に描く
  noStroke()
  fill(140, 123, 201);
  ellipse(x+w/2,y+h*2/3,w*1.5,h*2.5)

  // BLANK[2] 吹き出しの三角形を描く

  beginShape()
  vertex(x+w/2,y+h*2/3); 
  vertex(x+w*4/5,y+h*2/3); 
  vertex(x+w*4/5,y+h*3); 
  endShape()

  // 吹き出しのテキストを次に描く
  textAlign(LEFT, CENTER);
  fill(255);
  text(t, x + p, y + h / 2 + p);
  
  pop();
}