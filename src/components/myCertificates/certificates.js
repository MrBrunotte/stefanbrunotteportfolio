import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

import itTechSup from "./imagesCertificates/itTechSup.png";
import lexiconDotNet from "./imagesCertificates/lexiconDotNet.png";
import az900 from "./imagesCertificates/az900.png";
import ms900 from "./imagesCertificates/ms900.png";
import sc900 from "./imagesCertificates/sc900.png";
import networkingBasics from "./imagesCertificates/networkingBasics.png";
import security from "./imagesCertificates/cyberSecurity.png";
import ITIL4Smaller from "./imagesCertificates/ITIL4Smaller.png";

import "./certificates.css";

const certificates = [
  {
    title: "IT Support Technician & Help Desk",
    category: "IT SUPPORT",
    date: "31 May 2024",
    description:
      "Module-based IT support training covering Microsoft 365, networking, troubleshooting, endpoint administration, security, virtualization, Windows Server and PowerShell.",
    skills: [
      "Microsoft 365",
      "Azure",
      "Security",
      "Endpoint Management",
      "Networking",
      "PowerShell",
    ],
    image: itTechSup,
    verify:
      "https://verify.trueoriginal.com/84BBA250-DA0D-B8A2-A4D9-66B4EA4CE0DC/?ref=direct-copy",
  },
  {
    title: "ITIL 4 Foundation",
    category: "IT SERVICE MANAGEMENT",
    date: "17 April 2024",
    description:
      "Foundation-level understanding of IT service management, including the service value system, guiding principles, service value chain, continual improvement and core ITIL practices.",
    skills: [
      "ITIL",
      "Service Management",
      "Continual Improvement",
      "Service Value Chain",
    ],
    image: ITIL4Smaller,
  },
  {
    title: "Microsoft 365 Fundamentals",
    category: "MICROSOFT 365",
    date: "19 February 2024",
    description:
      "Foundational understanding of Microsoft 365 cloud services, SaaS concepts, productivity solutions and the value of Microsoft cloud technologies.",
    skills: ["Microsoft 365", "Cloud", "SaaS", "Microsoft Services"],
    image: ms900,
    verify:
      "https://www.credly.com/badges/8215931d-b052-4629-96ab-933c31a53465/public_url",
  },
  {
    title: "Security, Compliance & Identity Fundamentals",
    category: "SECURITY / IDENTITY",
    date: "2 April 2024",
    description:
      "Foundational understanding of security, compliance and identity concepts across Microsoft cloud and related services.",
    skills: ["Identity", "Security", "Compliance", "Microsoft Cloud"],
    image: sc900,
    verify:
      "https://www.credly.com/badges/5c27354a-ce19-48b5-9550-e98c7b7f0289/public_url",
  },
  {
    title: "Microsoft Azure Fundamentals",
    category: "AZURE",
    date: "3 February 2021",
    description:
      "Foundational knowledge of cloud concepts, Azure services, workloads, security, governance and Microsoft Azure fundamentals.",
    skills: ["Azure", "Cloud", "Governance", "Cloud Services"],
    image: az900,
    verify:
      "https://www.credly.com/badges/b8458211-2f50-431e-a982-dc3be39686a9/public_url",
  },
  {
    title: "Cisco Networking Basics",
    category: "NETWORKING",
    date: "19 February 2024",
    description:
      "Introductory networking knowledge covering network types, devices, addressing, cabling, transport, applications and practical Packet Tracer exercises.",
    skills: [
      "Networking",
      "IP Addressing",
      "Network Devices",
      "Cisco Packet Tracer",
    ],
    image: networkingBasics,
    verify:
      "https://www.credly.com/badges/b88a3e5b-4afc-4641-9e02-bddf63085865/public_url",
  },
  {
    title: "Cisco Introduction to Cybersecurity",
    category: "CYBERSECURITY",
    date: "30 April 2024",
    description:
      "Introductory cybersecurity training covering threats, vulnerabilities, defense concepts and the broader role of cybersecurity in modern organizations.",
    skills: [
      "Cybersecurity",
      "Threats",
      "Vulnerabilities",
      "Security Awareness",
    ],
    image: security,
    verify:
      "https://www.credly.com/badges/5a0c63d7-e0d6-4ee2-80be-7e38a3cd356d/public_url",
  },
  {
    title: ".NET Development",
    category: "SOFTWARE DEVELOPMENT",
    date: "15 February 2021",
    description:
      "Development training covering C#, object-oriented programming, ASP.NET Core MVC, Entity Framework, databases and full-stack application development.",
    skills: ["C#", "ASP.NET Core", "MVC", "Entity Framework", "SQL"],
    image: lexiconDotNet,
  },
];

export default function Certificates() {
  return (
    <main className="certificatesPage">
      <Container className="certificatesContainer">
        {/* INTRO */}
        <section className="certificatesHero">
          <p className="certificatesEyebrow">CERTIFICATIONS & TRAINING</p>

          <h1>
            Technical certifications supporting my work in IT support and
            systems
          </h1>

          <p className="certificatesLead">
            My training covers Microsoft 365, security, identity, Azure,
            networking, IT service management and software development. The
            strongest focus is on technologies and practices relevant to
            technical support, application support and system-oriented roles.
          </p>
        </section>

        <div className="certificatesSeparator" />

        {/* KEY AREAS */}
        <section className="certificatesSection">
          <div className="certificatesSectionHeader">
            <p className="certificatesSectionLabel">KEY AREAS</p>
            <h2>A broad technical foundation</h2>
            <p>
              The certifications complement my practical experience with
              Microsoft 365, identity, endpoint management, troubleshooting and
              technical support.
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <article className="certificatesFocusCard">
                <span className="certificatesCardNumber">01</span>
                <p className="certificatesCardLabel">MICROSOFT</p>
                <h3>Cloud, identity and productivity</h3>
                <p>
                  Microsoft 365, Azure, security, compliance and identity
                  fundamentals.
                </p>
              </article>
            </Col>

            <Col lg={4} md={6}>
              <article className="certificatesFocusCard">
                <span className="certificatesCardNumber">02</span>
                <p className="certificatesCardLabel">SUPPORT</p>
                <h3>Service management and troubleshooting</h3>
                <p>
                  IT support training combined with ITIL service management and
                  structured technical troubleshooting.
                </p>
              </article>
            </Col>

            <Col lg={4} md={12}>
              <article className="certificatesFocusCard">
                <span className="certificatesCardNumber">03</span>
                <p className="certificatesCardLabel">TECHNICAL FOUNDATION</p>
                <h3>Networking and development</h3>
                <p>
                  Networking, cybersecurity, C#, ASP.NET and database
                  fundamentals provide broader system understanding.
                </p>
              </article>
            </Col>
          </Row>
        </section>

        <div className="certificatesSeparator" />

        {/* CERTIFICATES */}
        <section className="certificatesSection">
          <div className="certificatesSectionHeader">
            <p className="certificatesSectionLabel">CERTIFICATES</p>
            <h2>Selected certifications and diplomas</h2>
            <p>
              Where verification is available, the certificate can be opened
              directly from the card.
            </p>
          </div>

          <Row className="g-4">
            {certificates.map((certificate, index) => (
              <Col key={certificate.title} lg={4} md={6} xs={12}>
                <article className="certificateCard">
                  <div className="certificateImageWrap">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="certificateImage"
                    />
                  </div>

                  <div className="certificateBody">
                    <div className="certificateCardTop">
                      <p className="certificatesCardLabel">
                        {certificate.category}
                      </p>

                      <span className="certificatesCardNumber">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3>{certificate.title}</h3>

                    <p className="certificateDate">{certificate.date}</p>

                    <p className="certificateDescription">
                      {certificate.description}
                    </p>

                    <div className="certificateTags">
                      {certificate.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>

                    {certificate.verify && (
                      <a
                        href={certificate.verify}
                        target="_blank"
                        rel="noreferrer"
                        className="certificateVerifyLink"
                      >
                        Verify certificate
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </section>

        <div className="certificatesSeparator" />

        {/* CLOSING */}
        <section className="certificatesClosing">
          <div>
            <p className="certificatesSectionLabel">CONTINUOUS LEARNING</p>

            <h2>Training that supports practical technical work</h2>

            <p>
              I use certifications as a way to strengthen the technical
              foundation behind practical support work, not as a substitute for
              hands-on troubleshooting and system experience.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
