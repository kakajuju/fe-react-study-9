import './Quiz05.css'
import { useState } from "react";

function Box(props) {
    return (
        <div className="box"
            style={{ backgroundColor: props.color }}></div>
    )
}



function Quiz05() {

    let [ arr, setArr ] = useState([]);


    return (
        <div>
            <button onClick={() => {
                let temp = [ 'red', ...arr ];
                setArr(temp);
            }}>앞빨간박스추가</button>


            <button onClick={() => {
                let temp = [ 'blue', ...arr ];
                setArr(temp);
            }}>앞파란박스추가</button>

            <button onClick={() => {
                let temp = [ 'green', ...arr ];
                setArr(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => {
                let temp = [ ...arr, 'red' ];
                setArr(temp);
            }}>뒤빨간박스추가</button>

            <button onClick={() => {
                let temp = [ ...arr, 'blue' ];
                setArr(temp);
            }}>뒤파란박스추가</button>


            <button onClick={() => {
                let temp = [ ...arr, 'green' ];
                setArr(temp);
            }}>뒤초록박스추가</button>

            <div className='box-list'>
                {
                    arr.map((item, index) => {
                        return <Box color={item} key={index} />
                    })
                }

            </div>


        </div>
    )
}


export default Quiz05;