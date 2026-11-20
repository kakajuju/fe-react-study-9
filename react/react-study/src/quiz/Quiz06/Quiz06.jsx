import './Quiz06.css'
import { useState } from 'react';
import ColorBox from './ColorBox';

function Quiz06() {

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
                        return <div className='box' style={{ backgroundColor: item }}>
                            <button id='xbox' onClick={() => {
                                let temp = [ ...boxArr ];
                                temp.splice(index, 1);
                                setBoxArr(temp);
                            }}> X </button>
                        </div>
                    })
                }
                
            </div>
        </div>
    )
}

export default Quiz06;