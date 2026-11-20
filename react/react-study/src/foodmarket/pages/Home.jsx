import { Container, Row, Col} from 'react-bootstrap';
import FoodCard from '../components/FoodCard';

function Home({foods}) {


    return (
        <div>
            <div className='main-bg'></div>

            <Container>
                <Row>
                    {
                        foods.map((food, index) => {
                            return (
                                <Col md={4} sm={4} xxl={3}>
                                    {/* <FoodCard food={food} /> */}
                                    <FoodCard food={food} foods={foods} index={index} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

        </div>
    )
}

export default Home;