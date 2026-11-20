import { Button, Card } from "react-bootstrap";
import food1 from '../img/food1.jpg';
import food2 from '../img/food2.jpg';
import food3 from '../img/food3.jpg';
import { useNavigate } from "react-router";

function FoodCard({food, foods, index}) {

    let navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={food.imgPath} />
            <Card.Body>
                <Card.Title>{food.title}</Card.Title>
                <Card.Text>
                    {foods[index].content}
                </Card.Text>
                <Card.Text>
                    {food.price}
                </Card.Text>
                <Button variant="primary"
                onClick={()=>{
                    //상품 상세피에지 주소로 변환
                    // /detail/:id
                    navigate('/detail/' + food.id);
                }}>상세보기</Button>
            </Card.Body>
        </Card>
    )
}

export default FoodCard;