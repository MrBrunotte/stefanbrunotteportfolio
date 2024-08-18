import React from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import itTechSup from './imagesCertificates/itTechSup.png';
import lexiconDotNet from './imagesCertificates/lexiconDotNet.png';
import az900 from './imagesCertificates/az900.png';
import ms900 from './imagesCertificates/ms900.png';
import sc900 from './imagesCertificates/sc900.png';
import networkingBasics from './imagesCertificates/networkingBasics.png';
import ITIL4Smaller from './imagesCertificates/ITIL4Smaller.png';
import './certificates.css';

let MyProjects = () => {
    return (
    <>
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
    >
    <Container>
    <h1 className="myH1Projects">My Certificates & Diplomas</h1>
    <Row> 
        <Col className="text-center" xs={12}>
                <p className="textHeader">
                <em>Click on each certificate to view and verify completion.</em>
                </p>
        </Col>
    </Row>
        <Row>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">IT-Support Technician och Help desk</Card.Title>
                        <Card.Text className="myCardText">
                        Module-based training containing Microsoft 365, networks and troubleshooting in mixed systems. Environments/Tools: AZ-900 Azure Fundamentals, MS-900: 365 Fundamentals Cloud, SC-900 Fundamentals Security, MS-500: 365 Security Administrator, MD-102: Endpoint Administrator, MS-700 Teams Administrator, Cisco Networking Basics, Virtualization & Hyper-V, AZ-800 Server 2022, Information Security, PowerShell.
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">completion date: 2024-05-31</h5>
                            <p className="projectTags myCardTags"><a className="myIcons" href="https://verify.trueoriginal.com/84BBA250-DA0D-B8A2-A4D9-66B4EA4CE0DC/?ref=direct-copy" target="_blank" rel="noreferrer"><em>IT-Support Technician och Help desk</em></a></p>
                            <p className="certImg"><a href="https://verify.trueoriginal.com/84BBA250-DA0D-B8A2-A4D9-66B4EA4CE0DC/?ref=direct-copy" target="_blank" rel="noreferrer"><img alt="Certificate" src={itTechSup} /></a> </p>
                        </Card.Text>
                        <br></br>
                    </Card.Body>
                </Card>    
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    {/* <Card.Img variant="top" src={az900} /> */}
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">.NET (C# ASP.NET Core MVC)</Card.Title>
                        <Card.Text className="myCardText">
                        Throughout the course I have gained a good understanding of the underlying pillars of OOP and C# as a language. The projects in the course have given me a good understanding of ASP .NET Core framework and Visual Studio. I am now able to build full stack web applications using C# and ASP .NET Core Framework including Entity framework and MySQL. When building the project we followed the SCRUM framework.
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">completion date: 2021-02-15</h5>
                            <p className="projectTags myCardTags"><em>.NET (C# ASP.NET Core MVC)</em></p>
                            <p className="certImg"><img alt="Certificate" src={lexiconDotNet} /> </p>
                        </Card.Text>
                        <br></br>
                    </Card.Body>
                </Card>    
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    {/* <Card.Img variant="top" src={az900} /> */}
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">AZ-900: Microsoft Azure Fundamentals</Card.Title>
                        <Card.Text className="myCardText">
                        Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">completion date: 2021-02-03</h5>
                            <p className="projectTags myCardTags"><a className="myIcons" href="https://www.credly.com/badges/b8458211-2f50-431e-a982-dc3be39686a9/public_url" target="_blank" rel="noreferrer"><em>Microsoft Certified: Azure Fundamentals</em></a></p>
                            <p className="certImg"><a href="https://www.credly.com/badges/b8458211-2f50-431e-a982-dc3be39686a9/public_url" target="_blank" rel="noreferrer"><img alt="Certificate" src={az900} /></a> </p>
                        </Card.Text>
                        <br></br>
                    </Card.Body>
                </Card>    
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">MS-900: Microsoft 365 Fundamentals</Card.Title>
                        <Card.Text className="myCardText">
                        Earning the Microsoft 365 Fundamentals certification demonstrates an understanding of the options available in Microsoft 365 and the benefits of adopting cloud services, the Software as a Service (SaaS) cloud model, and implementing Microsoft 365 cloud service.
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">completion date: 2024-02-19</h5>
                            <p className="projectTags myCardTags"><a className="myIcons" href="https://www.credly.com/badges/8215931d-b052-4629-96ab-933c31a53465/public_url" target="_blank" rel="noreferrer"><em>Microsoft 365 Certified: Fundamentals</em></a></p>
                            <p className="certImg"><a href="https://www.credly.com/badges/8215931d-b052-4629-96ab-933c31a53465/public_url" target="_blank" rel="noreferrer"><img alt="Certificate" src={ms900} /></a> </p>
                        </Card.Text>
                        <br></br>
                    </Card.Body>
                </Card>    
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">SC-900: Security, Compliance, and Identity Fundamentals</Card.Title>
                        <Card.Text className="myCardText">
                        Earners of the Security, Compliance, and Identity Fundamentals demonstrate a functional understanding of security, compliance, and identity (SCI) across cloud-based and related Microsoft services.
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">completion date: 2024-04-02</h5>
                            <p className="projectTags myCardTags"><a className="myIcons" href="https://www.credly.com/badges/5c27354a-ce19-48b5-9550-e98c7b7f0289/public_url" target="_blank" rel="noreferrer"><em>Microsoft Certified: Security, Compliance, and Identity Fundamentals</em></a></p>
                            <p className="certImg"><a href="https://www.credly.com/badges/5c27354a-ce19-48b5-9550-e98c7b7f0289/public_url" target="_blank" rel="noreferrer"><img alt="Certificate" src={sc900} /></a> </p>
                        </Card.Text>
                        <br></br>
                    </Card.Body>
                </Card>    
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">Cisco: Introduction to Cybersecurity</Card.Title>
                        <Card.Text className="myCardText">
                        Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course. The holder of this student-level credential has introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing profession. They understand vulnerabilities and threat detection and defense. They also have insight into opportunities available with pursuing cybersecurity certifications.
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">completion date: 2024-04-30</h5>
                            <p className="projectTags myCardTags"><a className="myIcons" href="https://www.credly.com/badges/5a0c63d7-e0d6-4ee2-80be-7e38a3cd356d/public_url" target="_blank" rel="noreferrer"><em>Cisco: Introduction to Cybersecurity</em></a></p>
                            <p className="certImg"><a href="https://www.credly.com/badges/5a0c63d7-e0d6-4ee2-80be-7e38a3cd356d/public_url" target="_blank" rel="noreferrer"><img alt="Certificate" src={networkingBasics} /></a> </p>
                        </Card.Text>
                        <br></br>
                    </Card.Body>
                </Card>    
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">Cisco: Networking Basics</Card.Title>
                        <Card.Text className="myCardText">
                        Cisco verifies the earner of this badge successfully completed the Networking Basics course and achieved this student level credential. Earner has knowledge of the types of networks, how they work, how devices send and receive data, the types of network cabling, how IP addresses find information on the Internet, how transport and applications operate, and has practiced building a home wireless network. Participated in up to 13 Cisco Packet Tracer activities.
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">completion date: 2024-02-19</h5>
                            <p className="projectTags myCardTags"><a className="myIcons" href="https://www.credly.com/badges/b88a3e5b-4afc-4641-9e02-bddf63085865/public_url" target="_blank" rel="noreferrer"><em>Cisco: Networking Basics</em></a></p>
                            <p className="certImg"><a href="https://www.credly.com/badges/b88a3e5b-4afc-4641-9e02-bddf63085865/public_url" target="_blank" rel="noreferrer"><img alt="Certificate" src={networkingBasics} /></a> </p>
                        </Card.Text>
                        <br></br>
                    </Card.Body>
                </Card>    
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '100%' }}>
                    <Card.Body className="projectText">
                        <Card.Title className="myCardTitle">ITIL 4 Foundation, Certificate in IT Service Management	</Card.Title>
                        <Card.Text className="myCardText">
                        Cisco verifies the earner of this badge successfully completed the Networking Basics course and achieved this student level credential. Earner has knowledge of the types of networks, how they work, how devices send and receive data, the types of network cabling, how IP addresses find information on the Internet, how transport and applications operate, and has practiced building a home wireless network. Participated in up to 13 Cisco Packet Tracer activities.
                        </Card.Text>
                        <Card.Text>
                            <h5 className="myCardHeader">completion date: 2024-04-17</h5>
                            <p className="projectTags myCardTags"><em>Cisco: Networking Basics</em></p>
                            <p className="certImg"><img alt="Certificate" src={ITIL4Smaller} /> </p>
                        </Card.Text>
                        <br></br>
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