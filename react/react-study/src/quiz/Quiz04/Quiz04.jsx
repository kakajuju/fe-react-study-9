import './Quiz04';

function Quiz04(props) {

    let [ boxCount, setBoxCount ] = useState(0);
    let [ boxCountArr, setBoxCountArr ] = useState(0);


    return (
        // <div>
        //     <button onClick={(event) => {
        //         event.stopPropagation();
        //         let temp = [ ...boxCountArr ];
        //         temp[ index ] += 1;
        //         setBoxCountArr(temp);
        //     }}>추가</button>
        //     <box>박스</box>
        // </div>


        {
            boxCount.map((item, index) => {
                return (
                    <div className="post-list">
                        <button onClick={(event) => {
                            event.stopPropagation();  //이벤트 발생을 추가로 전파/전달 하는 것을 stop!
                            let temp = [ ...boxCountArr ];
                            temp[ index ] += 1;
                            setBoxCountArr(temp);  //재렌더링 조건 충족
                        }}>{news[ index ]} <span>박스</span> {boxCountArr[ index ]}</button>
                    </div>
                )
            })
        }

    )
}

export default Quiz04;