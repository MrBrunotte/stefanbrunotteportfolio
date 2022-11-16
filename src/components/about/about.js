import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
                    <p className="aboutText">My name is <span className="specialText">Stefan Brunotte</span> and I'm open for work!</p>
                    <p className="aboutText">I'm a software developer based in Stockholm Sweden. My main focus is currently on frontend but I also have experience in both backend and database. I'm currently a junior .NET developer and I'm aiming to become a senior developer within the next 5 years.</p>
                    <p className="aboutText"><span className="specialText">Stefan, by the way</span>... If someone asks you to describe yourself, what would you say??</p>
                    <p className="aboutTextAnswer"><q><cite>I'm a problem solving team-player that love to exceed customer expectations, I'm also a fast and curious learner that love new technologies and creative coding.</cite></q></p>
                    <p className="aboutText"><span className="specialText">anything else?</span></p>
                    <p className="aboutText">I see myself as a sensible and pragmatic software developer that is passionate about learning and pursuing self-improvement and growth as a programmer. I value modern software engineering practices such as SCRUM, pair programming and clean code among other. I also see myself as a person that take ownership of to the product, the quality of my work and long-term maintainability of my code.</p>
                    
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
            <div className="textArea_noPadding">
                <p className="aboutText"><span className="specialText">what do I bring to the table?</span></p>
                <p className="aboutText">With me on your team you will get a dedicated team-player with a positive attitude and a <cite>"You can if you think you can"</cite> mental attitude. I will bring many complimentary skills to the team with my broad background and life experience, I have gained these skills by working with different types of people and cultures during my work and academic career.</p>
                <p className="aboutText">I am a social person that love to meet new people and help bring out the best in them and myself.</p>
                <p className="aboutText"><span className="specialText">Let's talk</span></p>
                <p className="aboutText">If I sound like a new potential team-player, I would love to get a chance to introduce myself further. Please feel free to contact me by clicking on your preferred choice of contact method in the footer below.</p>
            </div>
            </Col>
        </Row>
    </Container>
    </>
    )
};

export default About;