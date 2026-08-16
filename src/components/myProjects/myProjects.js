import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import worldofshape from "./images/worldofshape.jpg";
import vacationexplorer from "./images/vacationexplorer.jpg";
import foodictionary from "./images/foodictionary.jpg";
import mvcPortfolio from "./images/mvcPortfolio.jpg";
import gisysArbProv from "./images/gisysArbProv.jpg";
import teacherOverview from "./images/teacherOverview.jpeg";
import reactPortfolio from "../../images/Home_img.png";

import "./myProjects.css";

const tradingJournalCaseStudyUrl =
  "https://trading-journal-case-study.netlify.app/";

const tradingJournalPreview =
  "https://trading-journal-case-study.netlify.app/og/trading-journal-case-study.png";

const projects = [
  {
    title: "Arbetsprov Bonus Calculation",
    category: "TYPESCRIPT / BUSINESS LOGIC",
    description:
      "A technical work sample for calculating consultant bonuses based on company results, individual hourly contribution and a loyalty factor. The project focuses on calculation logic, structured data handling and implementation of defined business rules.",
    technologies: ["TypeScript", "Business Logic", "Data Handling", "Git"],
    image: gisysArbProv,
    github: "https://github.com/MrBrunotte/Arbetsprov-Bonus-Calculation",
  },
  {
    title: "LMS - MVC .NET Core",
    category: ".NET / FULL STACK",
    description:
      "A Learning Management System developed as a full-stack training project using ASP.NET Core MVC. The application includes structured data persistence, CRUD functionality and a traditional MVC architecture.",
    technologies: [
      "C#",
      "ASP.NET Core",
      "Entity Framework",
      "SQL",
      "JavaScript",
    ],
    image: teacherOverview,
    github: "https://github.com/MrBrunotte/LMS",
  },
  {
    title: "Portfolio ASP.NET MVC",
    category: ".NET / MVC",
    description:
      "An earlier portfolio application built with C# and ASP.NET Core MVC, including authentication, database-backed content and deployment experience with Microsoft Azure.",
    technologies: ["C#", "ASP.NET MVC", "Azure", "SQL", "HTML", "CSS"],
    image: mvcPortfolio,
    github: "https://github.com/MrBrunotte/PortfolioMVC",
  },
  {
    title: "World of Shape",
    category: "FULL STACK WEB",
    description:
      "A full-stack training project built with Django using a model-template-view architecture. The project included user-facing flows, database-backed functionality, responsive design and payment integration.",
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "SQLite",
      "Stripe",
      "Bootstrap",
    ],
    image: worldofshape,
    github: "https://github.com/MrBrunotte/worldofshape",
  },
  {
    title: "Vacation Explorer",
    category: "FRONTEND / API",
    description:
      "A frontend project designed to help users discover hotels, restaurants and places in a selected area using map and places APIs.",
    technologies: [
      "JavaScript",
      "Maps API",
      "Places API",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    image: vacationexplorer,
    github: "https://github.com/MrBrunotte/Vacation-Explorer",
    live: "https://mrbrunotte.github.io/Vacation-Explorer/",
  },
  {
    title: "FOODictionary",
    category: "FULL STACK WEB",
    description:
      "A personalized cookbook application where registered users can create, edit and organize recipes while visitors can browse and search available content.",
    technologies: ["Python", "Flask", "MongoDB", "JavaScript", "HTML", "CSS"],
    image: foodictionary,
    github: "https://github.com/MrBrunotte/foodictionary",
  },
  {
    title: "React Portfolio",
    category: "FRONTEND",
    description:
      "This portfolio project was originally created as a React-based presentation of my development work, professional background and certifications. It is now being redesigned around my current technical support and systems profile.",
    technologies: [
      "React",
      "JavaScript",
      "React Bootstrap",
      "CSS",
      "GitHub Pages",
    ],
    image: reactPortfolio,
    github: "https://github.com/MrBrunotte/stefanbrunotteportfolio",
    live: "https://mrbrunotte.github.io/stefanbrunotteportfolio/",
  },
];

export default function MyProjects() {
  return (
    <main className="projectsPage">
      <Container className="projectsContainer">
        {/* PAGE INTRO */}
        <section className="projectsHero">
          <p className="projectsEyebrow">TECHNICAL PROJECTS</p>

          <h1>Projects that show how I approach technical problems</h1>

          <p className="projectsLead">
            My project background spans frontend development, full-stack web
            applications, .NET, APIs, business logic and an actively developed
            desktop application. Together they show how my technical experience
            has developed from software projects toward broader system,
            application and troubleshooting work.
          </p>

          <a
            href="https://github.com/MrBrunotte"
            target="_blank"
            rel="noreferrer"
            className="projectsGithubLink"
          >
            <FaGithub />
            View GitHub profile
            <FaArrowRight />
          </a>
        </section>

        <div className="projectsSeparator" />

        {/* FEATURED PROJECT */}
        <section className="projectsSection">
          <div className="projectsSectionHeader">
            <p className="projectsSectionLabel">FEATURED PROJECT</p>

            <h2>MrBrunotte&apos;s Trading Journal</h2>

            <p>
              My strongest current technical project and the best example of how
              I work with requirements, workflows, data modelling, testing,
              troubleshooting and iterative system development.
            </p>
          </div>

          <article className="projectsFeatured">
            <div className="projectsFeaturedImage">
              <img
                src={tradingJournalPreview}
                alt="MrBrunotte's Trading Journal public case study"
              />
            </div>

            <div className="projectsFeaturedContent">
              <p className="projectsCardLabel">PUBLIC CASE STUDY</p>

              <h3>
                A local-first desktop application built around structured
                review, analytics and reusable behavioral history
              </h3>

              <p>
                The application handles imported trading executions, normalized
                data, account-level activity, decision grouping, reviews,
                analytics, screenshots, backup and restore, and rule- and
                data-driven behavioral analysis.
              </p>

              <p>
                I own the product requirements, workflows, system behavior,
                prioritization, testing, validation and development decisions.
                ChatGPT is used as the coding implementation layer.
              </p>

              <div className="projectsTagRow">
                <span>React</span>
                <span>Tauri</span>
                <span>SQLite</span>
                <span>JavaScript</span>
                <span>Data modelling</span>
                <span>Testing</span>
              </div>

              <a
                href={tradingJournalCaseStudyUrl}
                target="_blank"
                rel="noreferrer"
                className="projectsPrimaryLink"
              >
                Explore the case study
                <FaExternalLinkAlt />
              </a>
            </div>
          </article>
        </section>

        <div className="projectsSeparator" />

        {/* DEVELOPMENT BACKGROUND */}
        <section className="projectsSection">
          <div className="projectsSectionHeader">
            <p className="projectsSectionLabel">EARLIER DEVELOPMENT PROJECTS</p>

            <h2>A broader technical foundation</h2>

            <p>
              These projects come from different stages of my development
              background and demonstrate experience with frontend work, backend
              systems, APIs, databases, .NET and business logic.
            </p>
          </div>

          <Row className="g-4">
            {projects.map((project, index) => (
              <Col key={project.title} lg={4} md={6} xs={12}>
                <article className="projectsCard">
                  <div className="projectsCardImageWrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="projectsCardImage"
                    />
                  </div>

                  <div className="projectsCardBody">
                    <div className="projectsCardTop">
                      <p className="projectsCardLabel">{project.category}</p>

                      <span className="projectsCardNumber">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3>{project.title}</h3>

                    <p className="projectsCardDescription">
                      {project.description}
                    </p>

                    <div className="projectsTagRow projectsTagRowCard">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="projectsCardLinks">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub />
                        GitHub
                      </a>

                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <FaExternalLinkAlt />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </section>

        <div className="projectsSeparator" />

        {/* CLOSING */}
        <section className="projectsClosing">
          <div>
            <p className="projectsSectionLabel">CURRENT DIRECTION</p>

            <h2>
              From development projects toward systems and application support
            </h2>

            <p>
              Software development is part of my technical foundation, but my
              current focus is on roles where troubleshooting, application
              knowledge, system understanding and collaboration between users,
              support teams and developers come together.
            </p>
          </div>

          <a
            href="mailto:mrbrunotte@gmail.com"
            className="projectsPrimaryLink projectsClosingLink"
          >
            Contact me
            <FaArrowRight />
          </a>
        </section>
      </Container>
    </main>
  );
}
