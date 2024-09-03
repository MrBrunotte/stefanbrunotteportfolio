import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
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
                    <p className="aboutText">My name is <span className="specialText">Stefan Brunotte</span> and I am currently seeking new professional opportunities.</p>
                    <p className="aboutText">As a junior software developer and IT technician based in Stockholm, Sweden, my focus has been primarily on frontend development, though I have gained experience in both backend and database work as well.<br></br> I am presently employed at the KI-Help Desk at the Karolinska Institute, where I provide first-line IT support. <em>However,</em> I am eager to transition more into software development. <br></br>
                    <br></br> In addition to my IT background, I have been actively day-trading the futures markets on and off since 2005. Utilizing a price-action strategy, where I identify high-probability setups on the 2000-tick chart, focusing on E-Minis and Crude Oil. <br></br>  My ideal role would be one where I can merge my software development skills with my passion for trading.
                    </p>
                    <p className="aboutText"><span className="specialText">Stefan, by the way</span>... If someone asks you to describe yourself, what would you say??</p>
                    <p className="aboutTextAnswer"><q><cite>I am a problem-solving team player who thrives on exceeding customer expectations. A fast and curious learner, I have a deep enthusiasm for new technologies and creative coding. I am a pragmatic software developer, committed to continuous learning and improvement, and I take pride in the quality and maintainability of my work. I highly value modern software engineering practices such as SCRUM, pair programming, and clean code.
                    </cite></q></p>
                    {/* <p className="aboutText"><span className="specialText">anything else?</span></p>
                    <p className="aboutText">I see myself as a sensible and pragmatic software developer that is passionate about learning and pursuing self-improvement and growth as a programmer. I value modern software engineering practices such as SCRUM, pair programming and clean code among other. I also see myself as a person that take ownership of to the product, the quality of my work and long-term maintainability of my code.</p> */}
                    
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
            <div className="textArea_noPadding">
                <p className="aboutText"><span className="specialText">What I bring to the table</span></p>
                <p className="aboutText">Joining your team, you would find a dedicated and positive team player with a "can-do" attitude. My broad background and life experiences have equipped me with a range of complementary skills, honed through working with diverse people and cultures. I am also a social person who enjoys meeting new people and helping others achieve their best.
                </p>
                <p className="aboutText">I am a social person that love to meet new people and help bring out the best in them and myself.</p>
                <p className="aboutText"><span className="specialText">Let's connect</span></p>
                <p className="aboutText">If my background and skills align with what you're looking for, I would love the opportunity to introduce myself further. Please feel free to reach out through my contact form:<br></br><Nav.Link className="projectsLink mySmallPadding" as={Link} to="/contact">Contact form <FaExternalLinkAlt /></Nav.Link>
                Looking forward to the possibility of working together.
                </p>
            </div>
            </Col>
        </Row>
    </Container>
    </>
    )
};

export default About;
