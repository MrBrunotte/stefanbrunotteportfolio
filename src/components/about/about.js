import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import jag from "../../images/jag.png";

import "./about.css";

const tradingJournalCaseStudyUrl =
  "https://trading-journal-case-study.netlify.app/";

export default function About() {
  return (
    <main className="aboutPage">
      <Container className="aboutContainer">
        {/* INTRO */}
        <section className="aboutHero">
          <Row className="align-items-center g-5">
            <Col lg={4} md={12}>
              <div className="aboutPhotoFrame">
                <img className="aboutPhoto" src={jag} alt="Stefan Brunotte" />

                <div className="aboutPhotoMeta">
                  <p className="aboutPhotoLabel">BASED IN</p>
                  <p className="aboutPhotoValue">Stockholm, Sweden</p>
                </div>
              </div>
            </Col>

            <Col lg={8} md={12}>
              <div className="aboutIntro">
                <p className="aboutEyebrow">ABOUT ME</p>

                <h1>
                  Technical support, system understanding and practical problem
                  solving
                </h1>

                <p className="aboutLead">
                  I&apos;m Stefan Brunotte, an IT professional based in
                  Stockholm with experience across technical support, Microsoft
                  365, identity, client management and software development.
                </p>

                <p className="aboutText">
                  I currently work with technical IT support and administration
                  in areas such as Microsoft 365, Entra ID, Active Directory,
                  Intune, Outlook, OneDrive, MFA, LAPS, Configuration Manager
                  and related user and system issues.
                </p>

                <p className="aboutText">
                  My background also includes software development and technical
                  support roles where I have worked between users, support teams
                  and developers. I enjoy understanding how systems behave,
                  tracing technical problems and turning unclear issues into
                  structured solutions.
                </p>

                <div className="aboutTechRow">
                  <span>Microsoft 365</span>
                  <span>Entra ID</span>
                  <span>Intune</span>
                  <span>Active Directory</span>
                  <span>SQL</span>
                  <span>Troubleshooting</span>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <div className="aboutSeparator" />

        {/* WHAT I BRING */}
        <section className="aboutSection">
          <div className="aboutSectionHeader">
            <p className="aboutSectionLabel">WHAT I BRING</p>

            <h2>A combination of support experience and technical depth</h2>

            <p>
              My strongest value is not one isolated technology. It is the
              ability to understand technical problems from both the user and
              system perspective.
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <article className="aboutCard">
                <span className="aboutCardNumber">01</span>
                <p className="aboutCardLabel">SUPPORT</p>

                <h3>User-focused troubleshooting</h3>

                <p>
                  Experience helping users with technical issues involving
                  Microsoft 365, authentication, devices, permissions and
                  everyday application problems.
                </p>
              </article>
            </Col>

            <Col lg={4} md={6}>
              <article className="aboutCard">
                <span className="aboutCardNumber">02</span>
                <p className="aboutCardLabel">SYSTEMS</p>

                <h3>Understanding the underlying problem</h3>

                <p>
                  I prefer to understand why something fails rather than only
                  applying a temporary fix. That often means following the issue
                  across systems, configuration and workflow.
                </p>
              </article>
            </Col>

            <Col lg={4} md={12}>
              <article className="aboutCard">
                <span className="aboutCardNumber">03</span>
                <p className="aboutCardLabel">COLLABORATION</p>

                <h3>Working between users and developers</h3>

                <p>
                  My development background helps me communicate technical
                  issues clearly, test solutions and work effectively between
                  support, users and development teams.
                </p>
              </article>
            </Col>
          </Row>
        </section>

        <div className="aboutSeparator" />

        {/* APPROACH */}
        <section className="aboutSection">
          <div className="aboutSplit">
            <div>
              <p className="aboutSectionLabel">HOW I WORK</p>

              <h2>Curious, pragmatic and structured</h2>

              <p className="aboutText">
                I am a practical problem solver who enjoys learning new systems
                and understanding how different parts of a workflow connect.
              </p>

              <p className="aboutText">
                I value clear communication, ownership and maintainable
                solutions. When something does not work as expected, I prefer to
                reproduce the problem, isolate the cause, verify the solution
                and document what was learned.
              </p>
            </div>

            <div className="aboutQuote">
              <p className="aboutQuoteLabel">WORKING STYLE</p>

              <blockquote>
                “Understand the problem, trace the cause, test the solution and
                leave the system clearer than you found it.”
              </blockquote>
            </div>
          </div>
        </section>

        <div className="aboutSeparator" />

        {/* PROJECT */}
        <section className="aboutSection">
          <div className="aboutProject">
            <div>
              <p className="aboutSectionLabel">TECHNICAL PROJECT</p>

              <h2>MrBrunotte&apos;s Trading Journal</h2>

              <p className="aboutText">
                Alongside my professional work, I develop a local-first desktop
                application used as an ongoing project for product requirements,
                workflow design, data modelling, testing and technical problem
                solving.
              </p>

              <p className="aboutText">
                I own the product requirements, workflows, system behavior,
                prioritization, testing, validation and development decisions.
                ChatGPT is used as the coding implementation layer.
              </p>
            </div>

            <div className="aboutProjectActions">
              <a
                href={tradingJournalCaseStudyUrl}
                target="_blank"
                rel="noreferrer"
                className="aboutPrimaryButton"
              >
                View Trading Journal Case Study
                <FaExternalLinkAlt />
              </a>

              <Nav.Link as={Link} to="/projects" className="aboutInlineLink">
                View all projects
                <FaArrowRight />
              </Nav.Link>
            </div>
          </div>
        </section>

        <div className="aboutSeparator" />

        {/* CONTACT */}
        <section className="aboutSection aboutContactSection">
          <div>
            <p className="aboutSectionLabel">LET&apos;S CONNECT</p>

            <h2>
              Interested in Application Support, Technical Support and System
              Support opportunities
            </h2>

            <p className="aboutText">
              I am particularly interested in roles where technical
              troubleshooting, application knowledge and collaboration between
              users, support teams and development teams meet.
            </p>
          </div>

          <div className="aboutContactActions">
            <Nav.Link as={Link} to="/contact" className="aboutPrimaryButton">
              Contact me
              <FaEnvelope />
            </Nav.Link>

            <a href="mailto:mrbrunotte@gmail.com" className="aboutInlineLink">
              mrbrunotte@gmail.com
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}
