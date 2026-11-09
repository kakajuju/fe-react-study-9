
//function 함수

// 동작, 기능을 나타낸 코드 뭉치
// 메개변수, 리턴

/* 
    function 함수명 (매개변수){
    실행코드;
    실행코드;
    실행코드;
    실행코드;
    retrun 리턴값;
    }

    옵션
    매개변수 O X
    retrun  O X
*/

// 매개변수 X   return X
function func01() {      //함수선언(정의)

    console.log('func01 함수 실행됨');
    console.log('함수 실행 코드 01');

}

//함수 호출 (call)
func01();
func01();
func01();

// 매개변수 O   return X
function func02(name) {      //name라는 변수를 함수안으로 받은것임
    console.log('func02 함수 실행됨');
    console.log('매개변수 : ' + name);
}

func02();   //함수호출 () 매개변수에 들어갈 값을 전달하지 X
func02(1234);
func02('코카콜라');

function func02_2(a, b) {    //매개변수가 2개
    console.log('func02_2 함수 실행됨');
    console.log('매개변수 a : ' + a);
    console.log('매개변수 b : ' + b);
}

func02_2(10, 20);
func02_2('콜라', '사이다');

// 매개변수 X   return O
function func03() {
    console.log('func03 함수 실행됨');
    console.log('func03 리턴 500 나갈거임');
    return 500;
}

func03();

let temp = func03();
console.log(temp);
console.log('func03의 return 값 : ' + temp);
console.log('func03의 return 값 : ' + func03());

console.log('func03의 return 값 : ' + func01()); // func01()은 return이 없음

// 매개변수 O   return O
function func04(n) {
    console.log('func04 함수 실행됨');
    console.log('넘겨준 값을 = 10해서 돌려줌');
    return n * 10;
}
func04(10);

let result = func04(5);
console.log(result);

console.log( func04(50) );
console.log( func04(123) );
console.log( func04(990) );