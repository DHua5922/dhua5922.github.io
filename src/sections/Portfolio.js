import React, { useState } from 'react';
import projectsList from '../ProjectList';
import { Row, Col, Card } from 'react-bootstrap';
import Project from '../components/views/Project';
import tw, { styled } from "twin.macro";

const Section = styled.section`
    background-color: lightgreen;
    padding: 60px 10vw;
`;

const Header = styled.h1`
    ${tw`text-center mb-8 font-bold`}
`;

const ProjectDisplay = styled(Card)`
    ${tw`w-full h-full cursor-pointer`}
`;

const ProjectImage = styled(Card.Img)`
    height: 275px;
    ${tw`w-full`}
`;

export default function Portfolio() {
    const [clickedProject, setClickedProject] = useState(null);

    return (
        <Section id="portfolio">
            <Header>Portfolio</Header>

            <Row>
                {
                    projectsList.map(project => (
                        <Col tw="p-4" xs="12" sm="6" lg="4">
                            <ProjectDisplay onClick={() => setClickedProject(project)}>
                                <ProjectImage src={`images/${project.imgName}`}/>      
                                <Card.Body tw="text-center">   
                                    <Card.Title tw="m-0">{project.name}</Card.Title>  
                                </Card.Body>    
                            </ProjectDisplay>
                        </Col>
                    ))
                }
            </Row>

            { clickedProject &&
                <Project 
                    toggleClickedProject={setClickedProject} 
                    show={true} 
                    project={clickedProject} />
            }           
        </Section>
    );   
}