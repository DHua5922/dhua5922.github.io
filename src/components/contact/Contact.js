import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.scss';
import {NavigationBar} from '../navbar/NavigationBar';
import {InputGroup} from './InputGroup';
import { Helmet } from 'react-helmet';

export class Contact extends Component {
    render() {
        return(
            <div className="page">
                <Helmet>
                    <title>Contact Me</title>
                </Helmet>

                <NavigationBar />
                
                <Form 
                    action="https://formspree.io/hua.dylan@gmail.com"
                    method="POST"
                    validated
                >
                    <h1><b>Contact Me</b></h1>
                    <p><span className="required">*</span> is required</p>
                    
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
                        required={false}
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

                    <Button variant="light" type="submit">Submit</Button>
                </Form>  
            </div>
        );
    }
}