import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'

function MyNavScroll() {
  
    return (
    <div>
        <Navbar collapseOnSelect fixed='top' bg='dark' variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand>Tecchnoweit</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-nav-bar' />
                    <Navbar.Collapse id-controls='responsive-nav-bar'>
                        <Nav className='ms-auto'>
                            <Nav.Link>
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
    </div>
  )
}

export default MyNavScroll