


/* 
    if()

    if()

    if()
    ...
    else 혼자 사용 불가


    if
    else
    else    else가 두번 불가

    if
    else if
    else if
    else if 언제든지 가능

    ------
    else if 혼자 사용x

    if
    else if
    else if
    else if
    else    끝맺음 가능

    if
    else if 끝맺음이 없을 수 있음.

    if
    else    무조건 둘중 하는 실행한다.
*/

let dice = 5;  //주사위 1~6

if (dice == 1) {
    console.log('1칸 전진');
} else {
    console.log('1칸 전진');
}


//dice : 1~6만 가능하다고 보장

if (dice == 1) {

} else if (dice == 2) {

} else if (dice == 3) {

} else if (dice == 4) {

} else if (dice == 5) {

} else if (dice == 6) {

}


//-------------------------
if (dice == 1) {

} else if (dice == 2) {

} else if (dice == 3) {

} else if (dice == 4) {

} else if (dice == 5) {

} else { // <=여기에 6이 묶여있다.

}



//------------------------------
if (dice == 1) {}
if (dice == 2) {}
if (dice == 3) {}
if (dice == 4) {}
if (dice == 5) {}
if (dice == 6) {}


// 조건식 -> 최종적으로 true false 논리형 결과

if(dice > 10) {}

let result = dice ==3;

if(result){}
if(result == true ){}
if(result == false ){}
if(!result){}
if( !(result == true) ){}

if(dice > 0 && dice <= 6){}  //1~6보장 조건

if(dice < 1 || dice > 6){} // 1~6 범위를 벗어나면

if(     !(dice < 1 || dice > 6)     ){}
if(     (dice < 1 || dice > 6) == false  ){}


// -------------------------------
// switch (비교하려는대상) {}


dice = 3;
switch(dice){
    case 1:     // dice == 1
        console.log('case 1');
        break;  //브레이크가 있어야 문법을 나간다.
    case 2:     // dice == 2
        console.log('case 2');
        break;
    case 3:
        console.log('case 3');
        break;
    case 4:
        console.log('case 4');
        break;
    case 5:
        console.log('case 5');
        break;
    case 6:     // 이 안에 들어온 모든게 하나{}안에 들어온 것과 같다.
        console.log('case 6');
        console.log('case 7');
        console.log('case 8');
        console.log('case 9');
        console.log('case 10');
        console.log('case 11');
        break;
}



dice = 3;
switch(dice){
    case 1:     // dice == 1
        console.log('case 1');
        break;
    case 2:     // dice == 2
        console.log('case 2');
        break;
    case 3:
        console.log('case 3');
        break;
    case 4:
        console.log('case 4');
        break;
    case 5:
        console.log('case 5');
        break;
    // case 6:
    default:     // else와 같다.
        console.log('case 6');
        console.log('case 7');
        console.log('case 8');
        console.log('case 9');
        console.log('case 10');
        console.log('case 11');
        break;
}


//======================================
console.log('---------------------');

/* 
    출근 시간 대비 해야할 일

    8시  청소
    9시  회의
    10시 업무
    11시 퇴큰
*/

let showTime = 8;

if(showTime == 8){
    // 청소 회의 업무 외근
} else if(showTime == 9){
    // 회의 업무 외근
} else if(showTime == 10){
    // 업무 외근
}else {
    // 외근
}

//8.5시는?
if(showTime <= 8){
    //청소 회의 업무 외근
}
else if (showTime <= 9){}
else if (showTime <= 10){}
else if (showTime <= 11){}
else {} //결근처리

//논리적 오류 존재
if(showTime <= 11){
    // 외근
}
else if (showTime <= 10){}  // 업무 외근
else if (showTime <= 9){}   // 회의 업무 외근
else if (showTime <= 8){}   // 청소 회의 업무 외근
else {} //결근처리

//논리적 오류 존재
if(showTime > 8){
    //청소 회의 업무 외근
}
else if (showTime > 9){}
else if (showTime > 10){}
else if (showTime > 11){}
else {} //결근처리


if(showTime > 11){
    //청소 회의 업무 외근
}
else if (showTime > 10){}
else if (showTime > 9){}
else if (showTime > 8){}
else {} //결근처리


if (showTime <=8){
    //청소
}

if (showTime <=9){
    //회의
}

if (showTime <=10){
    //업무
}

if (showTime <=11){
    //외근
}

switch(showTime){
    case 8:
        //청소
    case 9:
        //회의
    case 10:
        //업무
    case 11:
        //외근
}

switch(showTime){
    case 8:
        //청소
        //회의
        //업무
        //외근
        break;
    case 9:
        //회의
        //업무
        //외근
        break;
    case 10:
        //업무
        //외근
        break;
    case 11:
        //외근
        //break;    //<= 뒤에 코드가 더 없으면 생략가능
}