import { Navbar as BNavbar, Nav } from 'react-bootstrap';
import React from "react";
import tw, { styled } from "twin.macro";

const links = [
    {
        href: "#about",
        label: "About"
    },
    {
        href: "#portfolio",
        label: "Portfolio"
    },
    {
        href: "#contact",
        label: "Contact"
    },
];

const SNavbar = styled(BNavbar)`
    ${tw`bg-black`}
`;

export default function Navbar() {
    return (
        <SNavbar collapseOnSelect expand="lg" variant="dark" sticky="top">
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
        </SNavbar>
    );
}