
//Object 객체

//자바스크립트의 자료형

let x = 10;                 //단일 변수
let arr = [ 1, 2, 3, 4, 5 ];      //배열

//객체
// { key:value, key:value, key:value }

// 인터넷 (HTTP) 통신       데이터를 전달 (송수신/주고받기)
// JSON 
// javaScript Object Notation

// Java 에 Map 자료형과 비슷 , Python Dictionary 자료형과 비슷

/* 
let 이름 = 
let 주소 = 
let 전화번호 = 


let 이름2 = 
let 주소2 = 
let 전화번호2 = 


{
    이름 :
    주소 : 
    전화번호 :
}
*/

// Key : value


let weatherInfo = {
    day: '261111',
    weather: '맑음',
    temperature: 8,
    location: '원성동',
    hasFog: false
};

console.log(weatherInfo);             //arr
console.log(weatherInfo.day);         //arr[2]
console.log(weatherInfo.location);
console.log(weatherInfo.hasFog);

let weatherInfo2 = {
    day: '261112',
    weather: '흐림',
    temperature: 9,
    location: '원성동',
    hasFog: false
};

//---------------------------------------
let lunchInfo = {
    menu: '짜장면',
    price: 5000,
    shop: '대천반점',
    location: '시장내부'
};

console.log(lunchInfo);
console.log(lunchInfo.menu);

/* 
    키:값

    키:문자형
    키:숫자형
    키:논리형

    {} : 객체타입
    [] : 배열타입

    키 : {}
    키 : []

*/

let shopInfo = {
    name: '대천반점',
    location: '시장내부',
    menu: [ '짜장면', '짬뽕', '잠채밥', '우동' ]
};

console.log(shopInfo);
console.log(shopInfo.location);
console.log(shopInfo.menu);
console.log(shopInfo.menu[ 2 ]);

//-------------------------------------------------
let shopInfo2 = {
    name: '대천반점',
    location: '시장내부',
    menu: [ '짜장면', '짬뽕', '잠채밥', '우동' ],
    price: [ 5000, 7000, 8000, 6000 ]
};

console.log(shopInfo2.menu[ 0 ]);
console.log(shopInfo2.price[ 0 ]);
//--------------------------------------------------------
let shopInfo3 = {
    name: '대천반점',
    location: '시장내부',
    menu: [
        {
            name: '짜장면',
            price: 5000
        },
        {
            name: '짬뽕',
            price: 7000
        },
        {
            name: '잡채밥',
            price: 8000
        },
        {
            name: '우동',
            price: 6000
        }
    ],
};

console.log(shopInfo3.menu[ 0 ]);       //{ name: '짜장면', price: 5000 }
console.log(shopInfo3.menu[2].price);   //8000

//--------------------------------------------

let shopInfo4 = {
    name:'대천반점',
    location:'시장내부',
    address: {
        postCode: 51211,
        addr1:'천안시',
        addr2:'동남구'
    },
    menu: [
        {
            name:'짜장면',
            price:5000,
            raw:['양파', '돼지고기', '춘장']
        },
        {
            name:'잡채밥',
            price:7000,
            raw:['양파', '잡채', '밥']
        },
        {
            name:'우동',
            price:5000,
            raw:['양파', '호박', '옥수수면']
        },
        {
            name:'울면',
            price:7000,
            raw:['새우', '호박', '파', '면', '당근']
        }
    ]
};

//주소가 어느시에 있는지 출력
console.log(shopInfo4.address.addr1);
//잡채밥이 들어있는 객체 출력
console.log(shopInfo4.menu[1]);
//우동의 원재료들만 출력
console.log(shopInfo4.menu[2].raw);
//울면안에 있는 재료 중 "파"만 출력
console.log(shopInfo4.menu[3].raw[2]);


let shopList = [
{
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        { 
            name:'짜장면',
            price: 5000,
            raw: ['춘장', '양파', '돼지고기']
        },
        {
            name:'짬뽕',
            price:7000,
            raw: ['오징어', '면', '고춧가루']
        },
        {
            name:'볶음밥',
            price:7000,
            raw: ['달걀', '당근', '감자']
        }
    ]
},
{
    name : '맘스터치',
    location : '천안길가에',
    menu : [
        { 
            name:'싸이버거',
            price: 6000,
            raw: ['빵', '채소', '닭다리살']
        },
        {
            name:'휠렛',
            price:7000,
            raw: ['빵', '채소', '닭가슴살']
        }
    ]
}
];

//휠렛버거의 가격
console.log(shopList[1].menu[1].price);
//볶음밥의 재료들
console.log(shopList[0].menu[2].raw);
//싸이버거에 들어있는 닭다리살 재료
console.log(shopList[1].menu[0].raw[2]);
//대천반점의 위치
console.log(shopList[0].location);
//대천반점 짬뽕 객체
console.log(shopList[0].menu[1]);