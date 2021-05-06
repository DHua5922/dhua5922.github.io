import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import "animate.css/animate.compat.css";
import { Section as ScrollSection } from 'react-scroll-section';

export default function Section({ children, ...rest }) {
    return (
        <ScrollSection {...rest}>
            <ScrollAnimation 
                animateIn="fadeIn" 
                duration={0.5} 
            >
                {children}
            </ScrollAnimation>
        </ScrollSection>
    );
}