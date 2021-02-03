import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.scss';
import {InputGroup} from './InputGroup';

export function Contact() {
    return(
        <section id="contact">                
            <Form 
                action="https://formspree.io/hua.dylan@gmail.com"
                method="POST"
                validated
            >
                <h2 id="title">Contact Me</h2>
                
                <InputGroup
                    required={true}
                    label="Name"
                    name="name"
                    type="text"
                    as="input"
                    placeholder="Enter name"
                />

                <InputGroup
                    required={true}
                    label="Email"
                    name="email"
                    type="email"
                    as="input"
                    placeholder="Enter email"
                />  

                <InputGroup
                    required={true}
                    label="Subject"
                    name="subject"
                    type="text"
                    as="input"
                    placeholder="Enter what message is about"
                />  

                <InputGroup
                    required={true}
                    label="Message"
                    name="message"
                    type="text"
                    as="textarea"
                    placeholder="Enter message"
                />      

                <Button type="submit">Submit</Button>
            </Form>  
        </section>
    );
}