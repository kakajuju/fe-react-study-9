// JavaScript 배열 반복문 연습문제 (11~30번)

// 문제 11. [for문]
// let numbers = [10, 20, 30, 40, 50];
// 배열에 저장된 모든 값의 합계를 구하여 출력하세요.
{
    let numbers = [ 10, 20, 30, 40, 50 ];

    function sum(numbers) {
        // ① 합계를 저장할 변수를 만들어.
        let sum = 0;
        //처음에는 더한 값이 없으므로 0이야.

        // ② 배열에서 값을 하나씩 가져와.
        // for...of이므로 v에 실제 숫자가 들어와.
        for (let v of numbers) {

            //③ 가져온 숫자를 계속 더해.
            sum += v;   // sum = sum + v; 이랑 같음
            // 이 코드는 다음과 같아.
            // 반복     v  sum 계산	    결과
            // 시작	    -	0	 0
            // 1회	    10	0  + 10	    10
            // 2회	    20	10 + 20	    30
            // 3회	    30	30 + 30	    60
            // 4회	    40	60 + 40	    100
            // 5회	    50	100 + 50	150
        };
        // ④ 마지막에 합계를 반환해.
        return sum;
    };
    console.log(sum(numbers));
}

console.log('--------------------------------------------------');
// 문제 12. [for...of]
// let scores = [80, 70, 90, 60, 100];
// 배열의 평균 점수를 구하여 출력하세요.
{
    let scores = [ 80, 70, 90, 60, 100 ];
    // ① 합계를 구하는 함수를 만들었어
    function sum(scores) {
        let sum = 0;


        // ② 모든 점수를 더해.
        for (let v of scores) {
            sum += v;
        };
        // ③ 합계를 반환해.
        return sum;
    };
    // ④ 합계를 배열의 길이로 나눠
    console.log(sum(scores) / 5);   // 5 = scores.length는 배열에 들어있는 요소의 개수 5와 같아.
}

console.log('--------------------------------------------------');
// 문제 13. [for문]
// let numbers = [3, 8, 12, 7, 15, 20];
// 짝수인 값만 출력하세요.
{
    let numbers = [ 3, 8, 12, 7, 15, 20 ];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[ i ] % 2 === 0) {
            console.log(numbers[ i ]);
        };
    };
}

console.log('--------------------------------------------------');
// 문제 14. [for...of]
// let scores = [45, 80, 65, 90, 30, 75];
// 60점 이상인 점수만 출력하세요.
{
    // ① 배열을 준비해.
    let scores = [ 45, 80, 65, 90, 30, 75 ];
    // ② 배열에서 실제 점수를 가져와.
    for (let v of scores) {
        // ③ 점수가 60점 이상인지 검사해.
        if (v >= 60) {
            // ④ 조건에 맞는 점수를 출력해.
            console.log(v);
        }
    }
}

console.log('--------------------------------------------------');
// 문제 15. [forEach]
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// 홀수인 값만 출력하세요.
{

    let numbers = [ 1, 2, 3, 4, 5, 6, 7 ];
    // ① forEach가 배열을 반복해.
    numbers.forEach(function (num) {
        // ② num에 현재 숫자가 들어와
        if (num % 2 === 1) {
            // ③ 2로 나눈 나머지가 1인지 검사해.
            console.log(num);
            // ④ 홀수라면 출력해.
        };
    });
}

console.log('--------------------------------------------------');
// 문제 16. [for...in]
// let scores = [55, 90, 40, 85, 70];
// 80점 이상인 요소의 인덱스와 값을 함께 출력하세요.
{
    let scores = [ 55, 90, 40, 85, 70 ];
    for (let i in scores) {
        if (scores[ i ] >= 80) {
            console.log(i, scores[ i ]);
        };
    }
}
// 여기서 i는 인덱스이고 scores[i]는 점수라는 점을 기억해.


console.log('--------------------------------------------------');
// 문제 17. [for문]
// let numbers = [10, 25, 30, 45, 50];
// 배열에서 30보다 큰 값의 개수를 구하여 출력하세요.
{
    let numbers = [ 10, 25, 30, 45, 50 ];
    // ① 개수를 저장할 변수를 만들어.
    let num = 0;
    // ② 배열을 반복해.
    for (let i = 0; i < numbers.length; i++) {
        // ③ 현재 숫자가 30보다 큰지 확인해.
        if (numbers[ i ] > 30) {
            // ④ 조건에 맞으면 개수를 1 증가시켜.
            num++;
        };
    };
    // ⑤ 모든 반복이 끝난 후 출력해.
    console.log(num);
}
// 답 : 2

console.log('--------------------------------------------------');
// 문제 18. [for...of]
// let numbers = [5, 12, 8, 20, 3, 15];
// 배열에서 가장 큰 값을 찾아 출력하세요.
{
    let numbers = [ 5, 12, 8, 20, 3, 15 ];
    // ① 최댓값을 저장할 변수 만들기
    let max = numbers[ 0 ];
    /* 왜 0이 아니라 numbers[0]을 넣었을까?
    
    배열의 첫 번째 숫자인 5를 일단 가장 큰 값이라고 가정하는 거야.
    
    즉, 처음에는 다음과 같은 상태야.
     max = 5; */
    //  ② 배열의 값을 하나씩 가져오기
    for (let v of numbers) {
        // v에는 5, 12, 8, 20, 3, 15가 순서대로 들어와.
        // ③ 현재 숫자와 최댓값 비교하기
        if (v > max) {
            max = v;
            /*             반복	V	    기존 max	    비교	            새로운 max
                        시작	-	    -	            첫 번째 값 지정	        5
                        1회	    5	    5	            같음	              5
                        2회	    12	    5	            12가 더 큼	          12
                        3회	    8	    12	            작음	              12
                        4회	    20	    12	            20이 더 큼	          20
                        5회	    3	    20	            작음	              20
                        6회	    15	    20	            작음	              20 */
        };
    };
    // ④ 최종 결과 출력
    console.log(max);
}
// 답 : 20
/* 꼭 기억할 것!
- 합계: sum += num
- 개수: count++
- 최댓값: if (num > max) max = num */

console.log('--------------------------------------------------');
// 문제 19. [forEach]
// let scores = [90, 75, 60, 85, 100];
// 각 점수가 60점 이상이면 '합격', 그렇지 않으면 '불합격'을 출력하세요.
{
    let scores = [ 90, 75, 60, 85, 100 ];
    // ① forEach로 점수를 하나씩 가져와.
    scores.forEach(function (sco) {
        // ② 60점 이상인지 확인해.
        if (sco >= 60) {
            // ③ 조건이 참이면 합격이야.
            console.log('합격');
            // ④ 조건이 거짓이면 불합격이야.
        } else {
            // 여기서 else는 if의 조건이 거짓일 때 실행되는 부분이야.
            console.log('불합격');
        }
    });
}

console.log('--------------------------------------------------');
// 문제 20. [for문]
// let numbers = [2, 4, 6, 8, 10];
// 각 요소의 값을 3배로 변경한 후 배열 전체를 출력하세요.
{
    let numbers = [ 2, 4, 6, 8, 10 ];
    // ① 배열을 반복해.
    for (let i = 0; i < numbers.length; i++) {
        // ② 현재 위치에 있는 숫자를 가져와서 3을 곱해.
        // ③ 계산한 값을 다시 원래 위치에 저장해.
        numbers[ i ] = numbers[ i ] * 3;
    };
    console.log(numbers);

}


console.log('--------------------------------------------------');
// 문제 21. [for문]
// let numbers = [10, 20, 30, 40, 50];
// 값이 30인 요소의 인덱스를 찾아 출력하세요.
{
    let numbers = [ 10, 20, 30, 40, 50 ];
    // ① 배열을 반복해.
    for (let i = 0; i < numbers.length; i++) {
        // ② 현재 배열의 값이 30인지 확인해.
        if (numbers[ i ] === 30) {
            // ③ 30과 일치하면 인덱스를 출력해.
            console.log(i);
        }
    }
}


console.log('--------------------------------------------------');
// 문제 22. [for...in]
// let scores = [50, 80, 90, 40, 100];
// 60점 미만인 점수의 인덱스와 값을 함께 출력하세요.
{
    let scores = [ 50, 80, 90, 40, 100 ];
    // ① for...in으로 인덱스를 가져와.
    for (let i in scores) {
        // ② 실제 점수가 60점 미만인지 확인해.
        if (scores[ i ] < 60) {
            // ③ 인덱스와 점수를 함께 출력해.
            console.log(i, scores[ i ]);
        }
    }

}


console.log('--------------------------------------------------');
// 문제 23. [for...of]
// let numbers = [10, 15, 20, 25, 30, 35];
// 5의 배수이면서 짝수인 값만 출력하세요.
{
    let numbers = [ 10, 15, 20, 25, 30, 35 ];

    for (let v of numbers) {
        if (v % 5 === 0 && v % 2 === 0) {
            console.log(v);
        }
    }
}

console.log('--------------------------------------------------');
// 문제 24. [forEach]
// let fruits = ['사과', '바나나', '포도', '딸기', '수박'];
// 짝수 인덱스에 있는 과일만 출력하세요.
{
    let fruits = [ '사과', '바나나', '포도', '딸기', '수박' ];
    fruits.forEach(function (value, index) {
        if (index % 2 === 0) {
            console.log(value);
        }
    });

}


console.log('--------------------------------------------------');
// 문제 25. [for문]
// let numbers = [10, 20, 30, 40, 50];
// 배열의 모든 값을 역순으로 새로운 배열에 저장하고 출력하세요.
{
    let numbers = [ 10, 20, 30, 40, 50 ];
    let reverseNumbers = [];
    for (let i = 4; i >= 0; i--) {
        reverseNumbers.push(numbers[ i ]);
    }
    console.log(reverseNumbers);

}



console.log('--------------------------------------------------');
// 문제 26. [for...of]
// let scores = [40, 70, 85, 55, 95, 60];
// 60점 이상인 점수의 합계를 구하여 출력하세요.


{
    let scores = [ 40, 70, 85, 55, 95, 60 ];

    let sum = 0;

    for (let score of scores) {

        if (score >= 60) {
            sum += score;
        }

    }

    console.log(sum);
}




console.log('--------------------------------------------------');
// 문제 27. [forEach]
// let numbers = [3, 7, 2, 9, 5];
// 배열에서 가장 작은 값을 찾아 출력하세요.

{
    let numbers = [ 3, 7, 2, 9, 5 ];

    let min = numbers[ 0 ];

    numbers.forEach(function (num) {

        if (num < min) {
            min = num;
        }

    });

    console.log(min);
}







console.log('--------------------------------------------------');
// 문제 28. [for문]
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 짝수는 2배, 홀수는 3배로 변경한 후 배열 전체를 출력하세요.




{
    let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[ i ] % 2 === 0) {
            numbers[ i ] = numbers[ i ] * 2;
        } else {
            numbers[ i ] = numbers[ i ] * 3;
        }

    }

    console.log(numbers);
}




console.log('--------------------------------------------------');
// 문제 29. [for...in]
// let names = ['철수', '영희', '민수', '지연', '수진'];
// 인덱스가 1, 3인 요소만 인덱스와 이름을 함께 출력하세요.

{
    let names = [ '철수', '영희', '민수', '지연', '수진' ];

    for (let i in names) {

        if (i == 1 || i == 3) {
            console.log(i, names[ i ]);
        }

    }
}




console.log('--------------------------------------------------');
// 문제 30. [forEach]
// let scores = [95, 70, 85, 60, 100];
// 각 학생의 번호, 점수, 합격 여부를 출력하고 마지막에 합격한 학생 수를 출력하세요.
// 합격 기준은 80점 이상입니다.

{
    let scores = [ 95, 70, 85, 60, 100 ];

    let count = 0;

    scores.forEach(function (score, index) {

        if (score >= 80) {
            console.log(
                (index + 1) + "번 학생 : " + score + "점 / 합격"
            );

            count++;

        } else {
            console.log(
                (index + 1) + "번 학생 : " + score + "점 / 불합격"
            );
        }

    });

    console.log("합격한 학생 수 : " + count);
}