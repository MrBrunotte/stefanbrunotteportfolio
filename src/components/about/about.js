import React from "react";
import Div100vh from 'react-div-100vh';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import jag from '../../images/jag.png';
import './about.css';

let About = () => {
    return (
    <>
    {/* <Div100vh> */}
    <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
        <Container className="marginTop">
            <Row>
                <Col xxl={4} xl={4} lg={12} md={12} sm={12} xs={12}>
                    <img className="meImg rounded"
                    src={jag}
                    alt="Stefan Brunotte"
                    />
                </Col>
                <Col xxl={8} xl={8} lg={12} md={12} sm={12} xs={12}>
                <div className="textArea">
                    <h1 className="h1About">Hey there...</h1>
                        <p>My name is <span className="specialText">Stefan Brunotte</span>.</p>
                        <p>I'm a software developer based in Stockholm Sweden. My main focus is currently on frontend but I also have experience in both backend and database. I'm currently a junior .NET developer and I'm aiming to become a senior developer within the next 5 years.</p>
                        <p className="question"><span className="specialText">Stefan, by the way</span>... If someone asks you to describe yourself, what would you say??</p>
                        <p className="answer"><q><cite>I'm a problem solving team-player that love to exceed customer expectations, I'm also a fast and curious learner that love new technologies and creative coding.</cite></q></p>
                    <Row className="iconMarginTop">  
                        <Col className="myIcons" lg={6} md={6} sm={12} xs={12}><a className="myIcons" href="https://github.com/MrBrunotte" target="_blank" rel="noreferrer"><FaGithub /></a></Col>
                        <Col className="myIcons" lg={6} md={6} sm={12} xs={12}><a className="myIcons" href="mailto:mrbrunotte@gmail.com"><FaEnvelope /></a></Col>
                    </Row>
                </div>
                </Col>
                
            </Row>
            <Row>
                <Col xs={12}>
                    
                </Col>
            </Row>
        </Container>
        </ThemeProvider>
    {/* </Div100vh> */}
    </>
    )
};

export default About;