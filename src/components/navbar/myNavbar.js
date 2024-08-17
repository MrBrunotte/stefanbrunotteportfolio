import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './myNavbar.css';

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark">
        <Container fluid>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-style">

              <Nav.Link onClick={() => setExpanded(false)} className="nav-link my-nav-link" as={Link} to="/">Home</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} className='nav-link my-nav-link' as={Link} to="/about">About</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} className='nav-link my-nav-link' as={Link} to="/projects">My Projects</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} className='nav-link my-nav-link' as={Link} to="/certificates">My Certificates & Diplomas</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} className='nav-link my-nav-link' as={Link} to="/work">Work</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} className='nav-link my-nav-link' as={Link} to="/academics">Academics</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} className='nav-link my-nav-link' as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} className='nav-link my-nav-link my-resume' as={Link} to="/resume">Resume/CV</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>  
    );
  }

  export default MyNavbar;