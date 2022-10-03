import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import worldofshape from '../myProjects/images/worldofshape.jpg';
import Card from 'react-bootstrap/Card';
import './landingpage.css';

let Landingpage = () => {
    return (
    <>
    <Container className="mt-3">
    <h1 className="myH1">Landingpage</h1>
            <Row>
            <Col xs={12}>
                    <p>Hello my name is Stefan <br></br>I am a software developer focusing on front-end with experience from backend and database. I'm located in Stockholm Sweden and if you are looking for a teamplayer that love new technologies and creative coding please take a look at my portfolio site.
                    </p>
                    <p>
                        <span className="landingpageSpan">Let's talk!</span><br></br>
                        If you are looking for a new junior software developer that is a quick learner and positve team-player, i'd love to hear from you.  
                    </p>
                </Col>
            <Col xs={12}>
                <p>6 columns <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
            </Col>
            <Col  xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
            <h1 className="h1Landingpage">Some of my projects</h1>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={worldofshape} />
                <Card.Body className="projectText">
                    <Card.Title>World of shape</Card.Title>
                </Card.Body>
                <Card.Body className="text-center">
                    <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/worldofshape" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                    <Card.Link href="#"><a className="myIcons" href="https://worldofshape.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
                </Card.Body>
            </Card>
            </Col>
            </Row>
    </Container>     
    </>
    )
};

export default Landingpage;