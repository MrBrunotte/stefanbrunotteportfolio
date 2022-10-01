import React from "react";
import Div100vh from 'react-div-100vh';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import worldofshape from './images/worldofshape.jpg';
import vacationexplorer from './images/vacationexplorer.jpg';
import foodictionary from './images/foodictionary.jpg';
import mvcPortfolio from './images/mvcPortfolio.jpg';
import gisysArbProv from './images/gisysArbProv.jpg';
import './myProjects.css';

let MyProjects = () => {
    return (
    <>
    <Div100vh>
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
        <Container className="marginTop">
        <h1 className="myH1">My Projects</h1>
            <Row>
                <Col  xxl={3} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={worldofshape} />
                    <Card.Body>
                        <Card.Title>World of shape</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col xxl={3} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={vacationexplorer} />
                    <Card.Body>
                        <Card.Title>Vacation explorer</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col xxl={3} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={foodictionary} />
                    <Card.Body>
                        <Card.Title>Foodictionary</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col xxl={3} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={mvcPortfolio} />
                    <Card.Body>
                        <Card.Title>Portfolio ASP .NET mvc</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col xxl={3} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={gisysArbProv} />
                    <Card.Body>
                        <Card.Title>Gisys work sample</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        </ThemeProvider>
    </Div100vh>
    </>
    )
};

export default MyProjects;