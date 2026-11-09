

// 조건문 중첩


/*
if(){

    if(){}
    else{}

}else {

    if(){}

}
*/

/* 
    수면시작시간

    21시 기준
        이전 -> 일찍
        이후 -> 늦게

    실제수면시간

    8시간 기준
        적게
        많이

    일찍 적게
    일찍 많이
    늦게 적게
    늦게 많이
*/

let goBedTime = 23;
let sleepTime = 5;

if (goBedTime <= 21) {  //일찍

    // 일찍 자러간건 확정!

    //많이 적게 판단

    if (sleepTime >= 8) {   //많이
        console.log('일찍 많이');
    } else {    //적게
        console.log('일찍 적게');
    }

} else {    //늦게

    //늦게 자러간거 확정

    if (sleepTime >= 8) {   //많이
        console.log('늦게 많이');
    } else {    //적게
        console.log('늦게 적게');
    }
}


if (goBedTime <= 21 && sleepTime >= 8) {
    console.log('일찍 많이');
} else if (goBedTime <= 21 && sleepTime < 8) {
    console.log('일찍 적게');
} else if (goBedTime > 21 && sleepTime < 8) {
    console.log('늦게 적게');
} else if (goBedTime < 21 && sleepTime < 8) {
    console.log('늦게 많이');
}



let point = 50;

// 0~ 100 사이

//잘못된예시
if (point >= 50)
    console.log('잘했다');
else
    console.log('아쉽다');


if (point >= 50 && point <= 100)
    console.log('잘했다');
if (point < 50 && point >= 0)
    console.log('아쉽다');


// 먼저 정상 범위를 필터링 하고 -> 비교 진행

if (point >= 0 && point <= 100) { // 0~ 100 보장


    if (point >= 50)
        console.log('잘했다');
    else
        console.log('아쉽다');

} else {
    console.log('점수 입력이 잘못되었습니다. 0~100점 참고;');
}