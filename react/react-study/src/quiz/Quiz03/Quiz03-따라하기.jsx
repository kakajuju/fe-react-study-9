import './Quiz03.css';
import TextItem from './TextItem';

function Quiz03() {

    let titleArr = [ '하나', '둘', '셋', '넷', '다섯' ];
    let contentArr = [ '내용하나', '내용둘', '내용셋', '내용넷', '내용다섯' ];

    return (
        //{/* ① 직접 작성하는 방식 */ }
        <div className="App" >
            <div className='textItem'>
                <p className='title'>제목 : 하나</p>
                <p>내용 : 내용하나</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 둘</p>
                <p>내용 : 내용둘</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : 셋</p>
                <p>내용 : 내용셋</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : 넷</p>
                <p>내용 : 내용넷</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : 다섯</p>
                <p>내용 : 내용다섯</p>
            </div>


            {/* ② 컴포넌트 활용 + props */}
            <TextItem title='하나' content='내용하나' />
            <TextItem title='둘' content='내용둘' />
            <TextItem title='셋' content='내용셋' />
            <TextItem title='넷' content='내용넷' />
            <TextItem title='다섯' content='내용다섯' />


            {/* ③ 배열을 활용하는 방식 */}
            <div className='textItem'>
                <p className='title'>제목 : {titleArr[ 0 ]}</p>
                <p>내용 : {detailArr[ 0 ]}</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : {titleArr[ 1 ]}</p>
                <p>내용 : {detailArr[ 1 ]}</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : {titleArr[ 2 ]}</p>
                <p>내용 : {detailArr[ 2 ]}</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : {titleArr[ 3 ]}</p>
                <p>내용 : {detailArr[ 3 ]}</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : {titleArr[ 4 ]}</p>
                <p>내용 : {detailArr[ 4 ]}</p>
            </div>


            {/* ④ 배열 활용 + map 반복 처리 */}
            {
                //let titleArr = [ '하나', '둘', '셋', '넷', '다섯' ];
                titleArr.map(
                    (title, index) => {
                        return (
                            <div className='textItem'>
                                <p className='title'>제목 : {titleArr[ index ]}</p>
                                <p className='title'>제목 : {title}</p>
                                <p>내용 : {contentArr[ index ]}</p>
                            </div>
                        )
                    })
            }

            {/* ⑤ 배열 + map 반복 처리 + 컴포넌트 + props */}
            {
                //let titleArr = [ '하나', '둘', '셋', '넷', '다섯' ];
                titleArr.map(
                    (title, index) => {
                        return (
                            <TextItem title={title} content={contentArr[ index ]} key={index} />
                        )
                    })
            }
        </div>
    );
}

export default Quiz03;