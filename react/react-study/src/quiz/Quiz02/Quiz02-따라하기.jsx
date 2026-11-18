import { useState } from "react";

function Quiz02() {

    /* 
      // 1) 텍스트로 바로 처리
      let [text, setText] = useState('하나');
    
      return (
          <div style={{textAlign:'center'}}>
              <p>{text}</p>
  
              <button onClick={()=>{
                  // 하나 둘 셋 텍스트 변경
                  if(text =='하나')
                      setText('둘');
                  else if (text =='둘')
                      setText('셋');
                  else
                      setText('하나');
  
              }}>변경버튼</button>
          </div>
      )
       */




    /* 
        // 2) flag 활용 + if else
    
        let [ flag, setFlag ] = useState(1);
        //1->하나 2->둘 3->셋
    
        if (flag == 1) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <p>하나</p>
    
                    <button onClick={() => {
                        setFlag(2);
                    }}>변경버튼</button>
                </div>
            )
        } else if (flag == 2) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <p>둘</p>
    
                    <button onClick={() => {
                        setFlag(3);
                    }}>변경버튼</button>
                </div>
            )
        }
        else {
            return (
                <div style={{ textAlign: 'center' }}>
                    <p>셋</p>
    
                    <button onClick={() => {
                        setFlag(1);
                    }}>변경버튼</button>
                </div>
            )
        }
     */


    // 3) 배열, index 활용

    let textArr = [ '하나', '둘', '셋' ];
    //   0     1    2
    let [ index, setIndex ] = useState(0);

    const btn_click = () => {

        //index 변경
        // index 0 1 2 0 1 2 0 1 2

        // 방법1)
        /* if(index ==0)
            setIndex(1);
        else if(index ==1)
            setIndex(2);
        else 
            setIndex(0); */

        // 방법2)
        /* index++;    //0 1 2     3|0     0 1 2 0 1 2
        if (index > 2)   // 3>2
            index = 0;  // 0 */

        // 방법3)
        /* index = (index + 1) > 2 ? 0 : (index + 1); */

        // 방법1,2,3의 출력)
        // setIndex(index);

        // 방법4)
        // index = (index+1)%3     0%3=0   1%3=1   2%3=2   3%3=0

        // 방법5)
        // index = (index+1)%textArr.length    0%3=0   1%3=1   2%3=2   3%3=0

        // 방법6)  
        setIndex((index + 1) % textArr.length);

    }

    return (
        <div style={{ textAlign: 'center' }}>
            <p>{textArr[ index ]}</p>

            {/* <button onClick={btn_click()}>변경버튼</button> 이벤트 등록에 함수 호출형 사용 불가*/}

            {/* 방법 1) - 매개변수 못 넣음 */}
            {/* <button onClick={btn_click}>변경버튼</button> */}

            {/* 방법 2) - 전부 커버 가능 */}
            <button onClick={
                () => {
                    // btn_click(50);   매개변수를 넘기는 형태로 호출할때
                    btn_click();
                }}>변경버튼</button>
        </div>
    )

}


export default Quiz02;