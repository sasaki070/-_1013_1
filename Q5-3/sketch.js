// カレンダーを描画しよう
function setup(){
  createCanvas(200, 200);
  drawCalendar(2025, 10);
}


function drawCalendar(y, m){
  text(y+"年"+m+"月",5,15)
  for(let i = 0; i < 7; i++){
    const x = i * width / 7 ;
    const y = 30;
    stroke(255);
    text(dayOfWeekAsString(i), x, y);
  }
  let dow = dayOfWeek(y, m, 1);
  let k=2;
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] まずは daysInYear, dayOfWeek を作ろう
    if(dow==0){fill(255,0,0)}
      else if(dow==6){fill(0,0,255)}
      else{fill(0)}
    text(d,dow*width/7,20*k+10);
    if(dow==6){k +=1;}
    dow +=1; 
    dow %= 7;
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1] hint: 閏年なら366日、そうでなければ365日
  let days;
  if(isLeapYear(y)){/*うるう年のとき*/
    days = 366;
  }else{/*うるう年じゃないとき*/
    days = 365;
  }
  return days
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2] hint: 曜日がわかる日からの経過日数を求め7の剰余を取る　たとえば1970年1月1日木曜日
  let elapsed_days=0, i, dayis;
  const end_year = y;
  for(i = 1970; i< end_year; i++){
    elapsed_days += daysInYear(i);
  }
  elapsed_days += dayOfYear(y,m,d);
  elapsed_days += 3; //補正 木(0)➡日（0）
  dayis = elapsed_days % 7;
  return dayis;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}
