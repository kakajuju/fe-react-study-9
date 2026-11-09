
let year = 2060; // 출생년도
let num = 4; // 주민등록번호 뒷자리 첫 번째 숫자
let age = 2026 - year + 1;

if ((year >= 0 && year < 2026) || (num >= 1 && num <= 4)) {

    if (year < 2000 && num == 1) {
        console.log(age + '살 남자입니다.');
    } else if (year < 2000 && num == 2) {
        console.log(age + '살 여자입니다.');
    } else if ((year >= 2000 && year < 2026) && num == 3) {
        console.log(age + '살 남자입니다.');
    } else if ((year >= 2000 && year < 2026) && num == 4) {
        console.log(age + '살 여자입니다.');
    }

} else {
    console.log('잘못된 입력입니다.');
}
