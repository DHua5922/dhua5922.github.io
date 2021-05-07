import { Navbar as BNavbar, Nav } from 'react-bootstrap';
import React from "react";
import tw, { styled } from "twin.macro";
import { useScrollSection } from 'react-scroll-section';
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function useLinks() {
    return {
        left: [
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
        ],
        right: [
            {
                url: "https://www.linkedin.com/in/dylanhua/",
                icon: <FaLinkedin tw="text-white text-3xl" />,
            },
            {
                url: "https://github.com/DHua5922",
                icon: <AiFillGithub tw="text-white text-3xl" />,
            },
        ],
    };
}

const SNavbar = styled(BNavbar)`
    ${tw`bg-black`}
`;

function NavLink({ children, ...rest }) {
    return (
        <Nav.Link
            rel="noopener noreferrer" 
            target="_blank"
            {...rest}
        >
            {children}
        </Nav.Link>
    );
}

export default function Navbar() {
    const { left, right } = useLinks();
    return (
        <SNavbar collapseOnSelect expand="lg" variant="dark" sticky="top">
            <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
            <BNavbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {
                        left.map((link, index) => {
                            const { label, ...rest } = link;
                            return (
                                <NavLink 
                                    key={index} 
                                    {...rest}
                                >
                                    {label}
                                </NavLink>
                            );
                        })
                    }
                </Nav>
                <Nav className="ml-auto">
                    {
                        right.map((link, index) => {
                            const { url, icon } = link;
                            return (
                                <NavLink 
                                    key={index}
                                    href={url}
                                >
                                    {icon}
                                </NavLink>
                            );
                        })
                    }
                </Nav>
            </BNavbar.Collapse>
        </SNavbar>
    );
}