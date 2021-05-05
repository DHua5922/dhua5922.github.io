import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import "animate.css/animate.compat.css";

export default function ScrollBounce({ children }) {
    return (
        <ScrollAnimation 
            animateIn="fadeIn" 
            duration={0.5} 
        >
            {children}
        </ScrollAnimation>
    );
}