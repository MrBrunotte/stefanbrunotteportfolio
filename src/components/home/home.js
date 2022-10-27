import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import worldofshape from '../myProjects/images/worldofshape.jpg';
import foodictionary from '../myProjects/images/foodictionary.jpg';
import vacationExplorer from '../myProjects/images/vacationexplorer.jpg';
import mvcPortfolio from '../myProjects/images/mvcPortfolio.jpg';
import reactPortfolio from '../myProjects/images/reactPortfolio.jpg';
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
                <h1 className="h1Header">I'm a software developer</h1>
                <p className="homeText">
                    <em>I focus primarily on front-end but I have experience from both backend and database. I'm located in Stockholm Sweden and if you are looking for a team-player that love new technologies and creative coding please take a look at my portfolio site.</em>
                </p>
                <Nav.Link className="homeLink" as={Link} to="/contact">Let's talk!</Nav.Link>
                <p className="homeText">
                    <em>If you are looking for a new junior software developer that is a quick learner and positive team-player, I'd love to hear from you. </em>
                    <a href="mailto:mrbrunotte@gmail.com" className="email myIcons" target="_blank" aria-label="Email: mrbrunotte@gmail.com" rel="noreferrer"><FaEnvelope /></a>
                </p>
                <h2 className="h2Header">Some of my projects</h2>
            </Col>
            
            <Col  xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={worldofshape} />
                <Card.Body className="projectText">
                    <Card.Title>World of shape</Card.Title>
                </Card.Body>
                <Card.Body className="text-center">
                    <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/worldofshape" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                    <Card.Link href="#"><a className="myIcons" href="https://worldofshape.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
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
                    <Card.Link href="#"><a className="myIcons" href="https://foodictionary.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
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
                            <Card.Link href="#"><a className="myIcons" href="https://sbportfolio.azurewebsites.net/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    </Container>     
    </>
    )
};

export default Home;