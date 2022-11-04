import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../App.css';
import logozeus from '../assets/Logo.svg'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='bg-white'>
            <Container fluid>
                <Navbar.Brand href="#home"><img src={logozeus} alt="React Bootstrap logo" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-between'>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#university">University</Nav.Link>
                        <Nav.Link href="#courses">Courses</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Uses Cases</Nav.Link>
                        <NavDropdown title="Plans" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#resources">Resources</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar