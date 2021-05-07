import React from 'react';
import tw, { styled } from "twin.macro";
import Center from '../components/views/Center';
import Section from '../components/views/Section';

const Container = tw(Section)`bg-white text-black relative`;

const Name = styled.h1`
    ${tw`text-7xl mb-12 text-center`}
`;

const Description = styled.div`
    max-width: 800px;
    ${tw`text-lg m-auto`}
`;

export default function About({ ...props }) {
    return (
        <Container {...props}>
            <Center>
                <Name>Dylan Hua</Name>
                <Description>
                    I am a front end developer who loves to make beautiful applications like the slick React website that helped over 20,000 users
                    request IT services. Making a website that evaluates a stock using React and Node.js helped me gain full stack development experience. 
                    To continue honing my skills and learn new things, I take on personal projects on my free time.
                </Description>
            </Center>
        </Container>
    ); 
}