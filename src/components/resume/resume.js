import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

import "./resume.css";

export default function Resume() {
  const englishCv = `${process.env.PUBLIC_URL}/Stefan_Brunotte_CV_English.pdf`;
  const swedishCv = `${process.env.PUBLIC_URL}/Stefan_Brunotte_CV_Svenska.pdf`;

  return (
    <main className="resumePage">
      <Container className="resumeContainer">
        {/* HERO */}
        <section className="resumeHero">
          <p className="resumeEyebrow">RESUME / CV</p>

          <h1>Professional background and technical experience</h1>

          <p className="resumeLead">
            My CV summarizes my experience in technical support, application
            troubleshooting, Microsoft technologies, system development and
            customer-facing roles.
          </p>

          <div className="resumeLanguageGroups">
            <div className="resumeLanguageGroup">
              <p className="resumeLanguageLabel">ENGLISH CV</p>

              <div className="resumeActions">
                <a
                  href={englishCv}
                  download="Stefan_Brunotte_CV_English.pdf"
                  className="resumePrimaryButton"
                >
                  <FaDownload />
                  Download English CV
                </a>

                <a
                  href={englishCv}
                  target="_blank"
                  rel="noreferrer"
                  className="resumeSecondaryButton"
                >
                  <FaExternalLinkAlt />
                  Open English CV
                </a>
              </div>
            </div>

            <div className="resumeLanguageGroup">
              <p className="resumeLanguageLabel">SWEDISH CV</p>

              <div className="resumeActions">
                <a
                  href={swedishCv}
                  download="Stefan_Brunotte_CV_Svenska.pdf"
                  className="resumePrimaryButton"
                >
                  <FaDownload />
                  Download Swedish CV
                </a>

                <a
                  href={swedishCv}
                  target="_blank"
                  rel="noreferrer"
                  className="resumeSecondaryButton"
                >
                  <FaExternalLinkAlt />
                  Open Swedish CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="resumeSeparator" />

        {/* SUMMARY */}
        <section className="resumeSection">
          <div className="resumeSectionHeader">
            <p className="resumeSectionLabel">PROFILE</p>

            <h2>Technical support with broader system understanding</h2>

            <p>
              I am currently focused on Application Support, Technical Support,
              System Support and Application Specialist roles where technical
              troubleshooting, application knowledge and collaboration are
              central.
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <article className="resumeFocusCard">
                <span className="resumeCardNumber">01</span>

                <p className="resumeCardLabel">SUPPORT</p>

                <h3>Hands-on technical troubleshooting</h3>

                <p>
                  Experience with Microsoft 365, identity, user support,
                  permissions and day-to-day technical issue resolution.
                </p>
              </article>
            </Col>

            <Col lg={4} md={6}>
              <article className="resumeFocusCard">
                <span className="resumeCardNumber">02</span>

                <p className="resumeCardLabel">SYSTEMS</p>

                <h3>Application and system understanding</h3>

                <p>
                  Development and database experience helps me troubleshoot
                  applications and communicate effectively with technical teams.
                </p>
              </article>
            </Col>

            <Col lg={4} md={12}>
              <article className="resumeFocusCard">
                <span className="resumeCardNumber">03</span>

                <p className="resumeCardLabel">COLLABORATION</p>

                <h3>Users, support and development</h3>

                <p>
                  My background combines technical work with strong customer
                  communication and cross-team collaboration.
                </p>
              </article>
            </Col>
          </Row>
        </section>

        <div className="resumeSeparator" />

        <div className="resumeSeparator" />

        {/* CLOSING */}
        <section className="resumeClosing">
          <p className="resumeSectionLabel">CONTACT</p>

          <h2>Interested in my background?</h2>

          <p>
            You can reach me through the <Link to="/contact">contact page</Link>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/stefanbrunotte/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            if you would like to discuss a role or opportunity.
          </p>
        </section>
      </Container>
    </main>
  );
}
