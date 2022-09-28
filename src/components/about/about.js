import React from "react";
import Div100vh from 'react-div-100vh';
import { Col, Container, Row, Button } from "react-bootstrap";
import './about.css';

let About = () => {
    return (
    <>
    <Div100vh>
        <Container className="mt-3">
        <h1 className="myH1">Hey there.</h1>
            <Row>
                <Col xs={2}>
                    <p>2 columns <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
                    <Button className="mx-1">test</Button>
                    <Button className="mx-1">test</Button>
                </Col> 
                <Col xs={3}>
                    <p>3 columns <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
                </Col>
                <Col xs={4}>
                    <p>4 columns <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
                </Col>  
                <Col xs={8}>
                    <p>8 columns <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
                </Col>
                <Col xs={12}>
                    <p>12 columns <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
                </Col>
            </Row>
        </Container>
    </Div100vh>
    </>
    )
};

export default About;