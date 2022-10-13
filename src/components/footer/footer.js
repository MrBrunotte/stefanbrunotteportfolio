import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import './footer.css';

let Footer = () => {
    return (
    <>
    <Container className="footerContainer desktop" fluid>
        <Row>
            <Col xs={12}>
                <Row className="iconMarginTop"> 
                    <Col xs={4}>
                        <div className='desktop'>
                            <span className="myIcons">
                                <a href="https://github.com/MrBrunotte" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </span>
                        </div> 
                    </Col>
                    <Col xs={4}>
                        <div className='desktop'>
                            <span className="myIcons">
                                <h1 className="myFooterH5">
                                &#169; 2022 Stefan Brunotte || Contact me <a href="mailto:mrbrunotte@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
                                </h1>
                            </span>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className='desktop'>
                            <span className="myIcons">
                                <a href="https://www.linkedin.com/in/stefan-brunotte/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </span>
                        </div>
                    </Col>
                        
                </Row>
            </Col>
        </Row>
    </Container>

    <Container className="footerContainer mobile" fluid>
        <Row>
            <Col xs={12}>
                <Row className="iconMarginTop"> 
                    <Col xs={4}>
                        <div className='desktops'>
                            <span className="myIcons">
                                <a href="https://github.com/MrBrunotte" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </span>
                        </div> 
                    </Col>
                    <Col xs={4}>
                        <div className='desktops'>
                            <span className="myIcons">
                                <h1 className="myFooterH5"><a href="mailto:mrbrunotte@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
                                </h1>
                            </span>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className='desktops'>
                            <span className="myIcons">
                                <a href="https://www.linkedin.com/in/stefan-brunotte/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </span>
                        </div>
                    </Col>
                        
                </Row>
            </Col>
        </Row>
    </Container>
    </>
    )
};

export default Footer;