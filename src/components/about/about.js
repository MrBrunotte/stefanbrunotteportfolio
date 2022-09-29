import React from "react";
import Div100vh from 'react-div-100vh';
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import jag from '../../images/jag.png';
import './about.css';

let About = () => {
    return (
    <>
    <Div100vh>
        <Container className="marginTop">
            <Row>
                <Col xs={4}>
                    <img className="meImg rounded"
                    src={jag}
                    alt="Stefan Brunotte"
                    />
                </Col>
                <Col xs={8}>
                <div className="textArea">
                    <h1 className="h1About">Hey there...</h1>
                        <p>My name is <span className="specialText">Stefan Brunotte</span>.</p>
                        <p>I'm a software developer based in Stockholm Sweden. My main focus is currently on frontend but I also have experience in both backend and database. I'm currently a junior .NET developer and I'm aiming to become a senior developer within the next 5 years.</p>
                        <p className="question"><span className="specialText">Stefan, by the way</span>... If someone asks you to describe yourself, what would you say??</p>
                        <p className="answer"><q><cite>I'm a problem solving team-player that love to exceed customer expectations, I'm also a fast and curious learner that love new technologies and creative coding.</cite></q></p>
                    <Row>
                        <Col className="myIcons" xs={4}><FaGithub/></Col>
                        <Col className="myIcons" xs={4}><FaEnvelope /></Col>
                        <Col className="myIcons" xs={4}><FaPhone /></Col>
                    </Row>
                </div>
                </Col>
                
            </Row>
            <Row>
                <Col xs={12}>
                    
                </Col>
            </Row>
        </Container>
    </Div100vh>
    </>
    )
};

export default About;