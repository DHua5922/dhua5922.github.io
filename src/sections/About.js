import React from 'react';
import tw, { styled } from "twin.macro";

const Section = styled.section`
    padding: 40vh 10vw;
    ${tw`bg-white text-black text-center`}
`;

const Name = styled.h1`
    ${tw`text-8xl mb-12`}
`;

const Description = styled.h1`
    ${tw`text-lg`}
`;

export default function About() {
    return (
        <Section id="about">
            <Name>Dylan Hua</Name>
            <Description>Front End Developer</Description>
        </Section>
    ); 
}