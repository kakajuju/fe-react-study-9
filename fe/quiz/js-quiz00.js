//문제 1. 자기소개 정보 저장하기

const camelCase1 = "이름:";
const camelCase2 = "나이:";
const camelCase3 = "키:";
const camelCase4 = "학생 여부:";
const camelCase5 = "거주 지역:";

let camelCase$1 = "홍길동";
let camelCase$2 = "25";
let camelCase$3 = "175.5";
let camelCase$4 = "true";
let camelCase$5 = "서울";

console.log(camelCase1 + camelCase$1)
console.log(camelCase2 + camelCase$2)
console.log(camelCase3 + camelCase$3)
console.log(camelCase4 + camelCase$4)
console.log(camelCase5 + camelCase$5)

camelCase$2 = "26";

console.log(camelCase1 + camelCase$1)
console.log(camelCase2 + camelCase$2)
console.log(camelCase3 + camelCase$3)
console.log(camelCase4 + camelCase$4)
console.log(camelCase5 + camelCase$5)

// -------------------------------------------------------------------
//문제 2. 변수의 값 변경하기

let price = 1000;
let quantity = 5;
const productName = "사과";

console.log(price)
console.log(quantity)
console.log(productName)

price = price + 500;
quantity = quantity + 5;

console.log(price)
console.log(quantity)

// productName = "애플";
console.log(productName)
// 변하지 않는다. - const는 변경할 수 없는 연산자이다.

// -------------------------------------------------------------------
//문제 3. 출력 결과 예측하기

let a = 10;
let b = 20;
let c;

console.log(a); // 답 : 10
console.log(b); // 답 : 20
console.log(c); // 답 : undefined

a = 100;
b = a;

console.log(a); // 답 : 100
console.log(b); // 답 : 100
//3.  b = a 의미 : b는 a의 값을 같는다.
//4. c가 undefined로 출력되는 이유 - c라는 공간은 만들었지만 연산자는 없다


// -------------------------------------------------------------------
//문제 4. 잘못된 변수명 수정하기

let nA1me = "김철수";
let userAge = 30;
let user_nam = "이영희";
let cst = 100;
let my_score = 95;
let $price = 5000;
let _count = 10;

console.log(nA1me)
console.log(userAge)
console.log(user_nam)
console.log(cst)
console.log(my_score)
console.log($price)
console.log(_count)