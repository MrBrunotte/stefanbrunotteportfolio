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
import openToWork from '../../images/openToWorkCropped.png';
import './home.css';

let Home = () => {
    return (
    <>
    <Container className="myMargin">
            <Row>
            <Col xs={12}>
                <Nav.Link className="homeLink" as={Link} to="/about">HELLO, my name is Stefan</Nav.Link>
                <Row>
            </Row>
                <h1 className="h1Header">I'm a software developer & IT-Technician</h1>
                <p className="homeText">
                 I’m a junior software developer and IT technician with a strong passion for IT, web development, and trading. While I’m still early in my career, I bring both technical skills and a wealth of life experience to the table. I’m social, outgoing, and always eager to learn and grow — both personally and professionally.
                </p>
                <p className="homeText">I would be thrilled if you could take a moment to scroll through my REACT portfolio page, which I have created to showcase my work and achievements. I hope that what you see sparks your interest, and I would love the chance to introduce myself further.</p>
                <Nav.Link className="h1Header myGray" as={Link} to="/contact">Let's talk!</Nav.Link>
                <p className="homeText">
                <p className="homeText">
                My ideal path is to start in a tech support role and eventually transition into a developer position.
                </p>
                If you’re looking for a junior software developer or IT technician who’s a quick learner and a positive team player, I’d love to connect. I’m currently open to work and eager to join a dynamic team. --&gt;
                    <a href="mailto:mrbrunotte@gmail.com" className="email myIcons" target="_blank" aria-label="Email: mrbrunotte@gmail.com" rel="noreferrer"><FaEnvelope /></a>
                    <p className="openToWork" ><img src={openToWork} alt="I'm open to work" /></p>
                    <hr></hr>
                </p>
                <h2 className="h2Header">Explore My Work</h2>
                <p className="homeText">
                <strong><em>My Certificates: </em></strong>I have earned several certificates, which you can view by clicking the link below or by visiting the "My Certificates" section in the navbar.
                </p>
                <Nav.Link className="projectsLink" as={Link} to="/certificates">see all my certificates <FaExternalLinkAlt /></Nav.Link>
                {/* <h2 className="h2Header">my projects</h2> */}
                <p className="homeText">
                <strong><em>My Projects: </em></strong>Take a look at my projects to see what I’ve created. Below is a sample of my work. For more details on each project, please visit my projects page.
                </p>
                <Nav.Link className="projectsLink" as={Link} to="/projects">see all my projects <FaExternalLinkAlt /></Nav.Link>
                <p className="homeText">
                    If you want to go directly to one of the projects displayed here, just click on one of the two icons below each example.<br></br>- Click on the GitHub icon <FaGithub /> to read more about the project, how I built it and the tools I used.<br></br>- Click on the link icon <FaExternalLinkAlt /> to go to the deployed website.
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
                            <Card.Title>portfolio .net mvc</Card.Title>
                        </Card.Body>
                        <Card.Body className="text-center">
                            <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/PortfolioMVC" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
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
                            <Card.Link href="#"><a className="myIcons" href="https://mrbrunotte.github.io/stefanbrunotteportfolio/#/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
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
