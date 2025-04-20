import React from "react";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

interface NavLinkType {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}

interface Props {
  sticky?: "top" | "bottom";
  collapseOnSelect?: boolean;
  expand?: "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
  ["data-bs-theme"]?: "dark" | "light";
  leftLinks: NavLinkType[];
  rightLinks: NavLinkType[];
}

function Navbar({ leftLinks, rightLinks, ...props }: Props) {
  return (
    <BootstrapNavbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="dark"
      {...props}
    >
      <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />

      <BootstrapNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {leftLinks.map(({ children, ...props }, index) => (
            <Nav.Link key={index} {...props}>
              {children}
            </Nav.Link>
          ))}
        </Nav>

        <Nav>
          {rightLinks.map(({ children, ...props }, index) => (
            <Nav.Link
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </Nav.Link>
          ))}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;
