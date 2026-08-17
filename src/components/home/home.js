import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaArrowRight,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import worldofshape from "../myProjects/images/worldofshape.jpg";
import foodictionary from "../myProjects/images/foodictionary.jpg";
import vacationExplorer from "../myProjects/images/vacationexplorer.jpg";
import mvcPortfolio from "../myProjects/images/mvcPortfolio.jpg";
import teacherOverview from "../myProjects/images/teacherOverview.jpeg";

import "./home.css";

const tradingJournalCaseStudyUrl =
  "https://trading-journal-case-study.netlify.app/";

const tradingJournalPreview =
  "https://trading-journal-case-study.netlify.app/og/trading-journal-case-study.png";

const projects = [
  {
    title: "World of Shape",
    description:
      "Full-stack training project focused on frontend structure, user flows and web development.",
    image: worldofshape,
    github: "https://github.com/MrBrunotte/worldofshape",
  },
  {
    title: "Vacation Explorer",
    description:
      "Frontend project for finding hotels, restaurants and destinations through a simple searchable interface.",
    image: vacationExplorer,
    github: "https://github.com/MrBrunotte/Vacation-Explorer",
    live: "https://mrbrunotte.github.io/Vacation-Explorer/",
  },
  {
    title: "FOODictionary",
    description:
      "Web application project focused on recipes, data handling and user interaction.",
    image: foodictionary,
    github: "https://github.com/MrBrunotte/foodictionary",
  },
  {
    title: "Portfolio .NET MVC",
    description:
      "Earlier .NET MVC portfolio project demonstrating backend and frontend development fundamentals.",
    image: mvcPortfolio,
    github: "https://github.com/MrBrunotte/PortfolioMVC",
  },
  {
    title: "LMS - MVC .NET Core",
    description:
      "Learning management system project built during .NET training, covering structured application development.",
    image: teacherOverview,
    github: "https://github.com/MrBrunotte/LMS",
  },
];

export default function Home() {
  return (
    <main className="portfolioHome">
      <Container className="portfolioContainer">
        {/* HERO */}
        <section className="portfolioHero">
          <p className="portfolioEyebrow">
            APPLICATION SUPPORT · TECHNICAL SUPPORT · SYSTEM SUPPORT
          </p>

          <h1 className="portfolioHeroTitle">Stefan Brunotte</h1>

          <h2 className="portfolioHeroSubtitle">
            Looking for my next step in Application Support, Technical Support
            or System Support.
          </h2>

          <p className="portfolioHeroText">
            I currently work with technical IT support and troubleshooting
            across Microsoft 365, identity, client management, permissions and
            user-facing technical issues.
          </p>

          <p className="portfolioHeroText">
            My background also includes software development and a technical
            support role where I worked between first-line support and
            developers, giving me experience from both the user-facing and
            technical sides of IT.
          </p>

          <p className="portfolioHeroText">
            I am now looking for a role where I can move closer to applications
            and systems, take greater technical responsibility and work with
            deeper troubleshooting, system administration and problem solving. I
            am particularly interested in environments where support works
            closely with development, product teams or other technical
            specialists.
          </p>

          <div className="portfolioTechRow">
            <span>Application Support</span>
            <span>Microsoft 365</span>
            <span>Entra ID</span>
            <span>Troubleshooting</span>
            <span>System Support</span>
            <span>SQL</span>
          </div>

          <div className="portfolioHeroActions">
            <a
              href={tradingJournalCaseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="portfolioPrimaryButton"
            >
              View Trading Journal Case Study
              <FaExternalLinkAlt />
            </a>

            <Nav.Link
              as={Link}
              to="/contact"
              className="portfolioSecondaryButton"
            >
              Contact me
              <FaEnvelope />
            </Nav.Link>
          </div>
        </section>

        <div className="portfolioSeparator" />

        {/* CURRENT FOCUS */}
        <section className="portfolioSection">
          <div className="portfolioSectionHeader">
            <p className="portfolioSectionLabel">WHAT I BRING</p>

            <h2>Support experience with a technical perspective</h2>

            <p>
              My background combines user-facing support, system troubleshooting
              and previous development experience.
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <article className="portfolioInfoCard">
                <span className="portfolioCardNumber">01</span>
                <p className="portfolioCardLabel">SUPPORT</p>

                <h3>Technical troubleshooting</h3>

                <p>
                  Hands-on support across Microsoft 365, identity,
                  authentication, permissions and client environments, with a
                  focus on understanding the cause of the problem rather than
                  only resolving the immediate symptom.
                </p>
              </article>
            </Col>

            <Col lg={4} md={6}>
              <article className="portfolioInfoCard">
                <span className="portfolioCardNumber">02</span>
                <p className="portfolioCardLabel">SYSTEMS</p>

                <h3>System understanding</h3>

                <p>
                  I like tracing issues across users, permissions, applications
                  and workflows to understand where a problem originates and
                  what needs to change.
                </p>
              </article>
            </Col>

            <Col lg={4} md={12}>
              <article className="portfolioInfoCard">
                <span className="portfolioCardNumber">03</span>
                <p className="portfolioCardLabel">DEVELOPMENT</p>

                <h3>Development perspective</h3>

                <p>
                  Previous development experience helps me communicate with
                  developers, understand technical constraints, test solutions
                  and bridge the gap between users, support and development
                  teams.
                </p>
              </article>
            </Col>
          </Row>
        </section>

        <div className="portfolioSeparator" />

        {/* FEATURED PROJECT */}
        <section className="portfolioSection">
          <div className="portfolioSectionHeader">
            <p className="portfolioSectionLabel">FEATURED PROJECT</p>

            <h2>MrBrunotte&apos;s Trading Journal</h2>

            <p>
              An ongoing local-first desktop application used as a practical
              project for product requirements, data modelling, workflow design,
              testing and system thinking.
            </p>
          </div>

          <article className="portfolioFeaturedProject">
            <div className="portfolioFeaturedImage">
              <img
                src={tradingJournalPreview}
                alt="MrBrunotte's Trading Journal case study"
              />
            </div>

            <div className="portfolioFeaturedContent">
              <p className="portfolioCardLabel">PUBLIC CASE STUDY</p>

              <h3>
                From imported executions to structured review data and reusable
                behavioral history
              </h3>

              <p>
                I own the product requirements, workflows, system behavior,
                prioritization, testing, validation and development decisions.
                ChatGPT is used as the coding implementation layer.
              </p>

              <div className="portfolioTechRow portfolioTechRowCompact">
                <span>React</span>
                <span>Tauri</span>
                <span>SQLite</span>
                <span>JavaScript</span>
                <span>Data modelling</span>
              </div>

              <a
                href={tradingJournalCaseStudyUrl}
                target="_blank"
                rel="noreferrer"
                className="portfolioInlineLink"
              >
                Explore the case study
                <FaArrowRight />
              </a>
            </div>
          </article>
        </section>

        <div className="portfolioSeparator" />

        {/* SELECTED PROJECTS */}
        <section className="portfolioSection">
          <div className="portfolioSectionHeader portfolioSectionHeaderRow">
            <div>
              <p className="portfolioSectionLabel">SELECTED PROJECTS</p>
              <h2>Earlier development work</h2>
              <p>
                Selected projects from my software development and web
                development background.
              </p>
            </div>

            <Nav.Link
              as={Link}
              to="/projects"
              className="portfolioInlineLink portfolioAllProjectsLink"
            >
              View all projects
              <FaArrowRight />
            </Nav.Link>
          </div>

          <Row className="g-4">
            {projects.map((project) => (
              <Col key={project.title} lg={4} md={6} xs={12}>
                <Card className="portfolioProjectCard">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    className="portfolioProjectImage"
                  />

                  <Card.Body className="portfolioProjectBody">
                    <p className="portfolioCardLabel">PROJECT</p>

                    <Card.Title className="portfolioProjectTitle">
                      {project.title}
                    </Card.Title>

                    <Card.Text className="portfolioProjectDescription">
                      {project.description}
                    </Card.Text>

                    <div className="portfolioProjectLinks">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <FaGithub />
                        GitHub
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.title}`}
                        >
                          <FaExternalLinkAlt />
                          Live
                        </a>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <div className="portfolioSeparator" />

        {/* CERTIFICATES / CTA */}
        <section className="portfolioSection portfolioBottomGrid">
          <div className="portfolioBottomCard">
            <p className="portfolioSectionLabel">CERTIFICATIONS</p>

            <h2>Microsoft, IT support and development</h2>

            <p>
              Certifications and education covering Microsoft 365, security,
              identity, Azure, ITIL and software development.
            </p>

            <Nav.Link
              as={Link}
              to="/certificates"
              className="portfolioInlineLink"
            >
              View certificates & diplomas
              <FaArrowRight />
            </Nav.Link>
          </div>

          <div className="portfolioBottomCard">
            <p className="portfolioSectionLabel">CONTACT</p>

            <h2>Let&apos;s talk</h2>

            <p>
              Interested in Application Support, Technical Support, System
              Support and Application Specialist opportunities.
            </p>

            <a
              href="mailto:mrbrunotte@gmail.com"
              className="portfolioInlineLink"
            >
              mrbrunotte@gmail.com
              <FaEnvelope />
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}
