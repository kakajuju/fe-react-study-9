// 학습 목표
// for, for...in, for...of, forEach()를 사용하여 배열의 인덱스와 값에 접근하는 방법을 연습합니다.

// 공통 조건
// - 각 문제에서 지정한 반복문을 사용하세요.
// - 결과는 console.log()로 출력하세요.

// 문제 1. [for문]
// let scores = [10, 20, 30, 40, 50];
// 배열의 모든 값을 순서대로 출력하세요.
{
    let scores = [ 10, 20, 30, 40, 50 ];
    for (let i = 0; i < scores.length; i++) {
        console.log(scores[ i ]);
    }
}
console.log('----------------2번-------------------')
// 문제 2. [for문]
// let numbers = [5, 10, 15, 20, 25];
// 배열의 모든 값을 2배로 만들어 출력하세요.
{
    let numbers = [ 5, 10, 15, 20, 25 ];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[ i ] * 2);
    }
}
console.log('----------------3번-------------------')
// 문제 3. [for문]
// let scores = [70, 80, 90, 60, 100];
// 각 배열 요소의 인덱스와 값을 함께 출력하세요.
// 출력 예시: 0번 : 70
{
    let scores = [ 70, 80, 90, 60, 100 ];
    for (let i = 0; i < scores.length; i++) {
        console.log(i + "번 : " + scores[ i ]);
    }
}
console.log('----------------4번-------------------')
// 문제 4. [for문]
// let numbers = [1, 2, 3, 4, 5];
// 배열의 값을 뒤에서부터 순서대로 출력하세요.
{
    let numbers = [ 1, 2, 3, 4, 5 ];
    for (let i = 4; i >= 0; i--) {
        console.log(numbers[ i ]);
    }
}
console.log('----------------5번-------------------')
// 문제 5. [for...in]
// let fruits = ['사과', '바나나', '포도', '딸기'];
// 각 요소의 인덱스만 출력하세요.
{
    let fruits = [ '사과', '바나나', '포도', '딸기' ];
    for (let i in fruits) {
        console.log(i);
    }
}
console.log('----------------6번-------------------')
// 문제 6. [for...in]
// let fruits = ['사과', '바나나', '포도', '딸기'];
// 인덱스와 값을 함께 출력하세요.
// 출력 예시: 0 : 사과
{
    let fruits = [ '사과', '바나나', '포도', '딸기' ];
    for (let i in fruits) {
        console.log(i + " : " + fruits[ i ]);
    }
}

console.log('----------------7번-------------------')
// 문제 7. [for...of]
// let prices = [1000, 2000, 3000, 4000];
// 배열의 모든 값을 출력하세요.
let prices = [ 1000, 2000, 3000, 4000 ];
// price 금액 복수형태 s
for (let price of prices) {   //let value item v price 단일  값을 의미하는 단어를 사용할 것.
    console.log(price);
}


console.log('----------------8번-------------------')
// 문제 8. [for...of]
// let numbers = [3, 6, 9, 12, 15];
// 각 값을 10 증가시켜 출력하세요.
let numbers = [ 3, 6, 9, 12, 15 ];
for (let number of numbers) {
    console.log(number + 10);
}

console.log('----------------9번-------------------')
// 문제 9. [forEach]
// let scores = [50, 60, 70, 80, 90];
// 각 요소의 인덱스와 값을 출력하세요.
let scores = [ 50, 60, 70, 80, 90 ];
scores.forEach((value, index) => {
    console.log(index + " : " + value);
})

console.log('----------------10번-------------------')
// 문제 10. [forEach]
// let names = ['김철수', '이영희', '박민수'];
// 각 요소를 '1번 김철수'와 같은 형태로 출력하세요.
// 번호는 1부터 시작합니다.
let names = [ '김철수', '이영희', '박민수' ];
names.forEach((name, index) => {
    console.log((index + 1) + "번 " + name);
})