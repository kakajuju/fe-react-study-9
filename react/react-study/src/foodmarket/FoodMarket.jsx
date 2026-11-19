import './FoodMarket.css';
/* import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; */

import { Container, Nav, Navbar, Spinner, Button, Row, Col, Card } from 'react-bootstrap';

import banner_bg from './img/banner_bg.jpg';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';

import foodsData from "./data/foodsData";
import { useState } from 'react';
import FoodCard from './components/FoodCard';

function FoodMarket() {

    let [ foods, setFoods ] = useState(foodsData);

    return (
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* 
                이미지를 사용 (연결)

                " html 연결 상대경로 연결
                <img scr="./images/a.png"/>

                React 방식
                생대폴더경로 링크로 연결x
                React 컴포넌트 방식에서 이미지 사용식
                1. import 이미지
                2. 외부 이미지 URL 경로
                3. css 에서 이미지 경로
                    url('./
                4. public 폴더에 이미지를 미리 저장해놓고 접근/사용
                현재 실행중인 서번에 public 경로를 통해 image 접근 가능
                서버가 외부 url 이미지에 접근하듯이 해당 서버 역할

            */}
            {/* <img src={banner_bg} />
            <img src='https://images.pexels.com/photos/18726118/pexels-photo-18726118.jpeg' /> */}

            <div className='main-bg'></div>

            <Container>
                <Row>
                    {
                        foods.map((food, index) => {
                            return (
                                <Col md={4} sm={4} xxl={3}>
                                    {/* <FoodCard food={food} /> */}
                                    <FoodCard food={food} foods={foods} index={index}/>
                                </Col>
                            )
                        })
                    }


                </Row>
            </Container>


            {/* 한줄 기준 12로 본다. */}
            {/*  <Container>
                <Row>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1} />
                            <Card.Body>
                                <Card.Title>{foods[ 0 ].title}</Card.Title>
                                <Card.Text>
                                    {foods[ 0 ].content}
                                </Card.Text>
                                <Card.Text>
                                    {foods[ 0 ].price}
                                </Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food2} />
                            <Card.Body>
                                <Card.Title>{foods[ 1 ].title}</Card.Title>
                                <Card.Text>
                                    {foods[ 1 ].content}
                                </Card.Text>
                                <Card.Text>
                                    {foods[ 1 ].price}
                                </Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col><Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                                <Card.Title>{foods[ 2 ].title}</Card.Title>
                                <Card.Text>
                                    {foods[ 2 ].content}
                                </Card.Text>
                                <Card.Text>
                                    {foods[ 2 ].price}
                                </Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}






















            {/*       <Button variant="primary">Primary</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-success">Success</Button>

            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">메뉴</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>

            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>

 */}


        </div >
    )

}

export default FoodMarket;