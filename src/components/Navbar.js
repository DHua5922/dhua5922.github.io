import { Navbar as BNavbar, Nav } from 'react-bootstrap';
import React from "react";

const links = [
    {
        href: "#about",
        label: "About Me"
    },
    {
        href: "#portfolio",
        label: "Portfolio"
    },
    {
        href: "#contact",
        label: "Contact Me"
    },
];

export default function Navbar() {
    return (
        <BNavbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <BNavbar.Brand href="#about">Dylan Hua</BNavbar.Brand>
            <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
            <BNavbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto mr-auto">
                    {
                        links.map(link => {
                            const { href, label } = link;
                            return <Nav.Link href={href}>{label}</Nav.Link>;
                        })
                    }
                </Nav>
            </BNavbar.Collapse>
        </BNavbar>
    );
}