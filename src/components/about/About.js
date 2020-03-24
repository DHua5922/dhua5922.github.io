import React, {Component} from 'react';
import {NavigationBar} from '../navbar/NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './About.scss';
import { Helmet } from 'react-helmet';

export class About extends Component {
    render() {
        return(
            <Container fluid className="page">
                <Helmet>
                    <title>About Me</title>
                </Helmet>

                <NavigationBar />

                <Row className="about-row">
                    <Col xs="12" sm="12" md="4"><Image src={require("../../img/img_me.jpg")} /></Col>
                    <Col xs="12" sm="12" md="8">
                        <h1><b>About Me</b></h1>
                        <p className="description">
                            I am a senior, majoring in Computer Science at UT Dallas. Currently, my interests are full stack development, 
                            mobile app development, web development, and cloud computing. I built websites and mobile apps using several 
                            technologies, and I enjoy applying new technologies to continue developing websites and mobile apps.
                        </p>
                    </Col>
                </Row>
            </Container>
        ); 
    }
}