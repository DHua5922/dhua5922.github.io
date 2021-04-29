import React from 'react';
import Form from 'react-bootstrap/Form';
import tw, { styled } from "twin.macro";

const FormGroup = styled(Form.Group)`
    input, textarea, input:focus, textarea:focus {
        border-width: 2px;
        background-color: #000027;
        ${tw`border-0 rounded-none`}
    }
`;

export default function InputGroup({ label, name, type, as, placeholder }) {
    return(      
        <FormGroup>
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                name={name} 
                type={type} 
                as={as} 
                placeholder={placeholder} 
                required
            />
        </FormGroup>
    );
}