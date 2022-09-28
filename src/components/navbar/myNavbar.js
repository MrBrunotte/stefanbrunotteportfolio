import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import me from '../../images/me.png';
import './myNavbar.css';

function MyNavbar() {
    return (
      <Navbar className='nav-background nav-padding' expand="md" variant='dark'>
      <Container fluid>
      <Navbar.Brand href="#home">
            {/* <img
              src={me}
              width="auto"
              height="100"
              alt="Stefan Brunotte"
            /> */}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto nav-style"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link className='my-nav-link' href="#home">Home</Nav.Link>
            <Nav.Link className='my-nav-link' href="#about">About</Nav.Link>
            <Nav.Link className='my-nav-link' href="#projects">My Projects</Nav.Link>
            <Nav.Link className='my-nav-link' href="#work">Work</Nav.Link>
            <Nav.Link className='my-nav-link' href="#acacemics">Academics</Nav.Link>
            <Nav.Link className='my-nav-link' href="#contact">Contact</Nav.Link>
            <Nav.Link className='my-nav-link my-border' target="blank" href="#link">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        
    );
  }

  export default MyNavbar;