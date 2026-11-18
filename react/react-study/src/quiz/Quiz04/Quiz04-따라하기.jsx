import "./Quiz04.css"
import { useState } from "react";

function Quiz04(){

    // let [boxArr, setBoxArr] = useState([<div className="box">박스</div>,<div className="box">박스</div>]);
    let [arr, setArr] = useState([1,2]);




    return(
        <div>
            <div style={{margin:'10px'}}>
                <button onClick={()=>{
                    //박스가 추가 되는 기능
                    //배열에 요소 추가 (깊은복사)
                    let temp = [...arr, 1];
                    setArr(temp);

                }}>추가</button>
            </div>
            <div>
                {
                    arr.map(()=>{
                        return <div className="box" key={index}>박스</div>
                    })
                }

            </div>
        </div>

    /* let [boxArr, setBoxArr] = useState([<div className="box">박스</div>,<div className="box">박스</div>]);

    return(
        <div>
            <div style={{margin:'10px'}}>
                <button onClick={()=>{
                    //박스가 추가 되는 기능
                    //배열에 요소 추가 (깊은복사)
                    let temp = [...boxArr];
                    temp.push(<div className="box">박스</div>);
                    setBoxArr(temp);
                }}>추가</button>
            </div>
            <div>
                {boxArr}
                
            </div>
        </div> */
    )
}

export default Quiz04;

{/* <div className="box">박스</div>
                <div className="box">박스</div> */}