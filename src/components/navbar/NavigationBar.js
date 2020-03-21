import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavigationBar.scss';

export class NavigationBar extends Component {
    render() {
        return(
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="nav-links">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}