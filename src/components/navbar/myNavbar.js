import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './myNavbar.css';

function MyNavbar() {
    return (
      <Navbar className='nav-background nav-padding' expand="md" variant='dark'>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto nav-style"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link className='my-nav-link' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='my-nav-link' as={Link} to="/about">About</Nav.Link>
            <Nav.Link className='my-nav-link' as={Link} to="/projects">My Projects</Nav.Link>
            <Nav.Link className='my-nav-link' as={Link} to="/work">Work</Nav.Link>
            <Nav.Link className='my-nav-link' as={Link} to="/academics">Academics</Nav.Link>
            <Nav.Link className='my-nav-link' as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link className='my-nav-link my-resume' as={Link} to="/resume">Resume/CV</Nav.Link>
            {/* <button className='my-resume-btn'><a className='a-resume' href="../StefanBrunotteCV.pdf" download="StefanBrunotteCV.pdf" target="_blank">Download my CV</a></button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        
    );
  }

  export default MyNavbar;