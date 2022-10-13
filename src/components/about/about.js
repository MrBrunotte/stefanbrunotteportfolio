import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import jag from '../../images/jag.png';
import './about.css';

let About = () => {
    return (
    <>
    <Container className="marginTop">
        <Row>
            <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                <div className="photo">
                    <img className="meImg rounded" src={jag} alt="Stefan Brunotte"></img>
                </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
                <div className="textArea">
                    <h1 className="h1About">Hey there...</h1>
                    <h1 className="h1AboutMediaQuery">Hey there...</h1>
                        <p className="aboutText">My name is <span className="specialText">Stefan Brunotte</span>.</p>
                        <p className="aboutText">I'm a software developer based in Stockholm Sweden. My main focus is currently on frontend but I also have experience in both backend and database. I'm currently a junior .NET developer and I'm aiming to become a senior developer within the next 5 years.</p>
                        <p className="aboutText"><span className="specialText">Stefan, by the way</span>... If someone asks you to describe yourself, what would you say??</p>
                        <p className="aboutTextAnswer"><q><cite>I'm a problem solving team-player that love to exceed customer expectations, I'm also a fast and curious learner that love new technologies and creative coding.</cite></q></p>
                    <Row className="iconMarginTop">  
                        <Col xs={12}>
                        <div className="desktop">
                            <span className="myIcons"><a href="https://github.com/MrBrunotte" target="_blank" rel="noreferrer"><FaGithub /></a></span>
                            <span className="myIcons"><a href="mailto:mrbrunotte@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a></span>
                        </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            
        </Row>
        <Row>
            <Col xs={12}>
                
            </Col>
        </Row>
    </Container>
    </>
    )
};

export default About;