import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import tw, { styled } from "twin.macro";
import NewTabLink from './NewTabLink';

const ModalHeader = styled(Modal.Header)`
    ${tw`border-b-0`}
`;

const ModalBody = styled(Modal.Body)`
    ${tw`py-0`}
`;

const ModalFooter = styled(Modal.Header)`
    ${tw`border-t-0 justify-center`}
`;

export default function Project({ project }) {
    const { open, name, imgName, description, links } = project;
    const [show, setShow] = useState(open);
    
    useEffect(() => setShow(open), [project, open]);

    return(
        <Modal
            show={show}
            onHide={() => setShow(false)}
            centered
        >
            <ModalHeader closeButton>
                <Modal.Title>
                    {name}<br />
                </Modal.Title>
            </ModalHeader>
                
            <ModalBody>
                <Image 
                    tw="w-1/2 block mx-auto mb-5"
                    src={`images/${imgName}`} />
                <div>{description}</div>        
            </ModalBody>

            <ModalFooter>
                { 
                    links.map((link, index) => {
                        const { url, label } = link;
                        return (
                            <NewTabLink 
                                key={index}
                                href={url} 
                            >
                                <Button variant="primary" tw="m-1">{label}</Button>
                            </NewTabLink>
                        );
                    }) 
                }
            </ModalFooter>
        </Modal>
    );
}