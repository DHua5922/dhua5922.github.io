import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Field from '../components/views/Field';
import tw, { styled } from "twin.macro";
import Section from '../components/views/Section';

const Container = styled(Section)`
    background-color: #111134;
    padding: 60px 10vw;
    ${tw`text-white`}
`;

const SForm = styled(Form)`
    max-width: 500px;
    ${tw`m-auto`}
`;

const Header = styled.h1`
    ${tw`text-center mb-8 font-bold`}
`;

const SubmitButton = styled(Button)`
    background-color: #28a745;
    margin-top: 15px;
    padding: 12px 0;
    ${tw`shadow-none border-0 w-full rounded-none`}
`;

const fields = [
    {
        label: "Name",
        name: "name",
        type: "text",
        as: "input",
        placeholder: "Enter name",
    },
    {
        label: "Email",
        name: "email",
        type: "email",
        as: "input",
        placeholder: "Enter email",
    },
    {
        label: "Subject",
        name: "subject",
        type: "text",
        as: "input",
        placeholder: "Enter what message is about",
    },
    {
        label: "Message",
        name: "message",
        type: "text",
        as: "textarea",
        placeholder: "Enter message",
    },
];

export default function Contact({ ...props }) {
    return(
        <Container {...props}>
            <SForm 
                action="https://formspree.io/hua.dylan@gmail.com"
                method="POST"
                validated
            >
                <Header>Contact Me</Header>
                { fields.map(field => <Field {...field} />) }
                <SubmitButton type="submit">Submit</SubmitButton>
            </SForm> 
        </Container>
    );
}