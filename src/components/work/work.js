import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import MyWorkData from "../../myWork.json";

import "./work.css";

const primaryWorkIds = [9, 7, 6, 5];
const earlierWorkIds = [4, 3, 2, 1];

function parseTags(tags = []) {
  return tags
    .flatMap((tag) => String(tag).split(","))
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function getWorkByIds(ids) {
  return ids
    .map((id) => MyWorkData.find((work) => work.id === id))
    .filter(Boolean);
}

function formatDate(date) {
  if (!date) return "";

  if (date.toLowerCase().includes("ongoing")) {
    return date;
  }

  const [year, month, day] = date.split("-");

  if (!year || !month || !day) {
    return date;
  }

  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
  }).format(new Date(Number(year), Number(month) - 1, Number(day)));
}

function WorkCard({ work, index, featured = false }) {
  return (
    <article className={featured ? "workCard workCardFeatured" : "workCard"}>
      <div className="workCardTop">
        <div>
          <p className="workCardLabel">
            {featured ? "CURRENT EXPERIENCE" : "PROFESSIONAL EXPERIENCE"}
          </p>

          <h3>{work.company.replace(" - Ongoing", "")}</h3>

          <p className="workRole">{work.workDescription}</p>
        </div>

        <span className="workCardNumber">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="workDates">
        <span>{formatDate(work.startDate)}</span>
        <span className="workDateLine" />
        <span>{formatDate(work.endDate)}</span>
      </div>

      <p className="workDescription">{work.description}</p>

      {work.gainedExperience && (
        <div className="workExperienceBlock">
          <p className="workMiniLabel">EXPERIENCE GAINED</p>
          <p>{work.gainedExperience}</p>
        </div>
      )}

      <div className="workTags">
        {parseTags(work.tags).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default function Work() {
  const primaryWork = getWorkByIds(primaryWorkIds);
  const earlierWork = getWorkByIds(earlierWorkIds);

  const currentWork = primaryWork[0];
  const technicalHistory = primaryWork.slice(1);

  return (
    <main className="workPage">
      <Container className="workContainer">
        {/* INTRO */}
        <section className="workHero">
          <p className="workEyebrow">PROFESSIONAL EXPERIENCE</p>

          <h1>
            Technical support, application knowledge and system understanding
          </h1>

          <p className="workLead">
            My professional background combines hands-on technical support,
            troubleshooting, software development and customer-facing work. The
            common thread is solving practical problems, understanding user
            needs and working effectively across technical and non-technical
            environments.
          </p>
        </section>

        <div className="workSeparator" />

        {/* CURRENT */}
        <section className="workSection">
          <div className="workSectionHeader">
            <p className="workSectionLabel">CURRENT ROLE</p>

            <h2>Karolinska Institutet</h2>

            <p>
              My current role combines technical support, Microsoft 365,
              identity, endpoint-related issues and day-to-day administration in
              a large user environment.
            </p>
          </div>

          {currentWork && <WorkCard work={currentWork} index={0} featured />}
        </section>

        <div className="workSeparator" />

        {/* TECHNICAL HISTORY */}
        <section className="workSection">
          <div className="workSectionHeader">
            <p className="workSectionLabel">TECHNICAL EXPERIENCE</p>

            <h2>Support, development and system-oriented roles</h2>

            <p>
              These roles built the technical foundation behind my current focus
              on Application Support, Technical Support and System Support.
            </p>
          </div>

          <Row className="g-4">
            {technicalHistory.map((work, index) => (
              <Col key={work.id} lg={4} md={6} xs={12}>
                <WorkCard work={work} index={index + 1} />
              </Col>
            ))}
          </Row>
        </section>

        <div className="workSeparator" />

        {/* HOW EXPERIENCE CONNECTS */}
        <section className="workSection">
          <div className="workSectionHeader">
            <p className="workSectionLabel">WHAT CONNECTS MY EXPERIENCE</p>

            <h2>More than a list of job titles</h2>

            <p>
              My background has consistently required problem solving,
              communication, ownership and the ability to understand what people
              actually need.
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <article className="workStrengthCard">
                <span className="workCardNumber">01</span>
                <p className="workCardLabel">TROUBLESHOOTING</p>

                <h3>Finding the actual cause</h3>

                <p>
                  I prefer to reproduce issues, understand context and trace
                  technical problems rather than only applying temporary fixes.
                </p>
              </article>
            </Col>

            <Col lg={4} md={6}>
              <article className="workStrengthCard">
                <span className="workCardNumber">02</span>
                <p className="workCardLabel">COLLABORATION</p>

                <h3>Connecting users and technical teams</h3>

                <p>
                  My support and development experience helps me communicate
                  clearly between end users, support functions and developers.
                </p>
              </article>
            </Col>

            <Col lg={4} md={12}>
              <article className="workStrengthCard">
                <span className="workCardNumber">03</span>
                <p className="workCardLabel">CUSTOMER FOCUS</p>

                <h3>Understanding the person behind the issue</h3>

                <p>
                  Earlier customer-facing and leadership roles gave me a strong
                  foundation in communication, expectations and ownership.
                </p>
              </article>
            </Col>
          </Row>
        </section>

        <div className="workSeparator" />

        {/* EARLIER EXPERIENCE */}
        <section className="workSection">
          <div className="workSectionHeader">
            <p className="workSectionLabel">EARLIER EXPERIENCE</p>

            <h2>Customer-facing and leadership background</h2>

            <p>
              Earlier roles outside IT are still relevant because they shaped
              how I communicate, take responsibility and work with different
              people and situations.
            </p>
          </div>

          <div className="workTimeline">
            {earlierWork.map((work, index) => (
              <div key={work.id} className="workTimelineItem">
                <div className="workTimelineMarker">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="workTimelineContent">
                  <div className="workTimelineHeading">
                    <div>
                      <p className="workCardLabel">{work.workDescription}</p>
                      <h3>{work.company}</h3>
                    </div>

                    <p className="workTimelineDates">
                      {formatDate(work.startDate)} – {formatDate(work.endDate)}
                    </p>
                  </div>

                  <p>{work.description}</p>

                  <div className="workTags">
                    {parseTags(work.tags).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="workSeparator" />

        {/* CLOSING */}
        <section className="workClosing">
          <p className="workSectionLabel">CURRENT DIRECTION</p>

          <h2>Application Support, Technical Support and System Support</h2>

          <p>
            I am particularly interested in roles where technical
            troubleshooting, application knowledge and collaboration between
            users, support teams and development teams come together.
          </p>
        </section>
      </Container>
    </main>
  );
}
