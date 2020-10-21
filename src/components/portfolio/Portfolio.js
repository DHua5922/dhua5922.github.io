import React, {Component} from 'react';
import {Project} from '../project/Project';
import './Portfolio.scss';
import {projectsList} from './ProjectList';
import {FaInfo} from "react-icons/fa";
import { Row, Col, Card } from 'react-bootstrap';

export class Portfolio extends Component {
    state = {
        clickedProject: null,
        showProject: false
    };

    toggleClickedProject = (showProject) => {
		this.setState({
			showProject: showProject
		});
	}

    render() {
        return (
            <section id="portfolio">
                <h1 className="header"><b>Portfolio</b></h1>
                <Row>
                    {projectsList.map(project => (
                        <Col className="project-col" xs="12" sm="6" lg="4">
                            <Card className="project-display">
                                <Card.Img className="img" src={require("../../img/" + project.imgName)}/>      
                                <Card.Body className="label">   
                                    <Card.Title className="name">{project.name}</Card.Title>  
                                    <div className="info-icon"
                                        onClick={() => this.setState({clickedProject: project}, this.toggleClickedProject(true))}>
                                            <FaInfo />
                                    </div>
                                </Card.Body>    
                            </Card>
                        </Col>
                    ))}
                </Row>
                {this.state.showProject &&
                    <Project 
                        toggleClickedProject={this.toggleClickedProject} 
                        show={this.state.showProject} 
                        project={this.state.clickedProject} />
                }           
            </section>
        );   
    }
}