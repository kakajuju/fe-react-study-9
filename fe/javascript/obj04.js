
// js 배열 관련 함수


//기본 배열
let arr = [ 10, 20, 30, 40 ];

// 반복문 for, for in, for of, forEach


// 1) map

// 배열안의 여소들을 하나씩 접근하면서 반복실행, 수행 후 return 기능

arr.map(() => {   //단순반복용... 요소의 숫자만큼
    console.log('arr map()');
})

// 요소로 반복 : forEach
arr.forEach(() => {
    console.log('arr forEach()');
})

arr.map((item) => {   //매개변수 1개짜리 콜백함수 선언 -> item 매개변수에는 배열 요소의 값 주입
    console.log('arr map()' + item);
})

arr.map((item, index) => {   //매개변수 1개짜리 콜백함수 선언 -> item : 값 , index : 인덱스(순번) 주입
    console.log('arr map()' + item + ' ' + index);
})

                            //[10,20,30,40] 원본을 -> [99, 99, 99, 99]로 만든다.
let result1 = arr.map( () => {
                                return 99;
                            })
console.log(result1);

                            //[10,20,30,40]
let result2 = arr.map( (item) => {
                            console.log(item);
                            //return이 없음...
                            });
console.log(result2); // [ undefined, undefined, undefined, undefined ]

                            //[10,20,30,40]
let result3 = arr.map((item)=>{
                        return(item + 100) ;
                            });
console.log(result3);

let result4 = arr.map((item, index)=>{
                                return"index : " + index + "value : " + item;
                            })
console.log(result4);

let menuArr = ['라면','우동','김밥'];

let result5 = menuArr.map((menu, index)=>{
                        return"<p> " + (index+1)+ "번. "+ menu + " </p>";
                        });
console.log(result5);

let result6 = menuArr.map((menu, index)=>"<p> " + (index+1)+ "번. "+ menu + " </p>");
console.log(result6);
                        // ()=>{return XXX;} === ()=> XXX


//  2) filter
// 실행 결과값(return)이 참인 요소만 모아서 return한다.
arr = [ 10, 20, 30, 40 ];

let result7 = arr.filter((value)=>{
                        return true;
                    });
console.log(result7);

let result8 = arr.filter((value)=>{
                        return (value>25);  // 결과값이 true && false인지만 중요
                    });
console.log(result8);

arr = [1,2,3,4,3,3,2,1,2];

let result9 = arr.filter((value)=>{
                        // return value != 3;
                        return value == 3;      // 결과값이 true && false
                    });
console.log(result9);

//  3)  find    <찾는게 있으면 있다고 보여주기만 함.>
// return이 true인 요소를 찾는 기능. 못찾으면 undefined
let result10 = arr.find((value)=>{
                        // return value != 3;
                        return value == 5;      // 결과값이 true && false
                    });
console.log(result10);

//if(result10 == 3);

//  4)  findIndex
// return이 true인 요소의 인덱스를 찾는 기능. 못찾으면 -1
let result11 = arr.findIndex((value)=>{
                        // return value != 3;
                        return value == 8;      // 결과값이 true && false
                    });
console.log(result11);
if(result11 == -1)
    console.log('못찾았다. 그런거 없다.');


