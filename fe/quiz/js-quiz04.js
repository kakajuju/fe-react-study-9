// 문제 1. [for문] O
// let scores = [10, 20, 30, 40, 50];
// 배열의 모든 값을 순서대로 출력하세요.

// let scores = [10, 20, 30, 40, 50];
// for (let i = 0; i < scores.length; i++){
//     console.log(scores[i]);
// }

//-----------------------------------

// 문제 2. [for문] O
// let numbers = [5, 10, 15, 20, 25];
// // 배열의 모든 값을 2배로 만들어 출력하세요.
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]*2);
// }

//-----------------------------------

// 문제 3. [for문] O
// let scores = [70, 80, 90, 60, 100];
// // 각 배열 요소의 인덱스와 값을 함께 출력하세요.
// // 출력 예시: 0번 : 70

// for(let i = 0; i < scores.length; i++){
//     console.log(i + '번 : ' + scores[ i ]);
// }

//-----------------------------------

// 문제 4. [for문] X
// let numbers = [1, 2, 3, 4, 5];
// // 배열의 값을 뒤에서부터 순서대로 출력하세요.
// for(let i = 0; i > numbers.length; i--){
//     console.log(numbers[i]);
// }

//-----------------------------------

// 문제 5. [for...in] O
// let fruits = ['사과', '바나나', '포도', '딸기'];
// // 각 요소의 인덱스만 출력하세요.
// for (let i in fruits){
//     console.log(i);
// }

//-----------------------------------

// 문제 6. [for...in]  O
// let fruits = ['사과', '바나나', '포도', '딸기'];
// // 인덱스와 값을 함께 출력하세요.
// // 출력 예시: 0 : 사과
// for (let i in fruits) {
//     console.log(i + ' : ' + fruits[ i ]);
// }

//-----------------------------------

// 문제 7. [for...of]
// let prices = [1000, 2000, 3000, 4000];
// // 배열의 모든 값을 출력하세요.
// for(let v of prices) {
//     console.log(v);
// }

//-----------------------------------

// 문제 8. [for...of]
// let numbers = [3, 6, 9, 12, 15];
// // 각 값을 10 증가시켜 출력하세요.
// for(let v of numbers) {
//     console.log(v+10);
// }

//-----------------------------------

// 문제 9. [forEach]
// let scores = [50, 60, 70, 80, 90];
// // 각 요소의 인덱스와 값을 출력하세요.
// scores.forEach((value, index) => {
//   console.log(index + " : " + value);
// });

//-----------------------------------

// 문제 10. [forEach]
// let names = ["김철수", "이영희", "박민수"];
// // 각 요소를 '1번 김철수'와 같은 형태로 출력하세요.
// // 번호는 1부터 시작합니다.
// names.forEach((value, index) => {
//   console.log((index+1) + "번 " + value);
// });
