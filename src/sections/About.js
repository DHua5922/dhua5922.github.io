import React from 'react';
import tw, { styled } from "twin.macro";
import ScrollBounce from '../components/views/ScrollBounce';

const Section = styled.section`
    padding: 45vh 10vw;
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
        <ScrollBounce>
            <Section id="about">
                    <Name>Dylan Hua</Name>
                    <Description>Front End Developer</Description>
            </Section>
        </ScrollBounce>
    ); 
}