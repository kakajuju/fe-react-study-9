import "./NewsBlog.css";
import { useState } from "react";
import Modal from "./Modal";

function NewsBlog() {

    //제목  잘 바뀌지 않는 내용
    // 하드코딩(텍스트가 직접 작성되어있는) vs 일반변수 vs State변수
    let title = "Blog Header";

    let [ news1, setNews1 ] = useState("어제의 뉴스");
    let [ news2, setNews2 ] = useState("오늘의 뉴스");
    let [ news3, setNews3 ] = useState("내일의 뉴스");

    let [ news, setNews ] = useState([ "어제의 뉴스", "오늘의 뉴스", "내일의 뉴스" ]);
    //       5           10              1
    let [ likeCount, setLikeCount ] = useState(0);
    //likeCount2
    //likeCount3

    let [ likeCountArr, setLikeCountArr ] = useState([ 0, 0, 0 ]);
    //각 뉴스별 좋아요 갯수를 관리

    let [ modalFlag, setModalFlag ] = useState(false);

    //뉴스를 눌렀을때 Modal 창에 전달할 정보를 저장할 변수
    let [ selectsdTitle, setselectsdTitle ] = useState('');
    let [ selectsdLikeCount, setselectsdLikeCount ] = useState(0);

    let [ inputText, setInputText ] = useState('');

    return (
        <div>
            <div className="black-nav">
                <h3>{title}</h3>
                {/* <h3>Blog Header</h3> */}
                <div style={{ color: "orange", fontSize: "20px" }}>React Study</div>
            </div>



            {
                news.map((item, index) => {
                    return (
                        <div className="post-list">
                            <h4 onClick={() => {
                                setselectsdTitle(item);
                                setselectsdLikeCount(likeCountArr[ index ]);
                                //어떤뉴스 눌렀는지 title, likecount -> 
                                setModalFlag(!modalFlag);   //모달찰 표시여부 true/false
                            }}>{news[ index ]} <span onClick={(event) => {
                                event.stopPropagation();  //이벤트 발생을 추가로 전파/전달 하는 것을 stop!
                                let temp = [ ...likeCountArr ];
                                temp[ index ] += 1;
                                setLikeCountArr(temp);  //재렌더링 조건 충족
                            }}>♥</span> {likeCountArr[ index ]}</h4>
                            <p>내용</p>
                        </div>
                    )
                })
            }

            <div>
                <button onClick={() => {
                    let temp = [ ...news ];
                    temp[ 0 ] = 'Today 긴급 속보!!!';
                    setNews(temp);
                }}>긴급제목변경</button>
            </div>







            {/* <div className="post-list">
                <h4 onClick={()=>{
                    // modalFlag 값 변경
                    //setModalFlag(true);
                    // if(modalFlag) 
                    //     setModalFlag(false);
                    // else
                    //     setModalFlag(true);
                    // setModalFlag( modalFlag ? false : true );
                    setModalFlag( !modalFlag );  // !false -> true   !true -> false
                    // 재렌더링
                }}>{news[0]}  <span onClick={(event)=>{ 
                                    // event.preventDefault();  발생하는 이벤트의 기본 수행을 막는다.
                                    event.stopPropagation();  //이벤트 발생을 추가로 전파/전달 하는 것을 stop!
                                    //setLikeCount(likeCount+1); // 재렌더링
                                    
                                    //likeCountArr 배열에서 현재 이 뉴스를 나타내는 인덱스의 값 + 1
                                    // 배열[0] +1  -> 값 증가 -> 재렌더링 값증가 표시
                                    // 배열 깊은복사 -> 새로운 배열값 -> set함수를 통해서...

                                    let temp = [...likeCountArr];
                                    temp[0] += 1;  
                                    setLikeCountArr(temp);  //재렌더링 조건 충족

                                }}>♥</span> {likeCountArr[0]} </h4>
                <p>내용</p>
            </div>

            <div className="post-list">
                <h4 onClick={()=>{
                    setModalFlag( !modalFlag );
                }}>{news[1]} <span onClick={(event)=>{ 
                                    // event.preventDefault();  발생하는 이벤트의 기본 수행을 막는다.
                                    event.stopPropagation();  //이벤트 발생을 추가로 전파/전달 하는 것을 stop!
                                    let temp = [...likeCountArr];
                                    temp[1] += 1;  
                                    setLikeCountArr(temp);  //재렌더링 조건 충족
                                }}>♥</span> {likeCountArr[1]}</h4>
                <p>내용</p>
            </div>

            <div className="post-list">
                <h4 onClick={()=>{
                    setModalFlag( !modalFlag );
                }}>{news[2]} <span onClick={(event)=>{ 
                                    // event.preventDefault();  발생하는 이벤트의 기본 수행을 막는다.
                                    event.stopPropagation();  //이벤트 발생을 추가로 전파/전달 하는 것을 stop!
                                    let temp = [...likeCountArr];
                                    temp[2] += 1;  
                                    setLikeCountArr(temp);  //재렌더링 조건 충족
                                }}>♥</span> {likeCountArr[2]}</h4>
                <p>내용</p>
            </div> */}

            <div>
                <input type="text" id="input_news_title" value={inputText} onChange={(event) => {
                    //매개변수 event : 키보드 이벤트정보
                    //event.target 이벤트가 발생한 요소 접근

                    // input 창에서 입력 발생 -> onChange 이벤트에 등록된 함수 수행 -> value값을 state변수에 저장해둠

                    console.log(event.target.value);
                    setInputText(event.target.value);
                }} />
                <button onClick={() => {

                    //사전 필터링 패턴

                    //문자 앞뒤에 있는 공백(띄어쓰기) 제거
                    //띄어쓰기만 있을때 등록을 방지
                    //trim() : 문자열 앞뒤에 있는 공백을 제거

                    //공백제거
                    inputText = inputText.trim();


                    if (inputText === '') {
                        alert('놉!!!');
                        setInputText('');
                        return;
                    }


                    // input에서 입력되어 저장된 state변수값 -> news배열에 추가등록 -> 재렌더링+화면에표시
                    let temp = [ ...news ];
                    temp.push(inputText);
                    setNews(temp);

                    
                    likeCountArr.push(0);

                    setInputText(''); // 입력값 저장하는 inputText state변수에 값을 초기화(clean)

                }}>뉴스발행</button>
            </div>

            {
                /*  modalFlag == true ? <Modal/> : null  */
            }

            {
                modalFlag && <Modal title={selectsdTitle} likeCount={selectsdLikeCount}
                    news={news} setNews={setNews} bgColor='lightblue' />

            }


        </div>
    )
}

export default NewsBlog;