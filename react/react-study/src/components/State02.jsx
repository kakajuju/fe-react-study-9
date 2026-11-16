export default function State02() {


    //요소들을 반복으로 화면에 표시

    let numArr = [ 1, 1, 1, 1 ]; //단순 반복용도로 사용 -> 4회 반복

    let msg = 'hihi';



    //밖에선 반복문 가능
    let text = '';
    for (let i = 1; i <= 5; i++) {
        text += '<p>안녕하세요 ~~ text for문</p>';  //단순 텍스트만 모이는 상태
    }

    //element 요소를 모아둔 배열
    let eleArr = [];
    for (let i = 1; i <= 5; i++) {
        eleArr.push(<p>안녕하세요~~!! eleArr for문</p>);
    }
    //[<p>안녕하세요~~!! eleArr for문</p>,<p>안녕하세요~~!! eleArr for문</p>,<p>안녕하세요~~!! eleArr for문</p>,<p>안녕하세요~~!! eleArr for문</p>,<p>안녕하세요~~!! eleArr for문</p>]

    // 실제 화면에 표시되도록 데이터를 사용하는 용도로 데이터 배열
    let msgArr = [ '안녕', '하이', '반가워', 'hello', '밥먹었니?', '배고프니?' ];

    return (

        <div>
            {
                //for(let i=0;) 사용불가
            }

            {msg}
            {
                //[ 1, 1, 1, 1 ]
                numArr.map(() => {// [99,99,99,99]
                    //return 99;

                    return (
                        <p>안녕하세요!numArr.map()</p>
                    )
                })
                //이것은 이것과 같다 => [<p>안녕하세요!numArr.map()</p>,<p>안녕하세요!numArr.map()</p>,<p>안녕하세요!numArr.map()</p>,<p>안녕하세요!numArr.map()</p>,<p>안녕하세요!numArr.map()</p>]
            }

            <hr />
            {text}

            <hr />
            {eleArr}

            <hr />
            {
                //['안녕','하이','반가워','hello','밥먹었니?']
                msgArr.map((value) => {
                    return (
                        <p>인삿말 : {value}</p>
                    )
                })
            }

            <hr /> 
            <p>인삿말 : 인사1</p>
            <p>인삿말 : 인사2</p>
            <p>인삿말 : 인사3</p>
            <p>인삿말 : 인사4</p>
            <p>인삿말 : 인사5</p>
            <p>인삿말 : 인사6</p>

            <div>
                {/* 
                
                
                
                
                */}
            </div>
            <div>
                {/* 
                
                
                
                
                */}
            </div>

        </div>

    )
}

// export default State02;