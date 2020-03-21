import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.scss';
import {NavigationBar} from '../navbar/NavigationBar';

export class Contact extends Component {

    state = {
        error: false,
        submitMessage: "",
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Contact form submitted", this.refs);
        if(this.isValid(this.refs["name"].value, this.refs["email"].value)) {
            fetch(process.env.REACT_APP_CONTACT_URL, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: this.refs["name"].value,
                        email: this.refs["email"].value,
                        subject: this.refs["subject"].value,
                        message: this.refs["message"].value
                    })
                })
            .then(() => {
                    this.setState({
                        submitMessage: "Success!", 
                        error: false
                    })
                })
            .catch(() => {
                    this.setState({
                        submitMessage: "Unable to submit form.", 
                        error: true
                    })
                });
            
        } else {
            this.setState({
                submitMessage: "Error. Make sure name and email are not empty.", 
                error: true
            })
        }
    }

    isValid = (name, email) => {
        return name.length > 0 && email.length > 0;
    }

    render() {
        return(
            <div className="page">
                <NavigationBar />
                <Form onSubmit={this.handleSubmit}>
                    <h1 className="text-center"><b>Contact Me</b></h1>
                    <p><span className="required">*</span> is required</p>
                    
                    <Form.Group>
                        <Form.Label>Name <span className="required">*</span></Form.Label>
                        <Form.Control ref="name" placeholder="Enter name"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email <span className="required">*</span></Form.Label>
                        <Form.Control ref="email" type="email" placeholder="Enter email"></Form.Control>
                    </Form.Group>
                
                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control ref="subject" placeholder="Enter what message is about"></Form.Control>
                    </Form.Group>
            
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control ref="message" as="textarea" rows="3" placeholder="Enter message"></Form.Control>
                    </Form.Group>

                    <Button variant="light" type="submit">Submit</Button>
                    <p className={this.state.error ? "form-error": "success"}>{this.state.submitMessage}</p>
                </Form>
                
            </div>
        );
    }
}