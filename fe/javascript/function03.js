
// js 함수

// 함수는 변수에 담을 수 있다.

// js 에서는 함수도 매개변수에 전달 가능

function func01(a) {
    console.log(a);
}

func01(1231);

function func02(f) {    // f: 함수
    console.log('func02()');
    f();    //함수 호출 f가 함수
}

const temp1 = () => {
    console.log('temp1() 함수 실행');
}
const temp2 = () => {
    console.log('temp2() 함수 실행~~~~~');
}

// func02( temp1() ); temp()함수 호출 후 남은 return 값을 넘기겠다
//console.log(temp1());
func02(temp1);
func02(temp2);

//-------------------------------

//콜백함수 callback  나중에/특정 시점에 실행할 함수

// 함수 A(디저트 주문)
// 함수 B(음식주문)

// 디저트주문() 음식주문()
// 음식주문() 디저트주문()

// 음식주문 (디저트주문)
// {음식주문 관련 코드 .......실행......... 디저트주문()    }


function orderFood(func) {
    console.log('음식주문');
    console.log('음식수령');
    console.log('음식정리');
    func(); //매개변수 함수 호출
    console.log('수다');
}

function orderDessert() {
    console.log('디저트 주문');
    console.log('디저트 먹기');
}

//orderDessert();
orderFood(orderDessert);



//---------------------
console.log('-------------------------------');
// 예약, 예약 완료안내

const reserve = (name, callback) => {
    console.log('예약 종료 확인');
    console.log('예약 가능 여부 확인');
    console.log('예약 스케줄 조정');

    //...

    console.log(name + '님 예약 가능 확인 -> 예약 완료');

    console.log('예약 완료 안내');
    callback(); //전달된 콜백함수 실행
}

const sendMsg = () => {
    console.log('sms 문자로 안내해주기. 문자전송');
}

reserve('김부장', sendMsg);

function callInfo() {
    console.log('전화로 직접 정보 안내해주기.');
}

reserve('최이사', callInfo);

reserve('이사장', () => {
    console.log('카카오톡으로 안내해주기');
});

//const fff = ()=>{};

//-----------------------------------------
// return에 함수활용

function fnc1() {
    let x = 10;
    x = x + 20;
    return x;
}

let r1 = fnc1();    //return 값이 있다.
console.log(r1);


function fnc2() {
    let y = 30;
    console.log('func2() 실행됨');

    return () => {
        console.log('func2() 에서 return 한 함수 호출');
    }
}


const rf2 = fnc2();

rf2();

function fnc3() {

    return (x) => {
        console.log('fnc3() 내부에서 리턴한 함수');
        console.log('매개변수 X : ' + x);
    }
}

const rf3 = fnc3();
rf3(1234);