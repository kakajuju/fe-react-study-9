import './Quiz05.css'
import { useState } from 'react';
import ColorBox from './ColorBox';

function Quiz05() {

    // 각 박스들을 색상 별로 구분해서 표시
    // 박스 색상 데이터 관리를 어떻게?

    // 1) 색이담긴 박스 요소가 직접 배열에 들어있는 경우 + 클래스 명활용 포함

    // let [boxArr, setBoxArr] = useState([
    //     <div className='box quiz5-bg-red'></div>,
    //     <div className='box quiz5-bg-blue'></div>,
    //     <div className='box quiz5-bg-green'></div>,
    //     <div className='box' style={{backgroundColor:'black'}}></div>
    // ]);

    /* 
        let [ boxArr, setBoxArr ] = useState([
            <div className='box' style={{ backgroundColor: 'red' }}></div>,
            <div className='box' style={{ backgroundColor: 'blue' }}></div>,
            <div className='box' style={{ backgroundColor: 'green' }}></div>,
            <div className='box' style={{ backgroundColor: 'black' }}></div>
        ]);
    
    
        return (
            <div>
                <div>
                    <button onClick={() => {
                        let temp = [ ...boxArr ];
                        temp.unshift(<div className='box' style={{ backgroundColor: 'red' }}></div>);
                        setBoxArr(temp);
                    }}>앞빨간박스추가</button>
                    <button onClick={() => {
                        let temp = [ ...boxArr ];
                        temp.unshift(<div className='box' style={{ backgroundColor: 'blue' }}></div>);
                        setBoxArr(temp);
                    }}>앞파란박스추가</button>
                    <button onClick={() => {
                        let temp = [ ...boxArr ];
                        temp.unshift(<div className='box' style={{ backgroundColor: 'green' }}></div>);
                        setBoxArr(temp);
                    }}>앞초록박스추가</button>
    
                    <button onClick={() => {
                        let temp = [ ...boxArr ];
                        temp.push(<div className='box' style={{ backgroundColor: 'red' }}></div>);
                        setBoxArr(temp);
                    }}>뒤빨간박스추가</button>
                    <button onClick={() => {
                        let temp = [ ...boxArr ];
                        temp.push(<div className='box' style={{ backgroundColor: 'blue' }}></div>);
                        setBoxArr(temp);
                    }}>뒤파란박스추가</button>
                    <button onClick={() => {
                        let temp = [ ...boxArr ];
                        temp.push(<div className='box' style={{ backgroundColor: 'green' }}></div>);
                        setBoxArr(temp);
                    }}>뒤초록박스추가</button>
    
                    <button onClick={() => { 
                        //unshift shift
                        let temp = [ ...boxArr ];
                        temp.shift();
                        setBoxArr(temp);
                    }}>앞박스삭제</button>
                    <button onClick={() => { 
                        //push pop
                        let temp = [ ...boxArr ];
                        temp.pop();
                        setBoxArr(temp);
                    }}>뒤박스삭제</button>
                </div>
    
                <div>
                    {boxArr}
                </div>
    
            </div>
        )
     */
    // 2) 특정 기준 코드로 박스 색상을 구분
    // 1: 2: 3: 4:
    /* let [ boxArr, setBoxArr ] = useState([ 1, 2, 3, 4 ]);

    return (
        <div>
            <div>
                <button onClick={() => { setBoxArr([ 1, ...boxArr ]) }}>앞빨간박스추가</button>
                <button onClick={() => { setBoxArr([ 2, ...boxArr ]) }}>앞파란박스추가</button>
                <button onClick={() => { setBoxArr([ 3, ...boxArr ]) }}>앞초록박스추가</button>

                <button onClick={() => { setBoxArr([ ...boxArr, 1 ]) }}>뒤빨간박스추가</button>
                <button onClick={() => { setBoxArr([ ...boxArr, 2 ]) }}>뒤파란박스추가</button>
                <button onClick={() => { setBoxArr([ ...boxArr, 3 ]) }}>뒤초록박스추가</button>

                <button onClick={() => {
                    let temp = [ ...boxArr ];
                        temp.shift();
                        setBoxArr(temp); 
                        }}>앞박스삭제</button>

                <button onClick={() => {
                    let temp = [ ...boxArr ];
                        temp.pop();
                        setBoxArr(temp); 
                        }}>뒤박스삭제</button>
            </div>

            <div>

                {
                    boxArr.map((item, index) => {
                        if (item == 1)
                            return <div className='box' style={{ backgroundColor: 'red' }}></div>
                        else if (item == 2)
                            return <div className='box' style={{ backgroundColor: 'blue' }}></div>
                        else if (item == 3)
                            return <div className='box' style={{ backgroundColor: 'green' }}></div>
                        else
                            return <div className='box' style={{ backgroundColor: 'balck' }}></div>
                    })
                }
            </div>
        </div>
    )
 */

    // 3) 색상을 표시한는 값 자체를 가진 배열로 활용

    let [ boxArr, setBoxArr ] = useState([ 'red', 'blue', 'green', 'black' ]);

    return (
        <div>
            <div>
                <button onClick={() => { setBoxArr([ 'red', ...boxArr ]) }}>앞빨간박스추가</button>
                <button onClick={() => { setBoxArr([ 'blue', ...boxArr ]) }}>앞파란박스추가</button>
                <button onClick={() => { setBoxArr([ 'green', ...boxArr ]) }}>앞초록박스추가</button>

                <button onClick={() => { setBoxArr([ ...boxArr, 'red' ]) }}>뒤빨간박스추가</button>
                <button onClick={() => { setBoxArr([ ...boxArr, 'blue' ]) }}>뒤파란박스추가</button>
                <button onClick={() => { setBoxArr([ ...boxArr, 'green' ]) }}>뒤초록박스추가</button>

                <button onClick={() => {
                    let temp = [ ...boxArr ];
                    temp.shift();
                    setBoxArr(temp);
                }}>앞박스삭제</button>

                <button onClick={() => {
                    let temp = [ ...boxArr ];
                    temp.pop();
                    setBoxArr(temp);
                }}>뒤박스삭제</button>
            </div>

            <div>
                {
                    boxArr.map((item, index) => {
                        return <div className='box' style={{ backgroundColor: item }}></div>
                    })
                }
            </div>

            <h3>응용) 색상 박스를 컴포넌트화</h3>
            <div>
                {
                    boxArr.map((item, index) => {
                        return <ColorBox bgColor={item} />
                    })
                }
            </div>

        </div>
    )
}

export default Quiz05;