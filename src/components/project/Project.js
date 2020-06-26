import React, {Component} from 'react';
import './Project.scss';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show
        }
    }

    render() {
        console.log(this.props.project);
        return(
            <Modal
                show={this.state.show}
                onHide={() => this.props.toggleClickedProject(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.project.name}<br></br>
                    </Modal.Title>
                </Modal.Header>
                    
                <Modal.Body>
                    <small>
                        {this.props.project.type}
                        <span style={{float: "right"}}>
                            { this.props.project.startDate === this.props.project.endDate ? 
                                this.props.project.startDate :
                                `${this.props.project.startDate} - ${this.props.project.endDate}`
                            }
                        </span>
                    </small>
                    <Container fluid className="media-container">
                        { this.props.project.videoName ? 
                            (<Row>
                                <Col>
                                    <Image 
                                        style={{width: "100%"}}
                                        src={require("../../img/" + this.props.project.imgName)} />
                                </Col>
                                <Col>
                                        <video width="100%" height="100%" controls>
                                            <source src={require("../../video/" + this.props.project.videoName)} type="video/mp4"></source>
                                            Your browser does not support the video tag.
                                        </video>
                                    
                                </Col>
                            </Row>) : (<Image 
                                                style={{width: "50%"}}
                                                src={require("../../img/" + this.props.project.imgName)} />)
                        }
                    </Container>
                    <p>{this.props.project.description}</p>        
                </Modal.Body>

                <Modal.Footer>
                    { this.props.project.website &&
                        <a href={this.props.project.website} rel="noopener noreferrer" target="_blank">
                            <Button variant="primary">Website</Button>
                        </a>
                    }
                    { this.props.project.android_app &&
                        <a href={this.props.project.android_app} rel="noopener noreferrer" target="_blank">
                            <Button variant="primary">Android App</Button>
                        </a>
                    }
                    { this.props.project.githubUrl &&
                        <a href={this.props.project.githubUrl} rel="noopener noreferrer" target="_blank">
                            <Button variant="primary">GitHub</Button>
                        </a>
                    }
                    { this.props.project.presentation &&
                        <a href={this.props.project.presentation} rel="noopener noreferrer" target="_blank">
                            <Button variant="primary">Presentation</Button>
                        </a>
                    }
                </Modal.Footer>
            </Modal>
        );
    }
}