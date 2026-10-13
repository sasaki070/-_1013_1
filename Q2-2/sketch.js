// チェッカー
function setup() {
  createCanvas(200, 200);
  const width = 200;
  const size = width / 8; // マスの一辺の長さ
  const half = size/2; //微調整用
  const radius = size*0.95; //円の半径


  for(let i = 0; i < 8; i++){/*x座標を指定*/
    for(let j = 0; j < 8; j++){/*y座標を指定*/

      if((i+j)%2==1){ /*i+jが奇数の時*/
        fill(150);    //ボックスは灰色
      }
      else{ /*i+jが偶数*/
        fill(254);  //ボックスは白色
      }
      stroke(150);  //枠の色を灰色に
      rect(size*i,size*j,size,size);  //ボックスをプロット

      //変数設定
        const x_pos =size*i + half; //円中心のx座標
        const y_pos =size*j + half; //円中心のy座標

      if((i+j)%2==1){/*奇数の時のみ円を描く*/
        if(j<3){/*jが3未満の時は赤色*/
          fill(254,0,0);
        }
        else if(j>4){/*jが4より大きい時は黒色*/
          fill(0,0,0);
        }
       ellipse(x_pos,y_pos,radius,radius) //円をプロット
      }
    }
  }
}
