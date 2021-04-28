import React from 'react';
import Image from 'react-bootstrap/Image';
import tw, { styled } from "twin.macro";

const Section = styled.section`
    padding: 60px 10vw;
    ${tw`bg-white text-black`}
`;

const Header = styled.h1`
    ${tw`text-4xl text-center mb-8 font-bold`}
`;

const Row = styled.div`
    ${tw`justify-center block md:flex`}
`;

const Description = styled.p`
    ${tw`text-xl`}
`;

export default function About() {
    return (
        <Section id="about">
            <Header>About</Header>
            <Row>
                <Image tw="block mx-auto" src="images/img_me.jpg"/>
                <div tw="p-5" />
                <Description>
                    As Web Portal UI Developer, I have experience in front end development with React, HTML, and CSS. I was also a software developer intern for Codubee in which I gained full stack development experience using Node.js and React.
                </Description>
            </Row>
        </Section>
    ); 
}