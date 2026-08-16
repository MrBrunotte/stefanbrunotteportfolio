import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import MyAcademicData from "../../myAcademics.json";

import "./academics.css";

const technicalTrainingIds = [11, 10, 9, 8, 6];
const developmentEducationIds = [7, 5, 4];
const academicBackgroundIds = [3, 2, 1];

function parseTags(tags = []) {
  return tags
    .flatMap((tag) => String(tag).split(","))
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function getItemsByIds(ids) {
  return ids
    .map((id) => MyAcademicData.find((item) => item.id === id))
    .filter(Boolean);
}

function formatDate(date) {
  if (!date) return "";

  const [year, month, day] = date.split("-");

  if (!year || !month || !day) {
    return date;
  }

  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
  }).format(new Date(Number(year), Number(month) - 1, Number(day)));
}

function EducationCard({ item, index }) {
  return (
    <article className="academicsCard">
      <div className="academicsCardTop">
        <div>
          <p className="academicsCardLabel">{item.school}</p>
          <h3>{item.course}</h3>
        </div>

        <span className="academicsCardNumber">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="academicsDates">
        <span>{formatDate(item.startDate)}</span>
        <span className="academicsDateLine" />
        <span>{formatDate(item.endDate)}</span>
      </div>

      <p className="academicsDescription">{item.description}</p>

      <div className="academicsTags">
        {parseTags(item.tags)
          .slice(0, 8)
          .map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
      </div>
    </article>
  );
}

function AcademicTimelineItem({ item, index }) {
  return (
    <div className="academicsTimelineItem">
      <div className="academicsTimelineMarker">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="academicsTimelineContent">
        <div className="academicsTimelineHeading">
          <div>
            <p className="academicsCardLabel">{item.school}</p>
            <h3>{item.course}</h3>
          </div>

          <p className="academicsTimelineDates">
            {formatDate(item.startDate)} – {formatDate(item.endDate)}
          </p>
        </div>

        <p>{item.description}</p>

        <div className="academicsTags">
          {parseTags(item.tags).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Academics() {
  const technicalTraining = getItemsByIds(technicalTrainingIds);
  const developmentEducation = getItemsByIds(developmentEducationIds);
  const academicBackground = getItemsByIds(academicBackgroundIds);

  return (
    <main className="academicsPage">
      <Container className="academicsContainer">
        {/* HERO */}
        <section className="academicsHero">
          <p className="academicsEyebrow">EDUCATION & TRAINING</p>

          <h1>Technical training backed by a broader academic foundation</h1>

          <p className="academicsLead">
            My education combines IT support, Microsoft technologies, software
            development and formal academic studies. The technical training is
            directly relevant to my current focus on Application Support,
            Technical Support and System Support, while my broader academic
            background adds analytical and business understanding.
          </p>
        </section>

        <div className="academicsSeparator" />

        {/* TECHNICAL TRAINING */}
        <section className="academicsSection">
          <div className="academicsSectionHeader">
            <p className="academicsSectionLabel">TECHNICAL TRAINING</p>

            <h2>Support, Microsoft technologies and IT service management</h2>

            <p>
              Recent training focused on technologies and practices used in
              modern IT support environments, including Microsoft 365, identity,
              endpoint management, security, networking and ITIL.
            </p>
          </div>

          <Row className="g-4">
            {technicalTraining.map((item, index) => (
              <Col key={item.id} lg={4} md={6} xs={12}>
                <EducationCard item={item} index={index} />
              </Col>
            ))}
          </Row>
        </section>

        <div className="academicsSeparator" />

        {/* DEVELOPMENT */}
        <section className="academicsSection">
          <div className="academicsSectionHeader">
            <p className="academicsSectionLabel">SOFTWARE DEVELOPMENT</p>

            <h2>Development knowledge that strengthens system understanding</h2>

            <p>
              My development education gives me a practical understanding of
              application architecture, databases, APIs, frontend and backend
              technologies. That knowledge is particularly useful when
              troubleshooting applications and communicating with development
              teams.
            </p>
          </div>

          <Row className="g-4">
            {developmentEducation.map((item, index) => (
              <Col key={item.id} lg={4} md={6} xs={12}>
                <EducationCard item={item} index={index} />
              </Col>
            ))}
          </Row>
        </section>

        <div className="academicsSeparator" />

        {/* WHY IT MATTERS */}
        <section className="academicsSection">
          <div className="academicsSectionHeader">
            <p className="academicsSectionLabel">TECHNICAL FOUNDATION</p>

            <h2>How the education supports my current direction</h2>

            <p>
              The value is not in individual certificates alone, but in the
              combination of support knowledge, systems understanding,
              development experience and structured problem solving.
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <article className="academicsFocusCard">
                <span className="academicsCardNumber">01</span>

                <p className="academicsCardLabel">SUPPORT</p>

                <h3>Understanding users and environments</h3>

                <p>
                  Training in Microsoft 365, security, networking and ITIL
                  supports structured troubleshooting and day-to-day technical
                  support.
                </p>
              </article>
            </Col>

            <Col lg={4} md={6}>
              <article className="academicsFocusCard">
                <span className="academicsCardNumber">02</span>

                <p className="academicsCardLabel">SYSTEMS</p>

                <h3>Understanding what happens behind the interface</h3>

                <p>
                  Development, databases and cloud fundamentals help me reason
                  about dependencies, data flows and application behavior.
                </p>
              </article>
            </Col>

            <Col lg={4} md={12}>
              <article className="academicsFocusCard">
                <span className="academicsCardNumber">03</span>

                <p className="academicsCardLabel">ANALYSIS</p>

                <h3>Structured and analytical problem solving</h3>

                <p>
                  My academic background in business and finance adds analytical
                  thinking and experience working with complex information.
                </p>
              </article>
            </Col>
          </Row>
        </section>

        <div className="academicsSeparator" />

        {/* ACADEMIC BACKGROUND */}
        <section className="academicsSection">
          <div className="academicsSectionHeader">
            <p className="academicsSectionLabel">ACADEMIC BACKGROUND</p>

            <h2>Business, finance and earlier studies</h2>

            <p>
              My earlier education provides a broader foundation in analysis,
              business, finance, customer relationships and commercial
              environments.
            </p>
          </div>

          <div className="academicsTimeline">
            {academicBackground.map((item, index) => (
              <AcademicTimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        <div className="academicsSeparator" />

        {/* CLOSING */}
        <section className="academicsClosing">
          <p className="academicsSectionLabel">CONTINUOUS LEARNING</p>

          <h2>Technical knowledge built through both study and practice</h2>

          <p>
            I continue to strengthen the areas that are most relevant to
            technical support and application-oriented roles, while using
            hands-on work and personal technical projects to turn theory into
            practical understanding.
          </p>
        </section>
      </Container>
    </main>
  );
}
