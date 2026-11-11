// =====================================================================
// JS 복습 예제 20문제 — 정답 & 해설
// 문제 : js-practice01.js
// 각 문제를 { } 블록으로 감싸서 변수 이름이 겹쳐도 충돌하지 않게 했다. (let/const 블록 스코프)
// =====================================================================


// ─────────────── A. 변수 · 연산자 · 조건문 ───────────────

// 문제 1. [삼항 연산자]
{
  let num = 7;
  // 2로 나눈 나머지가 0이면 짝수, 1이면 홀수
  let result = num % 2 === 0 ? '짝수' : '홀수';
  console.log(num + '은 ' + result + '입니다');
}

//-----------------------------------

// 문제 2. [if ~ else if]
{
  let score = 85;
  let grade;
  // 큰 기준부터 검사해야 한다. (80 이상을 먼저 검사하면 95점도 B가 됨)
  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else {
    grade = 'F';
  }
  console.log(score + '점은 ' + grade + '학점');
}

//-----------------------------------

// 문제 3. [논리 연산자]
{
  let year = 2024;
  // && 가 || 보다 먼저 계산되지만, 의도를 분명히 하려고 괄호로 묶는다.
  let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  console.log(year + '년은 ' + (isLeap ? '윤년' : '평년'));
}

//-----------------------------------

// 문제 4. [출력 예측]
{
  console.log(5 == '5');    // true   - == 는 타입을 맞춘 뒤 비교 ('5' → 5)
  console.log(5 === '5');   // false  - === 는 타입까지 비교 (number ≠ string) → 항상 === 사용 권장
  console.log('10' + 5);    // '105'  - + 는 한쪽이 문자열이면 "연결"
  console.log('10' - 5);    // 5      - - 는 연결 기능이 없어서 숫자로 바꿔서 계산
  console.log(1 + 2 + '3'); // '33'   - 왼쪽부터: 1+2=3(숫자) → 3+'3'='33'
  console.log('1' + 2 + 3); // '123'  - 왼쪽부터: '1'+2='12' → '12'+3='123'
}


// ─────────────── B. 반복문 ───────────────

// 문제 5. [for문 + 조건문]
{
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      sum = sum + i;
    }
  }
  console.log('3의 배수의 합 : ' + sum); // 1683

  // 다른 풀이: 처음부터 3씩 증가 → 반복 횟수가 1/3로 줄어든다.
  // for (let i = 3; i <= 100; i += 3) sum += i;
}

//-----------------------------------

// 문제 6. [for문]
{
  const dan = 7;
  for (let i = 1; i <= 9; i++) {
    console.log(dan + ' x ' + i + ' = ' + dan * i); // * 가 + 보다 먼저 계산된다
  }
}

//-----------------------------------

// 문제 7. [for문 + 문자열 누적]
{
  let star = '';
  for (let i = 1; i <= 5; i++) {
    star = star + '*'; // 반복할 때마다 별이 하나씩 늘어난 상태를 유지
    console.log(star);
  }
  // 다른 풀이: console.log('*'.repeat(i));
}

//-----------------------------------

// 문제 8. [while문]
{
  // 몇 번 반복할지 미리 모르고 "조건" 만 알 때 → while 이 자연스럽다.
  let n = 0;
  let sum = 0;
  while (sum <= 100) {
    n++;
    sum = sum + n;
  }
  console.log(n + '까지 더했을 때 합 ' + sum); // 14까지 더했을 때 합 105
}

//-----------------------------------

// 문제 9. [break / continue]
{
  let result = '';
  for (let i = 1; i <= 20; i++) {
    if (i === 17) break;        // 반복문 자체를 끝냄
    if (i % 5 === 0) continue;  // 이번 회차만 건너뛰고 다음 i 로
    result = result + i + ' ';
  }
  console.log(result); // 1 2 3 4 6 7 8 9 11 12 13 14 16
}


// ─────────────── C. 함수 ───────────────

// 문제 10. [함수 만드는 3가지 방법]
{
  function getArea1(width, height) {          // ① 선언문 - 호이스팅 O
    return width * height;
  }
  const getArea2 = function (width, height) { // ② 표현식 - 변수에 함수를 담음
    return width * height;
  };
  const getArea3 = (width, height) => width * height; // ③ 화살표 - { } 생략 시 바로 return

  console.log(getArea1(3, 4)); // 12
  console.log(getArea2(5, 6)); // 30
  console.log(getArea3(7, 8)); // 56
}

//-----------------------------------

// 문제 11. [매개변수 + return]
{
  function getMax(a, b, c) {
    let max = a;          // 일단 첫 번째를 최댓값으로 가정
    if (b > max) max = b; // 더 큰 값이 나오면 교체
    if (c > max) max = c;
    return max;
  }
  console.log(getMax(3, 9, 5));    // 9
  console.log(getMax(10, 2, 7));   // 10
  console.log(getMax(-1, -5, -3)); // -1 ← max 를 0으로 시작하면 여기서 0이 나와 틀린다!
}

//-----------------------------------

// 문제 12. [호이스팅 · 스코프 예측]
// (1) undefined         - var 는 "선언"만 위로 끌어올려지고 값(10)은 아직 안 들어감
// (2) 'hello'           - 함수 선언문은 통째로 끌어올려져서 선언 전에 호출 가능
// (3) ReferenceError    - const 에 담은 함수는 선언 전에 사용 불가 (TDZ: 일시적 사각지대)
// (4) 30                - var 는 { } 블록을 무시한다 (함수 단위 스코프)
// (5) ReferenceError    - let 은 { } 블록 안에서만 존재
// 결론: var 는 예상 밖으로 동작하니 let / const 를 사용한다.

//-----------------------------------

// 문제 13. [f 와 f() 의 차이]
{
  function runTwice(f) {
    f();
    f();
  }
  const sayHi = () => console.log('안녕');

  runTwice(sayHi); // (1) '안녕' '안녕' - 함수 자체를 넘겨서 runTwice 안에서 2번 실행
  // runTwice(sayHi());
  // (2) '안녕' 1번 출력 후 TypeError: f is not a function
  //     sayHi() 가 먼저 실행되고(안녕 출력), 그 return 값 undefined 가 f 로 들어감
  //     → undefined() 를 실행하려다 에러
}

//-----------------------------------

// 문제 14. [콜백 함수]
{
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;

  // calculate 는 "어떻게 계산할지" 모른다. 계산 방법은 호출하는 쪽이 함수로 넘겨준다.
  function calculate(a, b, callback) {
    return callback(a, b);
  }

  console.log(calculate(10, 5, add)); // 15
  console.log(calculate(10, 5, sub)); // 5
  console.log(calculate(10, 5, mul)); // 50
  console.log(calculate(10, 5, (a, b) => a / b)); // 2 - 그 자리에서 익명 함수로 전달
}

//-----------------------------------

// 문제 15. [함수를 return 하는 함수]
{
  function makeMultiplier(n) {
    // 안쪽 함수는 바깥 함수가 끝난 뒤에도 n 을 기억한다 → "클로저(closure)"
    return (x) => x * n;
  }
  const double = makeMultiplier(2); // double = (x) => x * 2
  const triple = makeMultiplier(3); // triple = (x) => x * 3
  console.log(double(5)); // 10
  console.log(triple(5)); // 15
}

//-----------------------------------

// 문제 16. [즉시 실행 함수 IIFE]
(function () {
  let name = '홍길동';
  let age = 25;
  console.log(name + '님은 ' + age + '살입니다');
})();
// console.log(name);
// → name, age 는 함수 안에서만 존재하므로 밖에서 접근할 수 없다. (ReferenceError)
//   ※ 브라우저에서는 window.name 이라는 기본 속성 때문에 빈 문자열이 나올 수 있다.
// 이유: 한 번만 쓸 변수들을 전역에 남기지 않아서 다른 코드의 같은 이름과 충돌하지 않게 한다. (전역 오염 방지)


// ─────────────── D. 배열 ───────────────

// 문제 17. [배열 + for문]
{
  let scores = [88, 92, 75, 64, 100];
  let sum = 0;
  let max = scores[0]; // 0 이 아니라 배열의 첫 값으로 시작 (음수 배열 대비)

  for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
    if (scores[i] > max) max = scores[i];
  }

  console.log('총합 : ' + sum);                 // 419
  console.log('평균 : ' + sum / scores.length); // 83.8 - 5 대신 length 를 쓰면 배열 길이가 바뀌어도 안전
  console.log('최고점 : ' + max);               // 100
}

//-----------------------------------

// 문제 18. [배열 + 조건 → 새 배열]
{
  let numbers = [3, 8, 12, 5, 7, 20, 15, 6];
  let evens = [];

  for (const v of numbers) {   // 인덱스가 필요 없으니 for...of
    if (v % 2 === 0) {
      evens.push(v);           // 배열 맨 뒤에 추가
    }
  }
  console.log(evens); // [ 8, 12, 20, 6 ]

  // 앞으로 배울 방법: numbers.filter((v) => v % 2 === 0)
}

//-----------------------------------

// 문제 19. [역순 for문]
{
  let letters = ['A', 'B', 'C', 'D', 'E'];
  let reversed = [];

  // 마지막 인덱스(length - 1)부터 0까지 거꾸로
  for (let i = letters.length - 1; i >= 0; i--) {
    reversed.push(letters[i]);
  }
  console.log(reversed); // [ 'E', 'D', 'C', 'B', 'A' ]
  console.log(letters);  // [ 'A', 'B', 'C', 'D', 'E' ] - 원본 유지
  // 주의: letters.reverse() 는 원본 자체를 뒤집는다.
}

//-----------------------------------

// 문제 20. [종합 - 함수 + 배열 + forEach + 조건문]
{
  let names = ['김철수', '이영희', '박민수', '최지우'];
  let points = [85, 55, 72, 40];
  const PASS_SCORE = 60; // 기준 점수를 상수로 빼두면 바꿀 때 한 곳만 고치면 된다

  // ① 판정 로직을 함수로 분리 → 출력 코드와 판정 코드가 섞이지 않는다
  function getResult(point) {
    return point >= PASS_SCORE ? '합격' : '불합격';
  }

  // ② 같은 index 로 두 배열을 짝지어 사용
  let passCount = 0;
  names.forEach((name, index) => {
    const point = points[index];
    const result = getResult(point);
    console.log((index + 1) + '. ' + name + ' : ' + point + '점 (' + result + ')');
    if (result === '합격') passCount++;
  });

  // ③
  console.log('합격자 수 : ' + passCount + '명'); // 2명
}
