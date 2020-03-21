import React, {Component} from 'react';
import {NavigationBar} from '../navbar/NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './About.scss';

export class About extends Component {
    state = {
        myInfo: null,
        error: null,
        isLoaded: false
    };

    componentDidMount() {
        fetch(process.env.REACT_APP_ABOUT_URL)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        error: null,
                        myInfo: result,
                        isLoaded: true
                    });
                },
                error => {
                    this.setState({
                        error: "Cannot load",
                        myInfo: null,
                        isLoaded: true
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, myInfo } = this.state;
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
                    <h1 className="loading"><b>Loading...</b></h1>
                </div>
            );
        } else {
            return(
                <Container fluid className="page">
                    <NavigationBar />
                    
                    <Row className="about-row">
                        <Col xs="12" sm="12" md="4"><Image src={require("../../img/" + myInfo.imgName)} /></Col>
                        <Col xs="12" sm="12" md="8">
                            <h1><b>About Me</b></h1>
                            <p className="description">{myInfo.description}</p>
                        </Col>
                    </Row>
                </Container>
            );
        }
        
    }
}