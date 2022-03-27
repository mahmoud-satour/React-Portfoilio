import React from 'react';
import './NavBar.css';
import {Navbar ,Container ,Nav} from 'react-bootstrap';

function NavBar() {
    return (
        <nav>
            <Navbar expand="lg" className='fixed-top'>
                <Container>
                    <Navbar.Brand href="#home">MAHMOUD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="#HOME">HOME</Nav.Link>
                        <Nav.Link href="#ABOUT">ABOUT</Nav.Link>
                        <Nav.Link href="#SERVICES">SERVICES</Nav.Link>
                        <Nav.Link href="#PORTFOLIO">PORTFOLIO</Nav.Link>
                        <Nav.Link href="#CONTACT">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    )
}

export default NavBar;
