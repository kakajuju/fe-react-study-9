// 문제 1. [for문] O
// let scores = [10, 20, 30, 40, 50];
// 배열의 모든 값을 순서대로 출력하세요.

// let scores = [10, 20, 30, 40, 50];
// for (let i = 0; i < scores.length; i++){
//     console.log(scores[i]);
// }

//-----------------------------------

// 문제 2. [for문] X
// let numbers = [5, 10, 15, 20, 25];
// 배열의 모든 값을 2배로 만들어 출력하세요.

// let numbers = [5, 10, 15, 20, 25];
// for(let i=0; i<numbers.length; i=i*2){
//     console.log(numbers[i]);
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
// 배열의 값을 뒤에서부터 순서대로 출력하세요.
// for(let i = 0; i > numbers.length; i--){
//     console.log(numbers[i]);
// }

//-----------------------------------

// 문제 5. [for...in] O
// let fruits = ['사과', '바나나', '포도', '딸기'];
// // 각 요소의 인덱스만 출력하세요.
// for (let i in fruits){
//     console.log(fruits[ i ]);
// }

//-----------------------------------

// 문제 6. [for...in]
let fruits = ['사과', '바나나', '포도', '딸기'];
// 인덱스와 값을 함께 출력하세요.
// 출력 예시: 0 : 사과
for (let i in fruits) {
    console.log(i + ' : ' + fruits[ i ]);
}