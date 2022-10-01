import React from "react";
import Div100vh from 'react-div-100vh';
import { Col, Container, Row } from "react-bootstrap";

let Landingpage = () => {
    return (
    <>
    {/* <Div100vh> */}
        <Container className="mt-3">
        <h1 className="myH1">Landingpage</h1>
                <Row>
                <Col xs={6}>
                        <p>6 columns <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
                    </Col>
                    <Col xs={6}>
                        <p>6 columns <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
                    </Col>
                </Row>
        </Container>     
    {/* </Div100vh> */}
    </>
    )
};

export default Landingpage;