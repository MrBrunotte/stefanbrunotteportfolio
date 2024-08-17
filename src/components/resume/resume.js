import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sbcv1 from '../../images/sbcv1.png';
import sbcv2 from '../../images/sbcv2.png';
import sbcv3 from '../../images/sbcv3.png';
import sbcv4 from '../../images/sbcv4.png';
import './resume.css';

let resume = () => {
    return (
    <>
        <Container className="mt-3">
        <h1 className="myH1">Resume</h1>
        <Row>
            <Col className='container' xs={12}>
            <div className='d-flex justify-content-center'>
                <button className='resume-btn'>
                    <a className='a-resume' href="../StefanBrunotteCV.pdf" download="StefanBrunotteCVEng.pdf" target="_blank">Download my CV</a>
                </button>
            </div>
            </Col>
        </Row>
        <Row>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <img className="cvPDFImg rounded"
                    src={sbcv1}
                    alt="Stefan Brunotte"
                    />
            </Col>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <img className="cvPDFImg rounded"
                    src={sbcv2}
                    alt="Stefan Brunotte"
                    />
            </Col>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <img className="cvPDFImg rounded"
                    src={sbcv3}
                    alt="Stefan Brunotte"
                    />
            </Col>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <img className="cvPDFImg rounded"
                    src={sbcv4}
                    alt="Stefan Brunotte"
                    />
            </Col>
        </Row>
        </Container> 
    </>
    )
};

export default resume;