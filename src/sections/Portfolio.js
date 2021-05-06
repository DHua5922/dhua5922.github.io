import React, { useState } from 'react';
import projectsList from '../ProjectList';
import { Card } from 'react-bootstrap';
import Project from '../components/views/Project';
import tw, { styled } from "twin.macro";
import AnimatedGrid from '../components/views/AnimatedGrid';
import Section from '../components/views/Section';

const Container = styled(Section)`
    background-color: lightgreen;
    padding: 60px 20vw;
`;

const Header = styled.h1`
    ${tw`text-center mb-8 font-bold`}
`;

const ProjectDisplay = styled(Card)`
    box-shadow: 3px 4px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    ${tw`w-full h-full cursor-pointer`}
`;

const ProjectImage = styled(Card.Img)`
    height: 275px;
    ${tw`w-full`}
`;

export default function Portfolio({ ...props }) {
    const [clickedProject, setClickedProject] = useState(null);

    return (
        <Container {...props}>
            <Header>Portfolio</Header>

            <AnimatedGrid>
                {
                    projectsList.map(project => (
                        <ProjectDisplay onClick={() => setClickedProject(project)}>
                            <ProjectImage src={`images/${project.imgName}`}/>      
                            <Card.Body tw="text-center">   
                                <Card.Title tw="m-0">{project.name}</Card.Title>  
                            </Card.Body>    
                        </ProjectDisplay>
                    ))
                }
            </AnimatedGrid>

            { 
                clickedProject &&
                    <Project 
                        toggleClickedProject={setClickedProject} 
                        show={true} 
                        project={clickedProject} 
                    />
            }
        </Container>
    );   
}