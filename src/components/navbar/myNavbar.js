import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

import "./myNavbar.css";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const closeMenu = () => setExpanded(false);

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className="portfolioNavbar"
      sticky="top"
    >
      <Container className="portfolioNavbarContainer">
        <Navbar.Brand
          as={Link}
          to="/"
          className="portfolioBrand"
          onClick={closeMenu}
        >
          <span className="portfolioBrandMark" aria-hidden="true">
            SB
          </span>

          <span className="portfolioBrandText">
            STEFAN
            <span> BRUNOTTE</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
          className="portfolioNavbarToggle"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto portfolioNav">
            <Nav.Link
              onClick={closeMenu}
              className={`portfolioNavLink ${isActive("/") ? "active" : ""}`}
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={closeMenu}
              className={`portfolioNavLink ${isActive("/about") ? "active" : ""}`}
              as={Link}
              to="/about"
            >
              About
            </Nav.Link>

            <Nav.Link
              onClick={closeMenu}
              className={`portfolioNavLink ${
                isActive("/projects") ? "active" : ""
              }`}
              as={Link}
              to="/projects"
            >
              Projects
            </Nav.Link>

            <Nav.Link
              onClick={closeMenu}
              className={`portfolioNavLink ${
                isActive("/certificates") ? "active" : ""
              }`}
              as={Link}
              to="/certificates"
            >
              Certificates
            </Nav.Link>

            <Nav.Link
              onClick={closeMenu}
              className={`portfolioNavLink ${isActive("/work") ? "active" : ""}`}
              as={Link}
              to="/work"
            >
              Work
            </Nav.Link>

            <Nav.Link
              onClick={closeMenu}
              className={`portfolioNavLink ${
                isActive("/academics") ? "active" : ""
              }`}
              as={Link}
              to="/academics"
            >
              Academics
            </Nav.Link>

            <Nav.Link
              onClick={closeMenu}
              className={`portfolioNavLink ${
                isActive("/contact") ? "active" : ""
              }`}
              as={Link}
              to="/contact"
            >
              Contact
            </Nav.Link>

            <Nav.Link
              onClick={closeMenu}
              className="portfolioResumeLink"
              as={Link}
              to="/resume"
            >
              Resume / CV
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
