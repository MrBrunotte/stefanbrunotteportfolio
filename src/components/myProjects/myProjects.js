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
import teacherOverview from './images/teacherOverview.jpeg';
import reactPortfolio from './images/reactPortfolio.jpg';
import './myProjects.css';

let MyProjects = () => {
    return (
    <>
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
    >
    <Container>
    <h1 className="myH1Projects">My Projects</h1>
    <Row>
        <Col className="text-center" xs={12}>
                <p className="textHeader">
                Here is a list of my main project that I have created, you can see the full list of all my activity on my GitHub <a className="myIconsProject" href="https://github.com/MrBrunotte/worldofshape" target="_blank" rel="noreferrer"><FaGithub /></a>
                </p>
                <p className="textHeader myMBProjects">
                There is a link to each deployed sight and a link to the GitHub repository under each project. There is a full description of each project in my GitHub page.
                </p>
        </Col>
    </Row>
        <Row>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={worldofshape} />
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">World of shape</Card.Title>
                        <Card.Text className="myCardText">
                        World of Shape is built on the Django3 framework and follows a MTV (model-template-view) architecture pattern. Separation of concerns is used in the application to utilize the Django Framework effectively. Stripe payment method was used throughout development and can also be used in production. The site is fully responsive. <br></br><em>(First time loading site be slow).</em>
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">technologies used</h5>
                            <p className="projectTags myCardTags"><em>JavaScript | Python | Django3 | JQuery | Heruko | SQLite | CSS3 | HTML5 | Git | GitHub | Stripe | VSCode | AdobeXd | Bootstrap</em></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/worldofshape" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                        {/* <Card.Link href="#"><a className="myIcons" href="https://worldofshape.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={vacationexplorer} />
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">vacation Explorer</Card.Title>
                        <Card.Text className="myCardText">
                        Your new friend when you travel the world! With this website you can, in an easy way, find recommendations of hotels, bars and restaurants in any city around the world! The website also lets you, as a user, scroll around in the map to find the exact location of your interest and get the recommendations for the area.. <br></br><em>(First time loading site be slow).</em>
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">technologies used</h5>
                            <p className="projectTags myCardTags"><em>JavaScript | JQuery | Maps JavaScript API | Places API | CSS3 | HTML5 | GitHub | VSCode | Bootstrap</em></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/Vacation-Explorer" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                        <Card.Link href="#"><a className="myIcons" href="https://mrbrunotte.github.io/Vacation-Explorer/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={foodictionary} />
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">foodictionary</Card.Title>
                        <Card.Text className="myCardText">
                        Your personalized cookbook! Foodictionary lets the user personalize their own special cookbook! The idea for this website is to let the user build their own personalized cookbook. The registered user is able to add, edit and delete their own recipes they are also able to add their favorite recipes to a favoriets section. The guest user is able to browse and search for recipes but to be able to use all the websites functionalities they need to become a registered user. To get the best experiance and understanding of all features of the website, please register as a user and add some recipes. When you have registered and logged in you will be able to test all features of FOODictionary.. <br></br><em>(First time loading site be slow).</em>
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">technologies used</h5>
                            <p className="projectTags myCardTags"><em>JavaScript | Python | Flask | JQuery | Heruko | MongoDB Atlas | CSS3 | HTML5 | Git | GitHub | VSCode | AdobeXd | Materialize</em></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/foodictionary" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                        {/* <Card.Link href="#"><a className="myIcons" href="https://foodictionary.herokuapp.com/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={mvcPortfolio} />
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">Portfolio ASP .NET mvc</Card.Title>
                        <Card.Text className="myCardText">
                        My previous Portfolio page was buildt with C# and ASP.NET Core MVC framework, and it follows the MVC architecture pattern. A login functionality was created so that I would be able to add or remove data from the database. All data is stored in a SQL database located in the Azure cloud where the site is deployed. Visual Studio was used to create the portfolio and the mockup for the protfolio page was created with AdobeXd.
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">technologies used</h5>
                            <p className="projectTags myCardTags"><em>C# | Azure | SQL Database | SQL server | Cloud Shell Storage | CSS3 | HTML5 | GitHub | Visual Studio | AdobeXd</em></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/PortfolioMVC" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                        {/* <Card.Link href="#"><a className="myIcons" href="https://stefanbrunotte.azurewebsites.net/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={reactPortfolio} />
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">React portfolio page</Card.Title>
                        <Card.Text className="myCardText">
                        This is my current portfolio page build with the React library, I have deployed my portfolio page with the Azure App Service and linked it to my GitHub repository.
                        The portfolio page is fully mobile responsive.
                        The project is divided into nine components and I have used two JSON files for the work and academic data.
                        <br></br>
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">technologies used</h5>
                            <p className="projectTags myCardTags"><em>React | Azure cloud | JavaScript | JSON | CSS3 | HTML5 | GitHub | VSCode | React-Bootstrap</em></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/StefanBrunottePortfolio" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                        <Card.Link href="#"><a className="myIcons" href="https://mrbrunotte.github.io/stefanbrunotteportfolio/#/" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={gisysArbProv} />
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">Angular work sample</Card.Title>
                        <Card.Text className="myCardText">
                        <strong>Objective: </strong>Build a webbapplication that calculates bonuses for a small consultant company. The bonus is based on the company's net result and is calculated individually for every consultant based on their individual hourly input. The bonus is also based on a lojalty factor depending on number of years the consultant have worked for the company.
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">technologies used</h5>
                            <p className="projectTags myCardTags"><em>JavaScript | Python | Django3 | JQuery | Herouk | SQLite | CSS3 | HTML5 | Git | GitHub | Stripe | VSCode | AdobeXd | Bootstrap</em></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/Arbetsprov-Bonus-Calculation" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={teacherOverview} />
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">LMS - MVC .NET core</Card.Title>
                        <Card.Text className="myCardText">
                        The LMS (Learning Management System) is a Full Stack project that is built in C# ASP .NET core MVC framework. It follows the MVC architecture pattern. Entity Framework and the built in SQL database was used for storing data. SCRUM framework was used under design and the application has the CRUD functionality.
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">technologies used</h5>
                            <p className="projectTags myCardTags"><em>C# | ASP .NET Core | Entityframework | JavaScript | SQL | SCRUM | CSS3 | HTML5 | GitHub | Visual Studio</em></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <Card.Link href="#"><a className="myIcons" href="https://github.com/MrBrunotte/LMS" target="_blank" rel="noreferrer"><FaGithub /></a></Card.Link>
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
