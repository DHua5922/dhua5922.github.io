import React from 'react';
import tw, { styled } from "twin.macro";
import Section from '../components/views/Section';

const Container = styled(Section)`
    padding: 40vh 10vw;
    ${tw`bg-white text-black text-center`}
`;

const Name = styled.h1`
    ${tw`text-8xl mb-12`}
`;

const Description = styled.h1`
    ${tw`text-lg`}
`;

export default function About({ ...props }) {
    return (
        <Container {...props}>
            <Name>Dylan Hua</Name>
            <Description>Front End Developer</Description>
        </Container>
    ); 
}