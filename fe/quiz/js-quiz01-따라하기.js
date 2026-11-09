let year = 2001; // 출생년도
let num = 4; // 주민등록번호 뒷자리 첫 번째 숫자

// 2000년 이전 출생: 남자 1, 여자 2
// 2000년 이후 출생(2000년 포함): 남자 3, 여자 4

// 개별 비교

if (year < 2000) { // year~1999    num 1or2


    let age = 2026 - year + 1;
    if (num == 1) {
        console.log("결과 : " + age + "살 남자입니다.");
    } else if (num == 2) {
        console.log("결과 : " + age + "살 여자입니다.");
    } else {
        console.log('잘못된 입력입니다.')
    }

}

/* else{

} */
if (year >= 2000) {

    let age = 2026 - year + 1;
    if (num == 3) {
        console.log("결과 : " + age + "살 남자입니다.");
    } else if (num == 4) {
        console.log("결과 : " + age + "살 여자입니다.");
    } else {
        console.log('잘못된 입력입니다.')
    }

}



// && 묶어서 비교
let age = 2026 - year + 1;

if (year < 2000 && num == 1) {
    console.log("결과 : " + age + "살 남자입니다.");
} else if (year < 2000 && num == 2) {
    console.log("결과 : " + age + "살 여자입니다.");
} else if (year >= 2000 && num == 3) {
    console.log("결과 : " + age + "살 남자입니다.");
} else if (year >= 2000 && num == 4) {
    console.log("결과 : " + age + "살 여자입니다.");
} else {
    console.log('잘못된 입력입니다.');

}

// 정상 필터링 비교


//나이 비교
// 2026년 기준 2027 2030 ?? xx
/* if (year >= 1900 && year <= 2026) {

    //년도는 정상!
    if (num >= 1 && num <= 4) {        // 주민번호 숫자 번위 1~4 O
        // num =3       year 1990
        //}

        let age = 2026 - year + 1;

        if (year < 2000 && (num == 1 || num == 2)) {
            if (num == 1)
                console.log()
        } */
if ((year < 2000 && (num == 1 || num == 2))
    ||
    (year >= 2000 && (num == 3 || num == 4))) {
    //연도도 정상
    //num도 정상
    //모든 입력값은 정상 확정
    if (num == 1 || num == 3) {
        console.log("결과 : " + age + "살 남자입니다.");
    } else {    // 2와 4
        console.log("결과 : " + age + "살 여자입니다.");
    }

}else {
    console.log('잘못된 입력입니다.');
}