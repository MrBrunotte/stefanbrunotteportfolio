import React from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import worldofshape from './images/worldofshape.jpg';
import vacationexplorer from './images/vacationexplorer.jpg';
import foodictionary from './images/foodictionary.jpg';
import mvcPortfolio from './images/mvcPortfolio.jpg';
import gisysArbProv from './images/gisysArbProv.jpg';
import './myProjects.css';

let MyProjects = () => {
    return (
    <>
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
    >
    <Container className="marginTop">
    <h1 className="myH1">My Projects</h1>
        <Row>
            <Col  xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={worldofshape} />
                <Card.Body className="projectText">
                    <Card.Title>World of shape</Card.Title>
                    <Card.Text>
                    World of Shape is built on the Django3 framework and follows a MTV (model-template-view) architecture pattern. Separation of concerns is used in the application to utilize the Django Framework effectively. Stripe payment method was used throughout development and can also be used in production. The site is fully responsive. (first time loading site is slow)
                    </Card.Text>
                    <Card.Text>
                        <h5>technologies used</h5>
                        <p className="projectTags">JavaScript | Python | Django3 | JQuery | Herouk | SQLite | CSS3 | HTML5 | Git | GitHub | Stripe | VSCode | AdobeXd | Bootstrap</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body className="text-center">
                    <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/worldofshape" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                    <Card.Link href="#"><a className="myIcons" href="https://worldofshape.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={vacationexplorer} />
                <Card.Body className="projectText">
                    <Card.Title>vacation Explorer</Card.Title>
                    <Card.Text>
                    World of Shape is built on the Django3 framework and follows a MTV (model-template-view) architecture pattern. Separation of concerns is used in the application to utilize the Django Framework effectively. Stripe payment method was used throughout development and can also be used in production. The site is fully responsive. (first time loading site is slow)
                    </Card.Text>
                    <Card.Text>
                        <h5>technologies used</h5>
                        <p className="projectTags">JavaScript | Python | Django3 | JQuery | Herouk | SQLite | CSS3 | HTML5 | Git | GitHub | Stripe | VSCode | AdobeXd | Bootstrap</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body className="text-center">
                    <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/worldofshape" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                    <Card.Link href="#"><a className="myIcons" href="https://worldofshape.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={foodictionary} />
                <Card.Body className="projectText">
                    <Card.Title>foodictionary</Card.Title>
                    <Card.Text>
                    World of Shape is built on the Django3 framework and follows a MTV (model-template-view) architecture pattern. Separation of concerns is used in the application to utilize the Django Framework effectively. Stripe payment method was used throughout development and can also be used in production. The site is fully responsive. (first time loading site is slow)
                    </Card.Text>
                    <Card.Text>
                        <h5>technologies used</h5>
                        <p className="projectTags">JavaScript | Python | Django3 | JQuery | Herouk | SQLite | CSS3 | HTML5 | Git | GitHub | Stripe | VSCode | AdobeXd | Bootstrap</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body className="text-center">
                    <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/worldofshape" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                    <Card.Link href="#"><a className="myIcons" href="https://worldofshape.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={mvcPortfolio} />
                <Card.Body className="projectText">
                    <Card.Title>Portfolio ASP .NET mvc</Card.Title>
                    <Card.Text>
                    World of Shape is built on the Django3 framework and follows a MTV (model-template-view) architecture pattern. Separation of concerns is used in the application to utilize the Django Framework effectively. Stripe payment method was used throughout development and can also be used in production. The site is fully responsive. (first time loading site is slow)
                    </Card.Text>
                    <Card.Text>
                        <h5>technologies used</h5>
                        <p className="projectTags">JavaScript | Python | Django3 | JQuery | Herouk | SQLite | CSS3 | HTML5 | Git | GitHub | Stripe | VSCode | AdobeXd | Bootstrap</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body className="text-center">
                    <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/worldofshape" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                    <Card.Link href="#"><a className="myIcons" href="https://worldofshape.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={gisysArbProv} />
                <Card.Body className="projectText">
                    <Card.Title>Gisys work sample</Card.Title>
                    <Card.Text>
                    World of Shape is built on the Django3 framework and follows a MTV (model-template-view) architecture pattern. Separation of concerns is used in the application to utilize the Django Framework effectively. Stripe payment method was used throughout development and can also be used in production. The site is fully responsive. (first time loading site is slow)
                    </Card.Text>
                    <Card.Text>
                        <h5>technologies used</h5>
                        <p className="projectTags">JavaScript | Python | Django3 | JQuery | Herouk | SQLite | CSS3 | HTML5 | Git | GitHub | Stripe | VSCode | AdobeXd | Bootstrap</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body className="text-center">
                    <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/worldofshape" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                    <Card.Link href="#"><a className="myIcons" href="https://worldofshape.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
    </ThemeProvider>
    </>
    )
};

export default MyProjects;