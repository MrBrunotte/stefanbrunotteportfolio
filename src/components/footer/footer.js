import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import './footer.css';

let Footer = () => {
    return (
    <>
    <Container className="footerContainer" fluid>
        <Row>
            <Col xs={12}>
                <Row className="iconMarginTop">  
                        <Col xs={4}>
                        <span className="myIcons"><a href="https://github.com/MrBrunotte" target="_blank" rel="noreferrer"><FaGithub /></a></span></Col>
                        <Col xs={4}>
                        <span className="myIcons"><h1 className="myFooterH5">&#169; 2022 Stefan Brunotte || Contact me <a href="mailto:mrbrunotte@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a></h1></span></Col>
                        <Col xs={4}>
                        <span className="myIcons"><a href="https://www.linkedin.com/in/stefan-brunotte/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></span></Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </>
    )
};

export default Footer;