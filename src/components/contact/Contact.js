import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.scss';

export class Contact extends Component {
    render() {
        return(
            <Form name="myForm" method="POST">
                <h1 className="text-center"><b>Contact Me</b></h1>
                <p><span className="required">*</span> is required</p>
                
                <Form.Group>
                    <Form.Label>Name <span className="required">*</span></Form.Label>
                    <Form.Control placeholder="Enter name"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email <span className="required">*</span></Form.Label>
                    <Form.Control type="email" placeholder="Enter email"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="(xxx) xxx-xxxx"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Website</Form.Label>
                    <Form.Control placeholder="Enter website link"></Form.Control>
                </Form.Group>
            
                <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control placeholder="Enter what message is about"></Form.Control>
                </Form.Group>
        
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Enter message"></Form.Control>
                </Form.Group>

                <Button variant="light" type="submit">Submit</Button>
            </Form>
        );
    }
}