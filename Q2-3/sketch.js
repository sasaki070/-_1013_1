// イスラエル国旗（ほかの国旗に挑戦してもOK）
function setup() {
  createCanvas(270, 180);
  noStroke();
  const blue = color(0, 56, 184); //色を定義
  background(blue);

  const height = 180;
  const width = 270;
  const d = height / 9;

  //白帯を描く
  fill(254);
  rect(0,d,width,height-d*2); //白帯をプロット

  //六芒星を描く
    //六芒星の中心と国旗の中心を一致させるため、小さな正三角形の高さをtall(height/8)とした。
    //正立（倒立）三角形の高さは3*tallとなり、一辺が2*(3*tall)/√3である。
  const tall = height/8;
  const sqrt_3 = 1.7320508; //√３を定義
  const center_x_pos = width/2; //中心のx座標
  const right_x_pos = center_x_pos + 3*tall/sqrt_3; //右のx座標、中心から右へ辺の半分ずれる
  const left_x_pos = center_x_pos - 3*tall/sqrt_3; // 左のx座標、中心から左へ辺の半分ずれる
  noFill(); //内部を埋めない
  stroke(blue); //色の設定
  strokeWeight(6);//三角形の枠（辺）の幅
  triangle(center_x_pos,2*tall,left_x_pos,5*tall,right_x_pos,5*tall)  //正立三角形をプロット
  triangle(center_x_pos,6*tall,left_x_pos,3*tall,right_x_pos,3*tall)  //倒立三角形をプロット
}