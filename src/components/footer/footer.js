import React from "react";
import { Container } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="portfolioFooter">
      <Container className="portfolioFooterContainer">
        <div className="portfolioFooterContent">
          <div className="portfolioFooterBrand">
            <span className="portfolioFooterMark">SB</span>

            <div>
              <p className="portfolioFooterName">Stefan Brunotte</p>
              <p className="portfolioFooterRole">
                Application Support · Technical Support · System Support
              </p>
            </div>
          </div>

          <div className="portfolioFooterLinks">
            <a
              href="https://github.com/MrBrunotte"
              target="_blank"
              rel="noreferrer"
              aria-label="Stefan Brunotte on GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/stefanbrunotte/"
              target="_blank"
              rel="noreferrer"
              aria-label="Stefan Brunotte on LinkedIn"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:mrbrunotte@gmail.com"
              aria-label="Email Stefan Brunotte"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="portfolioFooterBottom">
          <p>© 2026 Stefan Brunotte</p>

          <p>
            Portfolio focused on technical support, systems and practical
            technical projects.
          </p>
        </div>
      </Container>
    </footer>
  );
}
