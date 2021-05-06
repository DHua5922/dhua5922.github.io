import { Navbar as BNavbar, Nav } from 'react-bootstrap';
import React from "react";
import tw, { styled } from "twin.macro";
import { useScrollSection } from 'react-scroll-section';

function useLinks() {
    return [
        {
            label: "About",
            ...useScrollSection('about')
        },
        {
            label: "Portfolio",
            ...useScrollSection('portfolio')
        },
        {
            label: "Contact",
            ...useScrollSection('contact')
        },
    ];
}

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
                        useLinks().map(link => {
                            const { label, ...rest } = link;
                            return <Nav.Link {...rest}>{label}</Nav.Link>;
                        })
                    }
                </Nav>
            </BNavbar.Collapse>
        </SNavbar>
    );
}