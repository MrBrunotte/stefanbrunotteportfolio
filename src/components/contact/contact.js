import React from "react";
import Div100vh from 'react-div-100vh';
import me from '../../images/me.png';
import { Container, Form, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

let Contact = () => {

    
    return (
    <>
    <Div100vh>
        <Container className="mt-3">
        <h1 className="myH1">Contact</h1>
        <img
              src={me}
              width="auto"
              height="100"
              alt="Stefan Brunotte"
            />
            <Row>
                <Col xs={3}>
                    <Card.Header className="p-3" style={{backgroundColor: '#caa532'}}>
                        <h2>Contact me</h2>
                    </Card.Header>
                    <Card.Body style={{backgroundColor: '#c4beae'}}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Your name"></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Your email"></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Subject"></Form.Control>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    </Div100vh>
    </>
    )
};

export default Contact;