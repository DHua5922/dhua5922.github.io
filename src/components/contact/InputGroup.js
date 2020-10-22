import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import './InputGroup.scss';

export class InputGroup extends Component {
    render() {
        const {label, name, type, as, placeholder, required} = this.props;

        return(      
            <Form.Group>
                { required ?
                    (
                        <>
                            <Form.Label>{label}</Form.Label>
                            <Form.Control name={name} type={type} as={as} placeholder={placeholder} required></Form.Control>
                        </>
                    ) : 
                    (
                        <>
                            <Form.Label>{label}</Form.Label>
                            <Form.Control name={name} type={type} as={as} placeholder={placeholder}></Form.Control>
                        </>
                    )
                }
                
            </Form.Group>
        );
    }
}