

let money = 0;


let isHungry = true;

if (isHungry) {
    console.log("햄버거 주문");
    money = money + 5000;
} else {
    console.log("맥플러리 주문");
    money += 2000;
}

let option = false;

if (option) {
    console.log("패티 옵션 추가")
    money = money + 2000;
} else {
    console.log("옵션 추가 없음");
    // money += 0;
}

let isDscount = true;
let coupon = 0;
let age = 25;



// if (isDscount == false){}
if (!isDscount) { // 할인이 없으면
    console.log("할인 없음");
} else { // 할인을 받으면

    //추가적인 로직 얼마 할인이냐   20살 아래는 1000원 할인쿠폰  위는 500원 할인쿠폰
    if (age < 20) { // 1000원할인
        // money = money - 1000
        coupon - 1000;
    } else { // 500원할인
        // money = money - 500
        coupon - 500;
    }

    console.log("할인 적용 됩니다.");
    // money = money - 500;
    money = money - coupon;
}

console.log("할인 적용된 금액 : " + coupon);
console.log("최종 금액 : " + money);