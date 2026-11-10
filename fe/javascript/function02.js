


function func01() {
    console.log('func01()');
}

func01();

// let const
const func02 = function () {
    console.log('func02()');
}

func02();


const func03 = function func0303() {
    console.log('func02()');
}

func03();
//func0303();   함수인식X - 변수명은 const에 붙어있는 변수명으로 처리한다.


// 화살표함수 (Arrow Function)
// function 은 () => 과 같다.
const func04 = () => {
    console.log('func04()');
}

func04();

//------------------------------------------

// 함수선언 + 매개변수
//순서-1
function func05(a, b) {
    console.log('func05() ' + a + ' ' + b);
}
func05(10, 20);
func05('A', 'B');
//순서-2 = 순서-1의 함수를 const func06에 넣을 수 있다.
const func06 = function func05(a, b) {
    console.log('func06() ' + a + ' ' + b);
}
func06(56, 78);
//순서-3 = 넣었는데 순서-2에서 function func05의 함수명이 읽히지 않아서 지워도 된다.
const func07 = function (a, b) {
    console.log('func07() ' + a + ' ' + b);
}
func07(12, 34);

//----------------------
const func08 = (x, y) => {
    console.log('func08() ' + x + ' ' + y);
}
func08('Hello', 'hi');

//--------------------------------------
//함수 리턴

//두개의 매개변수를 받아서 두 값의 함을 반환(return)
function sum1(a, b) {
    let sum = a + b;
    return sum;
    //return a + b;
}
let r1 = sum1(10, 20);
console.log(r1);
console.log(sum1(55, 56));


const sum2 = function (a, b) {
    return a + b;
}
console.log(sum2(552, 756));

const sum3 = (a, b) => {
    return a + b;
}
console.log(sum3(111, 222));

// 화살표함수   => 뒤에 중괄호 없이 바로 나오는 값을 return 값으로 인식처리
const sum4 = (x, y) => x + y;
//                    { return x + y; }와 같다.

console.log(sum4(10, 9));

const sum5 = () => 1 + 2 + 3 + 4 + 5;
console.log(sum5());


//------------------------------
// 지역(스코프) 안에 있는것은 console.log();에 전달할 수 없다.
function ff1() {
    let w = 330000;
}


if (true) {
    let q = 10;
}

{
    let e = 321;
}

for (let r = 1; r < 10; r++) {

}

//console.log(r);

//----------------------------------------------------------------

//호이스팅
// var ----> const let

//var w;
console.log(w);
var w = 30;     // 위로 올라가기 때문에 선언이 안된다.

//var r;
r = 30000;
var r; // 위로 올라가기 때문에 r이 선언된다.
console.log(r);

// 함수 호이스팅
// function check(){

check();

function check() {
    console.log('check() !!!');
}

check();


//일회용함수

(function onetime() {
    let x = 10;
    let y = 20;
    console.log('일회용 함수');
})();  //일회용함수 선언 및 바로 호출 (즉시사용)

// onetime(); 호출 불가

{
    let x = 10;
    let y = 20;
    console.log('일회용 함수');
}
