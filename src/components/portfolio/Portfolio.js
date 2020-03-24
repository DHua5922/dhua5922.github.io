import React, {Component} from 'react';
import {Project} from '../project/Project';
import './Portfolio.scss';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavigationBar} from '../navbar/NavigationBar';
import {projectsList} from './ProjectList';
import { Helmet } from 'react-helmet';

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
        console.log(projectsList);
        return (
            <Container fluid className="page">
                <Helmet>
                    <title>My Portfolio</title>
                </Helmet>

                <NavigationBar />

                <h1 className="header"><b>My Portfolio</b></h1>
                <Row className="portfolio-row">
                    {projectsList.map(project => (
                        <Col xs="12" sm="12" md="6" lg="4" xl="3" style={{padding:"1vh"}}>
                            <div className="project-display">                    
                                    <Image 
                                        onClick={(event) => this.setState({clickedProject: project}, this.toggleClickedProject(true))}
                                        src={require("../../img/" + project.imgName)}/>      
                                <h6><div>{project.name}</div></h6>
                            </div>
                        </Col>
                    ))}
                </Row>
                {this.state.showProject &&
                    <Project toggleClickedProject={this.toggleClickedProject} show={this.state.showProject} project={this.state.clickedProject} />
                }           
            </Container>
        );   
    }
}