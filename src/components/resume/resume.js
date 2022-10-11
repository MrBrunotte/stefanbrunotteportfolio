import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SBCV1 from '../../images/SBCV1.jpg';
import SBCV2 from '../../images/SBCV2.jpg';
import './resume.css';

let Landingpage = () => {
    return (
    <>
        <Container className="mt-3">
        <h1 className="myH1">Resume</h1>
        <Row>
            <Col className='container' xs={12}>
            <div className='d-flex justify-content-center'>
                <button className='resume-btn'>
                    <a className='a-resume' href="../StefanBrunotteCV.pdf" download="StefanBrunotteCV.pdf" target="_blank">Download my CV</a>
                </button>
            </div>
            </Col>
        </Row>
        <Row>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <img className="cvPDFImg rounded"
                    src={SBCV1}
                    alt="Stefan Brunotte"
                    />
            </Col>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <img className="cvPDFImg rounded"
                    src={SBCV2}
                    alt="Stefan Brunotte"
                    />
            </Col>
        </Row>
        </Container> 
    </>
    )
};

export default Landingpage;