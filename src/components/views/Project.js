import React from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import tw, { styled } from "twin.macro";

const ModalHeader = styled(Modal.Header)`
    ${tw`border-b-0`}
`;

const ModalBody = styled(Modal.Body)`
    ${tw`py-0`}
`;

const ModalFooter = styled(Modal.Header)`
    ${tw`border-t-0 justify-center`}
`;

export default function Project({ show, project, toggleClickedProject }) {
    return(
        <Modal
            show={show}
            onHide={() => toggleClickedProject(false)}
            centered
        >
            <ModalHeader closeButton>
                <Modal.Title>
                    {project.name}<br></br>
                </Modal.Title>
            </ModalHeader>
                
            <ModalBody>
                <Image 
                    tw="w-1/2 block mx-auto mb-5"
                    src={`images/${project.imgName}`} />
                <div>{project.description}</div>        
            </ModalBody>

            <ModalFooter>
                { 
                    project.links.map(link => {
                        const { url, label } = link;
                        return (
                            <a href={url} rel="noopener noreferrer" target="_blank">
                                <Button variant="primary" tw="m-1">{label}</Button>
                            </a>
                        );
                    }) 
                }
            </ModalFooter>
        </Modal>
    );
}