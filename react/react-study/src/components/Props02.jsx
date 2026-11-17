import Box from "./Box";
import { useState } from 'react';

function Props02() {

    // 배열 값 변경(추가/삭제) -> 값 유지 -> 재렌더링   : state변수
    let [ titleArr, setTitleArr ] = useState([ '아침', '점심', '저녁' ]);
    let [ detailArr, setDetailArr ] = useState([ '졸리다', '배부르다', '피곤하다' ]);

    return (
        <div>
            <button onClick={() => {

                /* 
                React
                데이터 기반으로 화면을 표시/조작

                버튼을 눌럿을때, 화면에 야식 정보가 추가 표시

                야식정보 -> 배열애 추가 -> 배열의데이터가 map으로 반복하면서 화면에 표시
                            (값 보존 + 재렌더링)
                */

                //배열은 참조변수 -> 새로운 값으로 변경인식 -> 깊은 복사
                let temp = [ ...titleArr ];
                temp.push('야식');
                setTitleArr(temp);//재렌더링 발생조건 충족

                // [ '아침', '점심', '저녁', '야식']
                // [ '졸리다', '배부르다', '피곤하다',  ]

                // let temp2 = [ ...detailArr ];
                // temp2.push('행복하다');
                // setDetailArr(temp2);
                detailArr.push('행복하다');

                console.log(titleArr, detailArr);

            }}>야식추가버튼</button>

            {
                titleArr.map((value, index) => {
                    return (
                        //둘중 하나 선택해서 사용
                        <Box title={value} detail={detailArr[ index ]} key={index} />
                        //<Box text={arr[ index ]} detail={detail[ index ]} />
                    )
                })
            }
        </div>
    )
}

export default Props02;