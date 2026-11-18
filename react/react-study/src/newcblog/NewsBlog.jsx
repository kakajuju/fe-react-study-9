import "./NewsBlog.css";
import { useState } from "react";
import Modal from "./Modal";

function NewsBlog() {

    //제목 잘 바뀌지 않는 내용
    // 하드코딩(텍스트가 직접 박혀있는) vs 일반변수 vs State변수
    let titil = 'Blog Header';

    let [ news1, setNews1 ] = useState('어제의 뉴스');
    let [ news2, setNews2 ] = useState('오늘의 뉴스');
    let [ news3, setNews3 ] = useState('내일의 뉴스');

    let [ news, setNews ] = useState([ '어제의 뉴스', '오늘의 뉴스', '내일의 뉴스' ]);

    let [ likeCount, setlikeCount ] = useState(0);

    let [ likeCountArr, setlikeCountArr ] = useState([ 0, 0, 0 ]);
    //각 뉴스별 좋아요 갯수를 관리

    let [ modalFlag, setModalFlag ] = useState(false);

    return (
        <div>
            <div className="black-nav">
                <h3>{titil}</h3>
                {/* <h3>Blog Header</h3> */}
                <div style={{ color: 'orange', fontSize: '20px' }}>React Study</div>
            </div>


            {
                news.map((item, index) => {
                    return (
                        <div className="post-list">
                            <h4 onClick={() => {
                                setModalFlag(!modalFlag); // !false -> true | !true -> false
                            }}>{news[index]}<span onClick={(event) => {
                                // event.preventDefault();  발생하는 이벤트의 기본 수행을 막는다.
                                event.stopPropagation();    //이벤트 발생을 추가로 전판/전달 하는 것을 stop!
                                let temp = [ ...likeCountArr ];
                                temp[index] += 1;
                                setlikeCountArr(temp); // 재렌더링 조건 충족
                            }}>❤</span> {likeCountArr[index]} </h4>
                            <p>내용</p>
                        </div>
                    )
                })
            }



            {/* <div className="post-list">
                <h4 onClick={() => {
                    //modalFlag 값 변경
                    // setModalFlag(true);
                    // if(modalFlag)
                    //     setModalFlag(false);
                    // else
                    //     setModalFlag(true);
                    // setModalFlag(modalFlag ? false : true);
                    setModalFlag(!modalFlag); // !false -> true | !true -> false
                    // 재렌더링 발생 시점
                }}>{news[ 0 ]} <span onClick={(event) => {
                    // event.preventDefault();  발생하는 이벤트의 기본 수행을 막는다.
                    event.stopPropagation();    //이벤트 발생을 추가로 전판/전달 하는 것을 stop!
                    // setlikeCount(likeCount + 1); // 재렌더링 발생 시점

                    //likeCountArr 배열에서 현재 이 뉴스를 나타내는 인덱스의 값 + 1
                    //배열[0] + 1 -> 값 증가 -> 재렌더링 값증가 표시
                    //배열 깊은복사 -> 새로운 배열값 -> set함수를 통해서...

                    let temp = [ ...likeCountArr ];
                    temp[ 0 ] += 1;
                    setlikeCountArr(temp); // 재렌더링 조건 충족
                }}>❤</span> {likeCountArr[ 0 ]} </h4>
                <p>내용</p>
            </div>

            <div className="post-list">
                <h4 onClick={() => {
                    setModalFlag(!modalFlag); // !false -> true | !true -> false
                }}>{news[ 1 ]}<span onClick={(event) => {
                    // event.preventDefault();  발생하는 이벤트의 기본 수행을 막는다.
                    event.stopPropagation();    //이벤트 발생을 추가로 전판/전달 하는 것을 stop!
                    let temp = [ ...likeCountArr ];
                    temp[ 1 ] += 1;
                    setlikeCountArr(temp); // 재렌더링 조건 충족
                }}>❤</span> {likeCountArr[ 1 ]} </h4>
                <p>내용</p>
            </div>

            <div className="post-list">
                <h4 onClick={() => {
                    setModalFlag(!modalFlag); // !false -> true | !true -> false
                }}>{news[ 2 ]}<span onClick={(event) => {
                    // event.preventDefault();  발생하는 이벤트의 기본 수행을 막는다.
                    event.stopPropagation();    //이벤트 발생을 추가로 전판/전달 하는 것을 stop!
                    let temp = [ ...likeCountArr ];
                    temp[ 2 ] += 1;
                    setlikeCountArr(temp); // 재렌더링 조건 충족
                }}>❤</span> {likeCountArr[ 2 ]} </h4>
                <p>내용</p>
            </div> */}


            {
                /* modalFlag == true ? <Modal/> : null */
            }

            {
                modalFlag && <Modal />
            }


        </div>
    )
}

export default NewsBlog;