import React, {Component} from 'react';
import './Project.scss';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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
                        <Image 
                            style={{width: "50%"}}
                            src={`images/${this.props.project.imgName}`} />
                    </Container>
                    <p>{this.props.project.description}</p>        
                </Modal.Body>

                <Modal.Footer>
                    { 
                        this.props.project.links.map(link => {
                            const { url, label } = link;
                            return (
                                <a href={url} rel="noopener noreferrer" target="_blank">
                                    <Button variant="primary">{label}</Button>
                                </a>
                            );
                        }) 
                    }
                </Modal.Footer>
            </Modal>
        );
    }
}