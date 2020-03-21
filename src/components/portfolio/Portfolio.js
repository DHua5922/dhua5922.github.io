import React, {Component} from 'react';
import {Project} from '../project/Project';
import './Portfolio.scss';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavigationBar} from '../navbar/NavigationBar';

export class Portfolio extends Component {
    state = {
        projects: null,
        isLoaded: false,
        error: null,
        clickedProject: null,
        showProject: false
    };

    componentDidMount() {
        fetch(process.env.REACT_APP_PROJECTS_URL)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        error: null,
                        projects: result,
                        isLoaded: true
                    });
                },
                error => {
                    this.setState({
                        error: "Cannot load projects",
                        projects: null,
                        isLoaded: true
                    });
                }
            );
    }

    toggleClickedProject = (showProject) => {
		this.setState({
			showProject: showProject
		});
	}

    render() {
        const { error, isLoaded, projects } = this.state;
        console.log(projects);
        if (error) {
            return (
                <div className="page">
                    <NavigationBar />
                    <h1 className="error"><b>{error}</b></h1>
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className="page">
                    <NavigationBar />
                    <h1 className="loading"><b>Loading projects...</b></h1>
                </div>
            );
        } else {
            return (
                <Container fluid className="page">
                    <NavigationBar />
                    <h1 className="header"><b>My Portfolio</b></h1>
                    <Row className="portfolio-row">
                        {projects.map(project => (
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
}