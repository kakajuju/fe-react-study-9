import Box from "./box";

function Props01() {

    let arr = [ '아침', '점심', '저녁' ];
    let detail = [ '졸리다', '배부르다', '피곤하다' ];
    //                0         1         2

    return (
        <div>

            {
                arr.map((value, index) => {

                    return (
                        <div style={{ backgroundColor: 'lightgrey' }}>
                            <h1>{value}</h1>
                            <h2>{index}</h2>
                            <p>{detail[ index ]}</p>
                            <p>{arr[ index ]}</p>
                        </div>
                    )
                })
            }


            <div style={{ backgroundColor: 'lightgrey' }}>
                <h1>{arr[ 0 ]}</h1>
                <h2>{detail[ 0 ]}</h2>
                <p>고정텍스트</p>
            </div>
            <div style={{ backgroundColor: 'lightgrey' }}>
                <h1>{arr[ 1 ]}</h1>
                <h2>{detail[ 1 ]}</h2>
                <p>고정텍스트</p>
            </div>


            <hr />

            {/* <Box/> */}

            {/* <Box text={arr[ 아침 ]} detail={detail[ 졸리다 ]} /> */}
            <Box text={arr[ 0 ]} detail={detail[ 0 ]} />
            <Box text={arr[ 1 ]} detail={detail[ 1 ]} />
            <Box text={arr[ 2 ]} detail={detail[ 2 ]} />

            <hr />
            <hr />

            {
                //let arr = [ '아침', '점심', '저녁' ];
                //let detail = [ '졸리다', '배부르다', '피곤하다' ];
                arr.map((value, index) => {
                    return (
                        //둘중 하나 선택해서 사용
                        <Box text={value} detail={detail[ index ]} />
                        //<Box text={arr[ index ]} detail={detail[ index ]} />
                    )
                })
            }


        </div>
    )
    /* 
    function func1(a, b){}

    func1(10,20);
    func1(50,60);
     */
}

export default Props01;