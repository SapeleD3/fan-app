import React, { Component } from 'react'
import logo from '../images/logo213.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class Header extends Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark" fixed="top" className="navbar" expand="lg">

                    <Container>
                        <Navbar.Brand>
                            <img src={logo} alt='fanapp-logo' className='logo'/>
                            FanApp
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="ml-auto ml-5 link">
                                <Nav.Link className="nav-link pr-4">
                                    Log In
                                </Nav.Link>

                                <Button className='nav-btn'>Sign Up</Button>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        )
    }
}
export default Header