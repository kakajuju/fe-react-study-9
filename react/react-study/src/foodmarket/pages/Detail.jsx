import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router";

function Detail({ foods }) {
    // 상세보기를 눌렀을 때
    // 특정 상품의 상세정보를 보여주는 페이지

    //url 주소창 접속 경로 /detail/:id

    //  /detail/:fd001

    // 상세보기를 눌르면 -> /detail/id값

    // id값으로 넘어온 값이 무엇이냐? ---> foods 데이터 중에 id가 같은 상품 찾기

    // :id 위피에 있는 값 접근
    let { id } = useParams();
    console.log(id);

    // id하고 같은 id 가진 food 데이터 찾기

    // filter
    /*  let food = foods.filter((food, index)=>{
         return food.id ==id;
     }) */

    // find, findIndex
    let food = foods.find((food, index) => {
        return food.id == id;
    })
    //food.title

    let findIndex = foods.findIndex((food, index) => {
        return food.id == id;
    })


    // foods[foodIndex].title;



    console.log(food);

    let navigate = useNavigate();


    // 해당 id 상품을 찾지 못했을 경우 필터링
    if (food == undefined || food == null) {
        return (
            <div>
                <h1>존재하지 않는 상품입니다.</h1>
                <h2>잘못된 접근입니다.</h2>
                <button variant='info' onClick={() => {
                    navigate('/');
                }}>홈으로 돌아가기</button>
            </div>
        )
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={import.meta.env.BASE_URL + food.imgPath} style={{ width: '100 %' }} />
                </Col>
                <Col md={6}>
                    <h4>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>

                    <div>
                        <Button variant='dark'>-</Button>
                        <span> 0 </span>
                        <Button variant='dark'>+</Button>
                    </div>

                    <Button variant='primary'>주문하기</Button>
                </Col>

            </Row>
        </Container>
    )

}

export default Detail;