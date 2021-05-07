import React from 'react';
import tw, { styled } from "twin.macro";
import Center from '../components/views/Center';
import NewTabLink from '../components/views/NewTabLink';
import Section from '../components/views/Section';
import { linkedinUrl } from '../global';

const Container = styled(Section)`
    background-color: #111134;
    ${tw`text-white relative`}
`;

const Header = styled.h1`
    ${tw`text-center mb-8 font-bold`}
`;

const Description = styled.div`
    max-width: 700px;
    ${tw`text-xl m-auto`}
`;

export default function Contact({ ...props }) {
    return(
        <Container {...props}>
            <Center>
                <Header>Contact Me</Header>
                <Description>
                    You can reach out to me on <NewTabLink href={linkedinUrl}>LinkedIn</NewTabLink> or email me at hua.dylan@gmail.com
                </Description>
            </Center>
        </Container>
    );
}