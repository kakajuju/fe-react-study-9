/* ━━━━━━━━━━━━━━━━━━━━
문제 1. 자기소개 정보 저장하기
━━━━━━━━━━━━━━━━━━━━

다음 정보를 각각 적절한 변수에 저장하고 console.log()로 출력하세요.

이름: 홍길동
나이: 25
키: 175.5
학생 여부: true
거주 지역: 서울

요구사항
1. 변경될 수 있는 정보는 let, 변경하지 않을 정보는 const를 사용하세요.
2. 변수명은 camelCase 방식으로 작성하세요.
3. 모든 변수를 console.log()로 출력하세요.
4. 나이를 26으로 변경한 후 다시 출력하세요. */

const name = "홍길동";
let age = 25;
let height = 175.5;
let isStudent = true;
let livePlace = "서울"

console.log(name);
console.log(age);
console.log(height);
console.log(isStudent);
console.log(livePlace);

age = 26;

console.log(age);


/* ━━━━━━━━━━━━━━━━━━━━
문제 2. 변수의 값 변경하기
━━━━━━━━━━━━━━━━━━━━

다음 코드를 작성하고 실행 결과를 확인하세요.

let price = 1000;
let quantity = 5;
const productName = "사과";

요구사항
1. 세 변수의 값을 각각 출력하세요.
2. price를 1500으로 변경하세요.
3. quantity를 10으로 변경하세요.
4. 변경된 값을 다시 출력하세요.
5. productName을 다른 값으로 변경하면 어떻게 되는지 확인하고 이유를 설명하세요. */

let price = 1000;
let quantity = 5;
const productName = "사과";

console.log(price);
console.log(quantity);
console.log(productName);

price = 1500;
quantity = 10;

console.log(price);
console.log(quantity);
// productName = "포도"; x 상수형 변수의 경우 값을 변경할 수 없다.


/* ━━━━━━━━━━━━━━━━━━━━
문제 3. 출력 결과 예측하기
━━━━━━━━━━━━━━━━━━━━

다음 코드를 실행하기 전에 출력 결과를 예상해 보세요.

let a = 10;
let b = 20;
let c;

console.log(a); = 10
console.log(b); = 20
console.log(c); = undefined

a = 100;
b = a;              a에 들어있는 값을 b에 저장한다.

console.log(a); = 100
console.log(b); = 100 

요구사항
1. console.log()가 출력하는 값을 순서대로 작성하세요.
2. 실제 실행 결과와 비교하세요.
3. b = a가 어떤 의미인지 설명하세요.
4. c가 undefined로 출력되는 이유를 설명하세요.
    > 값을 안줘서... 변수 초기화가 안되어있기 때문에. 변수 선언만하고 값을 저장하지 않아서.
 */



/*     ━━━━━━━━━━━━━━━━━━━━
문제 4. 잘못된 변수명 수정하기
━━━━━━━━━━━━━━━━━━━━

다음 코드에는 JavaScript 변수명 규칙에 어긋나는 부분이 있습니다.

let 1name = "김철수";        x 숫자로 시작하면 안된다.
let user age = 30;          X 띄어쓰기 안된다.
let user-name = "이영희";    X 특수문자는 안됨 (특수문자는 $ , _만 가능)
let const = 100;            X 문법적인 키워드(예약어)
let my_score = 95;          O
let $price = 5000;          O
let _count = 10;            O

요구사항
1. 잘못된 변수명을 찾아보세요.
2. 잘못된 변수명을 정상적인 변수명으로 수정하세요.
3. 정상적인 변수명은 그대로 유지하세요.
4. 수정한 모든 변수를 출력하세요. */

let name1 = "김철수";
let userAge = 30;
let userName = "이영희";
let constVar = 100;
let my_score = 95;
let $price = 5000;
let _count = 10;

console.log(name1);
console.log(userAge);
console.log(userName);
console.log(constVar);
console.log(my_score);
console.log($price);
console.log(_count);