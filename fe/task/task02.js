// PART 1. 변수 선언과 값 변경 (1~10)
// 문제 1. let으로 age 변수를 선언하고 25를 저장한 후 출력하세요.
/* let age =25;
console.log(age); */
// 문제 2. const로 userName 변수를 선언하고 "홍길동"을 저장한 후 출력하세요.
/* const userName = "홍길동";
console.log(userName); */
// 문제 3. let으로 price를 선언하고 1000을 저장하세요. 이후 2000으로 변경하고 출력하세요.
/* let price = 1000;
price = 2000;
console.log(price); */
// 문제 4. 값을 저장하지 않은 data 변수를 선언하고 출력하세요. 어떤 값이 출력되는지 확인하세요.
/* let data;
console.log(data);
 -> undefined */
// 문제 5. 이름 김철수, 나이 30, 키 178.5, 학생 여부 false를 각각 변수에 저장하고 출력하세요.
/* const name1 = "김철수";
let age = 30;
let cm = 178.5;
let student = false;
console.log(name1);
console.log(age);
console.log(cm);
console.log(student); */
// 문제 6.
// 출력 결과를 예상하세요.
// let a = 10;
// let b = a;
// a = 30;
// console.log(a);
// console.log(b);
/* 답 : a:30 / b:10 */

// 문제 7. let score = 80; let score = 90; 코드의 오류 원인을 설명하고 수정하세요.
/* 오류 원인 : 같은 score의 변수를 가지고 있다.
let score8 = 80;
let score9 = 90; */
// 문제 8. const maxValue = 100; maxValue = 200; 코드의 오류 원인을 설명하세요.
/* 답 : const는 비정수형으로 한번 저장한 값은 변경할 수 없다. */
// 문제 9. 다음 변수명 중 사용할 수 없는 것을 찾고 수정하세요.
/* let score = 100;
let myName = "홍길동";
let userAge = 20;
let $money = 5000;
let user_name = "김철수"; */
// 문제 10. 다음 중 중복 선언이 가능한 코드를 찾으세요.
/* A: var a = 10; var a = 20;
B: let b = 10; let b = 20;
C: const c = 10; const c = 20;
답 : A */
// -------------------------------------------------------------------
// PART 2. 산술연산자 (11~20)
// 문제 11. a=15, b=4를 선언하고 덧셈, 뺄셈, 곱셈, 나눗셈을 각각 출력하세요.
/* let a = 15;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); */
// 문제 12. 100을 7로 나눈 나머지를 출력하세요.
/* let a = 100;
let b = 7;
console.log(a % b); */
// 문제 13. 2의 5제곱을 ** 연산자로 계산하여 출력하세요.
/* let a = 2;
let b = 5;
console.log(a ** b); */
// 문제 14. a=10, b=3일 때 a / b와 a % b의 결과를 예상하세요.
/* 답 : 3.3 / 1 */
// 문제 15. console.log(10 + 5 * 2); 결과를 예상하세요.
/* 답 : 20 */
// 문제 16. console.log((10 + 5) * 2); 결과를 예상하세요.
/* 답 : 30 */
// 문제 17. console.log(20 - 4 * 3 + 10); 결과를 예상하세요.
/* 답 : 18 */
// 문제 18. console.log(2 ** 3 + 10 % 3 * 5); 결과를 예상하세요.

// 문제 19. 사과 한 개 1200원, 5개 구매 시 총금액을 변수와 연산자로 계산하세요.
// 문제 20. 125분을 시간과 분으로 나누어 출력하세요. /, %, Math.floor()를 사용하세요.