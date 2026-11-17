import './Quiz03.css'
import Box from "./Box";

function Quiz03() {

    let title = [ '하나', '둘', '셋', '넷', '다섯' ];
    let detail = [ '내용하나', '내용둘', '내용셋', '내용넷', '내용다섯' ];

    return (
        <div className="App">
            <div>
                {
                    title.map((value, index) => {

                        return (
                            <div>
                                <div className='textItem'>
                                    <p className='title'>제목 : {value}</p>
                                    <p className='detail'>내용 : {detail[ index ]}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Quiz03;