import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function MyNavBar() {
    return (
        <div>
            <Navbar collapseOnSelect bg='dark' variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand>Tecchnoweit</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-nav-bar' />
                    <Navbar.Collapse id-controls='responsive-nav-bar'>
                        <Nav className='ms-auto'>
                            <Nav.Link>
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/about">About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/contact">Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </div>
    )
}

export default MyNavBar