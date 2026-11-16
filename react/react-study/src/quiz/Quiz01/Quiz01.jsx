//① useState 불러오기
//React에서 제공하는 상태 관리 Hook이야.
//변수의 값이 변경되었을 때 화면을 다시 렌더링할 수 있도록 해줘.
import { useState } from 'react';
import './Quiz01.css';
//useState
// 버튼 -> 이벤트 등록 -> State변수 값 증가 -> 재렌더링

function Quiz01() {
    //② State 변수 선언
    // count	: 현재 저장된 숫자
    // setCount	: count 값을 변경하는 함수
    // useState(0) : 초기값을 0으로 설정
    let [ count, setCount ] = useState(0);        // count = 0;

    return (
        <div>
            {/* ③ 버튼 클릭 이벤트 */}
            {/* onClick: 버튼을 클릭했을 때 실행 */}
            {/* () =>: 화살표 함수 */}
            {/* setCount(count + 2): 기존 숫자에 2를 더해서 새로운 상태로 변경 */}
            <button onClick={() =>{

                //count + 2씩 증가
                setCount(count + 2);
            }}>짝수출력</button>

            {/* ④ 화면에 숫자 출력 */}
            {/* <span style={{color:'red'}}>{count}</span> */}
            <span className='quiz01-font-red'>{count}</span>

        </div>
    )
}
export default Quiz01;