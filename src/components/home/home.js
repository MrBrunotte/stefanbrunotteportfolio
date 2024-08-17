import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import worldofshape from '../myProjects/images/worldofshape.jpg';
import foodictionary from '../myProjects/images/foodictionary.jpg';
import vacationExplorer from '../myProjects/images/vacationexplorer.jpg';
import mvcPortfolio from '../myProjects/images/mvcPortfolio.jpg';
import reactPortfolio from '../myProjects/images/reactPortfolio.jpg';
import teacherOverview from '../myProjects/images/teacherOverview.jpeg';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './home.css';

let Home = () => {
    return (
    <>
    <Container className="myMargin">
            <Row>
            <Col xs={12}>
                <Nav.Link className="homeLink" as={Link} to="/about">HELLO, my name is Stefan</Nav.Link>
                <h1 className="h1Header">I'm a software developer & IT-Technician</h1>
                <p className="homeText">
                    I am a system developer (junior) and IT support/operations technician with lots of experience life. I have a keen interest in IT, Web development and Trading. I consider myself social and outgoing and I always strive to excel and grow, both as a person and knowledge wise. Please have a look at my REACT portfolio page that I have developed. <br></br>I hope that my page will spark some interest, and I would love to get the opportunity to introduce myself further.
                </p>
                <Nav.Link className="homeLink" as={Link} to="/contact">Let's talk!</Nav.Link>
                <p className="homeText">
                    If you are looking for a junior software developer or It-technician who is a quick learner and positive team-player, I'd love to hear from you.
                    <a href="mailto:mrbrunotte@gmail.com" className="email myIcons" target="_blank" aria-label="Email: mrbrunotte@gmail.com" rel="noreferrer"><FaEnvelope /></a>
                </p>
                <h2 className="h2Header">My certificates</h2>
                <p className="homeText">
                I have taken several certificates, click the link below or "My Certificates" in the navbar to view then.
                </p>
                <Nav.Link className="projectsLink" as={Link} to="/certificates">see all my certificates <FaExternalLinkAlt /></Nav.Link>
                <h2 className="h2Header">my projects</h2>
                <p className="homeText">
                    Take a look at my projects to see what I have created, below are a sample of some of my projects. Click the link to go to my projects page, there you can find out more about each project. 
                </p>
                <Nav.Link className="projectsLink" as={Link} to="/projects">see all my projects <FaExternalLinkAlt /></Nav.Link>
                <p className="homeText">
                    If you want to go directly to one of the projects displayed here, just click on one of the two icons below each example.<br></br>- Click on the GitHub icon <FaGithub /> to read more about the project, how I built it and the tools I used.<br></br>- Click on the link <FaExternalLinkAlt /> icon to go to the deployed website, the pages are deployed on Heroku so they might render slowly the first time, so please be a little patient and have that in mind.
                </p>
            </Col>
            
            <Col  xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={worldofshape} />
                <Card.Body className="projectText">
                    <Card.Title>World of shape</Card.Title>
                </Card.Body>
                <Card.Body className="text-center">
                    <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/worldofshape" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                    {/* <Card.Link href="#"><a className="myIcons" href="https://worldofshape.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link> */}
                </Card.Body>
            </Card>
            </Col>
            <Col  xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={vacationExplorer} />
                <Card.Body className="projectText">
                    <Card.Title>vacationExplorer</Card.Title>
                </Card.Body>
                <Card.Body className="text-center">
                    <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/Vacation-Explorer" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                    <Card.Link href="#"><a className="myIcons" href="https://mrbrunotte.github.io/Vacation-Explorer/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col  xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={foodictionary} />
                <Card.Body className="projectText">
                    <Card.Title>foodictionary</Card.Title>
                </Card.Body>
                <Card.Body className="text-center">
                    <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/foodictionary" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                    {/* <Card.Link href="#"><a className="myIcons" href="https://foodictionary.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link> */}
                </Card.Body>
            </Card>
            </Col>
                <Col  xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={mvcPortfolio} />
                        <Card.Body className="projectText">
                            <Card.Title>portfolio Asp .net mvc</Card.Title>
                        </Card.Body>
                        <Card.Body className="text-center">
                            <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/PortfolioMVC" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                            <Card.Link href="#"><a className="myIcons" href="https://stefanbrunotte.azurewebsites.net/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col  xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={reactPortfolio} />
                        <Card.Body className="projectText">
                            <Card.Title>New React portfolio page</Card.Title>
                        </Card.Body>
                        <Card.Body className="text-center">
                            <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/StefanBrunottePortfolio" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                            {/* <Card.Link href="#"><a className="myIcons" href="https://sbportfolio.azurewebsites.net/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col  xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={teacherOverview} />
                        <Card.Body className="projectText">
                            <Card.Title>LMS - MVC .NET core</Card.Title>
                        </Card.Body>
                        <Card.Body className="text-center">
                            <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/LMS" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    </Container>     
    </>
    )
};

export default Home;