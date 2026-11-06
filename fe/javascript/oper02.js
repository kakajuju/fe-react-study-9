// oper02.js

let x = 10;

x = x + 10;
x = x - 5;
x = x / 3;

//복합대입연산자
x += 10;
x -= 5;
x /= 3;
// *=
// %=


// 비교연산자  true or false로 반환

// =    : 대입연산자
// == : 간은가?
// != : 다른가?
// >    <    >=    <=
x = 10; /* 값 + 타입(숫자) */
let y = 10; /* 값 + 타입(숫자) */
let z = '10'; /* 값 + 타입(문자) */

console.log( x == y ); // true or false
console.log( x != y );
console.log( x > 5 );
console.log( x <= 20 );

let r1 = x <= 20;
console.log(r1);

// == 값이 같은가
// === 값 + 타입(자료형)까지 같은가
console.log( x == z );
console.log( x === z );

console.log( x === y );

// &&     ||     !
// and    or    not


/*
        조건1   조건2    결과
    &&  true    true    true
        true    false   false
        false   true    false
        false   false   false

    ||  true    true    true
        true    false   true
        false   true    true
        false   false   false

    !   true            false
        false           true
*/

x = 10;
y = 20;

console.log( x > 5 && y > 0 );
//           true  &&  true     -> true
console.log( x == 1 || y === '20' );
//            false ||  false   -> false
console.log( !true );

let b = false;
console.log(b);
console.log( !b );

console.log( !(x > 5 && y > 0) );
console.log( !(x > 5) && y > 0 );


// 삼항연산자

// (조건식) ?   항목1 : 항목2 ;
//             true    false


console.log( x == 10 ? '10이랑 같음' : "10이랑 다름" );
console.log( y == 10 ? '10이랑 같음' : "10이랑 다름" );

let r2 = x + ( x == 10 ? 10 : 20);
console.log(r2);


//----------------------------------------
// 타입변환 (형변환)
// String() -> 문자로 바꿈
// Number() -> 숫자로 바꿈


console.log('-----------------------------');
let q = 10;
let w = '20';
let e = 30;

console.log( q + e );       // 10 + 30
console.log( q + w + e);    // 10 + '20' + 30

console.log( q + String(e) );   // 10 + string(30)  '30'    =1030

console.log( q + Number(w) + e); // 10 + Number(20) + 30    60

console.log( Number('1234') );
console.log( Number('1234.1234') );

//----------------------------------------------

// && 조건식 처럼 사용

q = 10;

if ( q == 10 ){
console.log('q가 10이더라');
}

q == 10 && console.log('q가 10이더라');

q == 11 && console.log('q가 11이더라');
q != 11 && console.log('q가 11이 아니더라');

console.log(10 == 10);
console.log(10 == 10.0);
console.log('10' == '10.0');
console.log(Number('10') == Number('10.0'));
console.log(Number('10') === Number('10.0'));
