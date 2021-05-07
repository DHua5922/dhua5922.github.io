import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import "animate.css/animate.compat.css";
import { Section as ScrollSection } from 'react-scroll-section';
import tw from "twin.macro";

const Container = tw(ScrollSection)`min-h-screen`;

export default function Section({ children, ...rest }) {
    return (
        <ScrollAnimation animateIn="fadeIn">
            <Container {...rest}>
                {children}
            </Container>
        </ScrollAnimation>
    );
}